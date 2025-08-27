import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from "../getBuffer";

test("should convert data to a correct string", () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});