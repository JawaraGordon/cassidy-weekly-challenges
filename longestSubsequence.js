// Given a list of integers, write a function that finds the longest subsequence where the difference between consecutive elements is either 1 or -1. Return the length of this subsequence.

// Examples:
// > longestSubsequence([1,2,3,4,5])
// 5
// > longestSubsequence([4,2,3,1,5])
// 2
// > longestSubsequence([10,11,7,8,9,12])
// 3

const nums = [1, 2, 3, 2, 5, 6, 7, 8, 9];

const longestSubsequence = (nums) => {
  let maxSub = 0;
  let currentSub = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (Math.abs(nums[i] - nums[i + 1]) === 1) {
      currentSub++;
    } else {
      if (currentSub > maxSub) {
        maxSub = currentSub;
      }
      currentSub = 1;
    }
  }

  if (currentSub > maxSub) {
    maxSub = currentSub;
  }

  return maxSub;
};

const result = longestSubsequence(nums);
console.log(result);
