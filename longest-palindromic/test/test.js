var chai = require('chai');

var { longestPalindrome } = require('../longest-palindromic.js');

describe('Longest Palindromic Substring', function() {
    it('should return bb', function() {
        chai.expect(longestPalindrome('cbbd')).to.equal('bb');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('a')).to.equal('a');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aa')).to.equal('aa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaa')).to.equal('aaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaa')).to.equal('aaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaa')).to.equal('aaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaa')).to.equal('aaaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaaa')).to.equal('aaaaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaaaa')).to.equal('aaaaaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaaaaa')).to.equal('aaaaaaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaaaaaa')).to.equal('aaaaaaaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaaaaaaa')).to.equal('aaaaaaaaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaaaaaaaa')).to.equal('aaaaaaaaaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaaaaaaaaa')).to.equal('aaaaaaaaaaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaaaaaaaaaa')).to.equal('aaaaaaaaaaaaaa');
    });
    it('should return a', function() {
        chai.expect(longestPalindrome('aaaaaaaaaaaaaaa')).to.equal('aaaaaaaaaaaaaaa');
    });
});