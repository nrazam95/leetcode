var chai = require('chai');

var { twoSum } = require('../two-sum.js');

describe('Two Sum', function() {
    it('should return [0, 1]', function() {
        chai.expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    });
    it('should return [1, 2]', function() {
        chai.expect(twoSum([3, 2, 4], 6)).to.deep.equal([1, 2]);
    });
    it('should return [0, 1]', function() {
        chai.expect(twoSum([3, 3], 6)).to.deep.equal([0, 1]);
    });
})