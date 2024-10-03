/**
Given an integer array nums, return true if any value appears more than once in an array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]
Output: true

Example 2:

Input: nums = [1, 2, 3, 4]
Output: false
*/

const hasDuplicate = (nums) => {
  let foundNums = {}

  for(let i = 0; i < nums.length; i++){
    if(foundNums[nums[i]]){
      return true;
    }

    foundNums[nums[i]] = 1;
  }

  return false;
}

export { hasDuplicate };
