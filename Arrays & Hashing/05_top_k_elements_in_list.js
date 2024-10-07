/*
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Example 2
Input: nums = [7,7], k = 1
Output: [7]
*/

const topKElements = (nums, k) => {
    const count = {}

    for(let i = 0; i < nums.length; i++){
        count[nums[i]] = 1 + (count[nums[i]] || 0);
    }

    const freqArr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)]);
    freqArr.sort((a, b) => b[0] - a[0]);

    return freqArr.slice(0, k).map(pair => pair[1]);
}

export { topKElements }