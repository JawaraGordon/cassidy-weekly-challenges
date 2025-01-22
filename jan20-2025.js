// Given a list of integers, write a function that finds the longest subsequence where the difference between consecutive elements is either 1 or -1. Return the length of this subsequence.
// Examples:
// > longestSubsequence([1,2,3,4,5])
// 5
// > longestSubsequence([4,2,3,1,5])
// 2
// > longestSubsequence([10,11,7,8,9,12])
// 3

const nums = [1, 2, 3, 4, 5];

const longestSubsequence = (nums) => {
  obj = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] < 1) {
      obj.push(nums[i]);
    } else if (nums[i] + nums[i + 1] > 1) {
      obj.push(nums[i]);
    }
  }
  return obj;
};

result = longestSubsequence(nums);
console.log(result);
