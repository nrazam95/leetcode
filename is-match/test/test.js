var chai = require('chai');

var { isMatch } = require('../is-match.js');

describe('Regular Expression Matching', function() {
    it('should return true', function() {
        chai.expect(isMatch('aa', 'a')).to.equal(false);
    });
    it('should return true', function() {
        chai.expect(isMatch('aa', 'a*')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('ab', '.*')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aab', 'c*a*b')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('mississippi', 'mis*is*p*.')).to.equal(false);
    });
    it('should return true', function() {
        chai.expect(isMatch('mississippi', 'mis*is*ip*.')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'ab*a*c*a')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'a*a')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'a*aa')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'a*a*a')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'a*a*a*a')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'a*a*a*a*a')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'a*a*a*a*a*a')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'a*a*a*a*a*a*a')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'a*a*a*a*a*a*a*a')).to.equal(true);
    });
    it('should return true', function() {
        chai.expect(isMatch('aaa', 'a*a*a*a*a*a*a*a*a')).to.equal(true);
    });
});