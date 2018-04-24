const expect = require('chai').expect
const {Null, proxylessChar, valIndex} = require('../src/object')
const Obj = require('./basic-obj')

describe('Null', function() {
    it('has isNull', function() {
        expect(Null.isNull).to.be.a('function');
    })

    describe('isNull', function() {
        it('returns true', function() {
            expect(Null.isNull()).to.be.true;
        })
    })

    it('evaluates to null', function() {
        expect(Null.$).to.be.null;
        expect(Null[proxylessChar]).to.be.null;
        expect(Null[valIndex('')]).to.be.null;
        expect(Null[valIndex()]).to.be.null;
    })

    describe('children return Null', function() {
        expect(Null.a).to.equal(Null);
        expect(Null.a.b).to.equal(Null);
        expect(Null.foo.bar.zig.zag.fizz.buzz.fizzbuzz).to.equal(Null);
        expect(Null.foo.bar.zig.zag.fizz.buzz.fizzbuzz.$).to.be.null;
        expect(Null.foo.bar.zig.zag.fizz.buzz.fizzbuzz.isNull()).to.be.true;
    })
})