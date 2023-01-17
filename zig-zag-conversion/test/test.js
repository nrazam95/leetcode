var chai = require('chai');

var { convert } = require('../zig-zag-conversion.js');

describe('Zig Zag Conversion', function() {
    it('should return PAHNAPLSIIGYIR', function() {
        chai.expect(convert('PAYPALISHIRING', 3)).to.equal('PAHNAPLSIIGYIR');
    });
    it('should return PAHNAPLSIIGYIR', function() {
        chai.expect(convert('PAYPALISHIRING', 4)).to.equal('PINALSIGYAHRPI');
    });
    it('should return A', function() {
        chai.expect(convert('A', 1)).to.equal('A');
    });
    it('should return AB', function() {
        chai.expect(convert('AB', 1)).to.equal('AB');
    });
});