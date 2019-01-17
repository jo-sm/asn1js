const base64 = require('./base64');
const hex = require('./hex');
const asn1 = require('./asn1');

const hexRegex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;

module.exports = {
  decode: function(value) {
    const isHex = hexRegex.test(value);
    let der;

    if (isHex) {
      der = hex.decode(value);
    } else {
      der = base64.unarmor(value);
    }

    return asn1.decode(der);
  }
}
