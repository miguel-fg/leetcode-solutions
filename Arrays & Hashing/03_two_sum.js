/*
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.
*/

const twoSum = (nums, target) => {
  const map = new Map();

  for(let i = 0; i < nums.length; i++){
    const num = nums[i];
    const complement = target - num;

    if(map.has(complement)){
        return [map.get(complement), i];
    }

    map.set(num, i);
  }

  return [-1, -1];
};

export { twoSum };
