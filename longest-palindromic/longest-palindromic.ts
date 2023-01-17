/**
 * For each index in the string, find the longest palindrome that can be made by expanding around the
 * current index
 * @param {string} s - the string we're searching for the longest palindrome in
 * @returns The longest palindromic substring
 */
function longestPalindrom(s: string): string {
  if (s.length <= 1) return s;
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCentre(s, i, i);
    const len2 = expandAroundCentre(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

/**
 * It expands the palindrome around the centre and returns the length of the palindrome
 * @param {string} s - the string we're searching for palindromes in
 * @param {number} left - the left index of the current palindrome
 * @param {number} right - the right index of the palindrome
 * @returns The length of the longest palindrome substring.
 */
function expandAroundCentre(s: string, left: number, right: number): number {
  let L = left, R = right;
  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--;
    R++;
  }
  return R - L - 1;
}

console.log(longestPalindrom("zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"))