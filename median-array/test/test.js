var chai = require('chai');

var { findMedianSortedArrays } = require('../median-array.js');

describe('Median of Two Sorted Arrays', function() {
    it('should return 2.5', function() {
        chai.expect(findMedianSortedArrays([1, 3], [2])).to.equal(2);
    });
    it('should return 2', function() {
        chai.expect(findMedianSortedArrays([1, 2], [3, 4])).to.equal(2.5);
    });
});