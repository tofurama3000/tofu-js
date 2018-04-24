const expect = require('chai').expect
const {
    new_,
    Null,
    proxylessChar,
    valIndex,
    transform
} = require('../src/object')
const Obj = require('./basic-obj')

describe('Object', function() {
    describe('Function new_', function() {
        it('creates an object', function() {
            const obj = new_(Obj);
            expect(obj.isNull()).to.be.false;
            expect(JSON.parse(JSON.stringify(obj.$))).to.deep.equal(
                JSON.parse(JSON.stringify(new Obj())));

            // Check that non-existant fiels return Null
            expect(obj.notDefined).to.equal(Null);
            expect(obj.notDefined.isNull()).to.be.true;

            // check fields

            // Double .$ to get the dollar sign field
            // This is required since the first $ converts obj to a non-proxy
            //  and the second $ grabs the dollarsign field
            expect(obj.$.$).to.equal('$');
            // Alternatively, just grab the value directly
            expect(obj[proxylessChar + '$']).to.equal('$');

            // null and underfined should be transformed to Null
            expect(obj.nil).to.equal(Null);
            expect(obj.nil.isNull()).to.be.true;
            expect(obj[valIndex('nil')]).to.be.null;
            expect(obj.undef).to.equal(Null);
            expect(obj.undef.isNull()).to.be.true;
            expect(obj[valIndex('undef')]).to.be.null;

            // check primitives
            expect(obj.int.$).to.equal(4);
            expect(obj[valIndex('double')]).to.equal(5.4);
            expect(obj.str.isNull()).to.be.false;
            expect(obj.str.$).to.equal('hello world');
            expect(obj.str[0].$).to.equal('h');
            expect(obj.str['1:4'].$).to.equal('ell');
            expect(obj.str['1:4'].$).to.equal('ell');
            expect(obj.bool.$).to.be.true;
            expect(obj.bool.isNull()).to.be.false;

            // Check functions
            expect(obj.func.$()).to.equal(true);
            expect(obj.hello.$()).to.equal('world');

            // Check nested objects
            expect(obj.obj.a.$).to.equal(4);
            expect(obj.obj.d).to.equal(Null);
            expect(obj.obj.d.$).to.be.null;
            expect(obj.obj.isNull()).to.equal(false);
            expect(obj._class.foo.$).to.equal('bar');

            // Check nested proxies
            expect(obj.custom_class.foo.$).to.equal('bar');

            // Check arrays
            expect(obj.arr[0].$).to.equal(1);
            expect(obj.arr[valIndex(3)]).to.equal(4);
            expect(obj.arr.$[0]).to.equal(1);
            expect(obj.arr.$[2]).to.equal(3);
        })

        it('properly handles has', function() {
            const obj = new_(Obj);
            expect('isNull' in obj).to.be.true;
            expect('$' in obj).to.be.true;
            expect(proxylessChar in obj).to.be.true;
            expect('nil' in obj).to.be.true;
            expect('undef' in obj).to.be.true;
            expect('str' in obj).to.be.true;
            expect('func' in obj).to.be.true;
            expect('arr' in obj).to.be.true;
            expect('obj' in obj).to.be.true;
            expect('_class' in obj).to.be.true;
            expect('custom_class' in obj).to.be.true;
            expect('notDefined' in obj).to.be.false;
            expect('bool' in obj).to.be.true;

            expect('isNull' in obj.obj).to.be.true;
            expect('$' in obj.obj).to.be.true;
            expect(proxylessChar in obj.obj).to.be.true;
            expect('notDefined' in obj.obj).to.be.false;

            expect('isNull' in obj.custom_class).to.be.true;
            expect('$' in obj.custom_class).to.be.true;
            expect(proxylessChar in obj.custom_class).to.be.true;
            expect('notDefined' in obj.custom_class).to.be.false;
        })
    })

    describe('Function transform', function() {
        it('makes a proxy for an object', function() {
            let obj = {hello: 'world'};
            let proxy = transform(obj);
            expect(proxy.hello.$).to.equal('world');
            expect(obj.hello).to.equal('world')
        })
    })

    describe('Strings', function() {
        const str = transform('hello world');

        it('can come from transform', function() {
            expect(str.$).to.equal('hello world');
        })

        it('has a working isNull', function() {
            expect(str.isNull()).to.be.false;
        })

        it('properly handles has', function() {
            expect(0 in str).to.be.true;
            expect(1 in str).to.be.true;
            expect(-1 in str).to.be.true;
            expect(100 in str).to.be.false;
            expect(-100 in str).to.be.false;
            expect('length' in str).to.be.true;
            expect('notAProp' in str).to.be.false;
            expect('$' in str).to.be.true;
            expect(proxylessChar in str).to.be.true;
            expect('isNull' in str).to.be.true;
        })

        it('can return length', function() {
            expect(str.length.$).to.equal(11)
        })

        describe('Indexing', function() {
            it('accepts negative indices', function() {
                expect(str[-3].$).to.equal('r')
            })

            it('accepts positive indices', function() {
                expect(str[1].$).to.equal('e')
            })

            it('accepts ranges', function() {
                expect(str[proxylessChar + '1:7']).to.equal('ello w');
                expect(str[proxylessChar + '-7:-2']).to.equal('o wor');
                expect(str[proxylessChar + ':-4']).to.equal('hello w');
                expect(str[proxylessChar + '-4:']).to.equal('orld')
                expect(str['1:7'][-1].$).to.equal('w');
                expect(str['-7:-2'][0].$).to.equal('o');
            })

            it('returns null when index is out of range', function(){
                expect(str[-100]).to.equal(Null);
                expect(str[100]).to.equal(Null);
            })

            it('accepts multiple indices', function() {
                const a = str[[1,3,40,4]];
                expect(a.$).to.deep.equal(['e','l',null,'o']);
                expect(a[0].$).to.equal('e');
                expect(a[2]).to.equal(Null);
            })
        })
    })

    describe('Arrays', function() {
        const arr = transform([1,2,3,4,5]);

        it('can come from transform', function() {
            expect(arr.$).to.deep.equal([1,2,3,4,5]);
        })

        it('has a working isNull', function() {
            expect(arr.isNull()).to.be.false;
        })

        it('properly handles has', function() {
            expect(0 in arr).to.be.true;
            expect(1 in arr).to.be.true;
            expect(-1 in arr).to.be.true;
            expect(100 in arr).to.be.false;
            expect(-100 in arr).to.be.false;
            expect('length' in arr).to.be.true;
            expect('notAProp' in arr).to.be.false;
            expect('$' in arr).to.be.true;
            expect(proxylessChar in arr).to.be.true;
            expect('isNull' in arr).to.be.true;
        })

        it('can return length', function() {
            expect(arr.length.$).to.equal(5)
        })

        describe('Indexing', function() {
            it('accepts negative indices', function() {
                expect(arr[-3].$).to.equal(3)
            })

            it('accepts positive indices', function() {
                expect(arr[1].$).to.equal(2)
            })

            it('accepts ranges', function() {
                expect(arr[proxylessChar + '1:4']).to.deep.equal([2,3,4]);
                expect(arr[proxylessChar + '-3:-2']).to.deep.equal([3]);
                expect(arr[proxylessChar + ':-4']).to.deep.equal([1]);
                expect(arr[proxylessChar + '-4:']).to.deep.equal([2,3,4,5]);
                expect(arr['1:4'][1].$).to.equal(3);
                expect(arr['-3:-2'][0].$).to.equal(3);
            })

            it('returns null when index is out of range', function(){
                expect(arr[-100]).to.equal(Null);
                expect(arr[100]).to.equal(Null);
            })

            it('accepts multiple indices', function() {
                const a = arr[[1,3,40,4]];
                expect(a.$).to.deep.equal([2,4,null,5]);
                expect(a[0].$).to.equal(2);
                expect(a[2]).to.equal(Null);
            })
        })
    })

    describe('Numbers', function() {
        const int = transform(4);
        const double = transform(4.5);

        it('can be transformed', function() {
            expect(int.$).to.equal(4);
            expect(double.$).to.equal(4.5);
        })

        it('has a working isNull', function() {
            expect(int.isNull()).to.be.false;
            expect(double.isNull()).to.be.false;
        })
    })

    describe('Functions', function() {
        const func = transform(() => 43);

        it('can be transformed', function() {
            expect(func.$()).to.equal(43);
        })

        it('has a working isNull', function() {
            expect(func.isNull()).to.be.false;
        })
    })

    describe('Nested Objects', function() {
        it('does not double nest', () => {
            const obj1 = transform({h: 5});
            const obj2 = transform(obj1);

            expect(obj1).to.equal(obj2);
            expect(obj1.h.$).to.equal(5);
            expect(obj2.h.$).to.equal(5);
        })
    })

    describe('Booleans', function() {
        const bool = transform(true);

        it('can be transformed', function() {
            expect(bool.$).to.be.true;
        })

        it('has a working isNull', function() {
            expect(bool.isNull()).to.be.false;
        })
    })
})
