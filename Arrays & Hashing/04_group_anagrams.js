/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ['act', 'pots', 'tops', 'cat', 'stop', 'hat']
Output: [['hat'], ['act', 'cat'], ['stop', 'pots', 'tops']]
*/

const groupAnagrams = (strs) => {
    const groups = new Map();

    for(let i = 0; i < strs.length; i++){
        const sortedStr = strs[i].split('').sort().join('');
        const currArr = groups.get(sortedStr);

        if(!currArr) {
            groups.set(sortedStr, [strs[i]]);
        } else {
            currArr.push(strs[i]);
            groups.set(sortedStr, currArr);
        }
    }

    return Array.from(groups.values());
}

export { groupAnagrams };

