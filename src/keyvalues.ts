const enum KeyValueType {
  None = 0,
  String,
  Int,
  Float,
  Ptr,
  WString,
  Color,
  UInt64,
  CompiledIntByte, // hack to collapse 1 byte ints in the compiled format
  CompiledInt0, // hack to collapse 0 in the compiled format
  CompiledInt1, // hack to collapse 1 in the compiled format
  NumTypes
}

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export type KeyValuesPrimitive = string | number | Color | Long | { [key: string]: KeyValues };
export type KeyValues = KeyValuesPrimitive[] | KeyValuesPrimitive;

function parseValue(type: KeyValueType, buffer: ByteBuffer): KeyValues {
  switch (type) {
    case KeyValueType.None:
      var inner: { [key: string]: KeyValues } | string[] = {};
      type = buffer.readUint8();
      while (type !== KeyValueType.NumTypes) {
        var name = buffer.readCString();
        var value = parseValue(type, buffer);
        if (name == '') {
          if (typeof value !== 'string')
            throw 'Expected keyless KeyValues to have string value';
          if (Array.isArray(inner)) {
            inner.push(value);
          } else {
            inner = [value];
          }
        } else {
          if (Array.isArray(inner))
            throw 'Unexpected mix of empty and non-empty keys in KeyValues';
          inner[name] = value;
        }

        type = buffer.readUint8();
      }
      return inner;
    case KeyValueType.String:
      return buffer.readCString();
    case KeyValueType.Int:
      return buffer.readInt();
    case KeyValueType.Float:
      return buffer.readFloat();
    case KeyValueType.Ptr:
      return buffer.readUint32();
    case KeyValueType.WString:
      throw 'wstring values are not supported';
    case KeyValueType.Color:
      return {
        r: buffer.readUint8(),
        g: buffer.readUint8(),
        b: buffer.readUint8(),
        a: buffer.readUint8()
      };
    case KeyValueType.UInt64:
      return buffer.readUint64();
    case KeyValueType.CompiledIntByte:
      return buffer.readUint8();
    case KeyValueType.CompiledInt0:
      return 0;
    case KeyValueType.CompiledInt1:
      return 1;
    default:
      throw `Invalid KeyValues types ${type}`;
  }
}

export function parseBinaryKeyValues(buffer: ByteBuffer): { [name: string]: KeyValues } {
  var type = buffer.readUint8();
  return {
    [buffer.readCString()]: parseValue(type, buffer)
  };
}
