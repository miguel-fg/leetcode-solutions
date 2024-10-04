/**
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

const isAnagram = (s, t) => {
    if(s.length !== t.length){
        return false;
    }

    const mapS = {};
    const mapT = {};

    for(let i = 0; i < s.length; i++){
        mapS[s[i]] = (mapS[s[i]] || 0) + 1;
        mapT[t[i]] = (mapT[t[i]] || 0) + 1;
    }

    for(const key in mapS){
        if(mapS[key] !== mapT[key]){
            return false;
        }
    }

    return true;
}

export { isAnagram }