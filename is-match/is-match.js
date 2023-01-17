/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function dfs(s,p,i,j){
    if(i >= s.length && j>=p.length){
        return true;
    }
    if(j >= p.length){
        return false;
    }
    let match=i<s.length && (s[i]==p[j]|| p[j]==".")
    if((j+1)<p.length && p[j+1]=="*"){
        return ((match && dfs(s,p,i+1,j)) ||  dfs(s,p,i,j+2));
    }
    else if(match){
       return dfs(s,p,i+1,j+1)
    }
    else return false
}
var isMatch = function(s, p) {
   return dfs(s,p,0,0)
};

module.exports = { isMatch };