var ByteBuffer = require('bytebuffer');

ByteBuffer.prototype.readVBytes = function (offset) {
  var length = this.readVarint32(offset);

  if (typeof offset !== 'undefined') {
    offset += length.length;
    length = length.value;
  }

  return this.readBytes(length, offset);
};

ByteBuffer.prototype.readIBytes = function (offset) {
  var length = this.readInt32(offset);

  if (typeof offset !== 'undefined') {
    offset += 4;
  }

  return this.readBytes(length, offset);
};

ByteBuffer.prototype.toSlicedBuffer = function () {
  return this.buffer.slice(this.offset, this.limit);
};

module.exports = ByteBuffer;
