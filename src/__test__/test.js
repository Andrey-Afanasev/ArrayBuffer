import getBuffer from '..js/ArrayBuffer';
import ArrayBufferConverter from '..js/ArrayBufferConverter';

test('check ', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const bufferConvert = new ArrayBufferConverter();
  const buffer = getBuffer();
  bufferConvert.load(buffer);
  expect(bufferConvert.toString()).toEqual(data);
});