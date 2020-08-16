import { isBuffer } from './isBuffer';

describe('isBuffer', () => {
  it('detects buffers', () => {
    expect(isBuffer(Buffer.from('hello', 'utf8'))).toBe(true);
    expect(isBuffer('hello')).toBe(false);
  });
});
