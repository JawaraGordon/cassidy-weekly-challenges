// Given a list of integers, write a function that finds the longest subsequence where the difference between consecutive elements is either 1 or -1. Return the length of this subsequence.

// Examples:
// > longestSubsequence([1,2,3,4,5])
// 5
// > longestSubsequence([4,2,3,1,5])
// 2
// > longestSubsequence([10,11,7,8,9,12])
// 3

// const nums = [0,0,0,0,0,];
// // const nums = [1, 2, 3, 2, 5, 6, 7, 8, 9];

// const longestSubsequence = (nums) => {
//   let maxSub = 0;
//   let currentSub = 1;

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (Math.abs(nums[i] - nums[i + 1]) === 1) {
//       currentSub++;
//     } else {
//       if (currentSub > maxSub) {
//         maxSub = currentSub;
//       }
//       currentSub = 1;
//     }
//   }

//   if (currentSub > maxSub) {
//     maxSub = currentSub;
//   }

//   return maxSub;
// };

// const result = longestSubsequence(nums);
// console.log(result);

// with error handling for edge cases

// const nums = [1, 2, 3, 2, 5, 6, 7, 8, 9];
const nums = [4, 4, 4, 4];
// const nums = [0, 0, 0, 0];
// const nums = [];
// const nums = ['apple', 'orange'];
// const nums = [2.5, 4.3, 5.6, 8.9];
// const nums = [{},{},2,45,];
// const nums = [[],[],2,45,];

const validateNums = (nums) => {
  if (!Array.isArray(nums)) {
    throw new Error('The input must be an array.');
  }
  if (nums.length === 0) {
    throw new Error('The array must not be empty.');
  }
  if (nums.length < 2) {
    throw new Error('The array must contain more than 1 number.');
  }

  if (nums.some((num) => typeof num !== 'number')) {
    throw new Error('The array must contain only integers.');
  }
  if (nums.some((num) => !Number.isInteger(num))) {
    throw new Error('The array must not contain decimals.');
  }

  if (nums.every((num) => num === nums[0])) {
    throw new Error('The array cannot contain the same integer repeated.');
  }
  if (nums.every((num) => num === 0)) {
    throw new Error('The array must contain more than zero(s).');
  }
};

const longestSubsequence = (nums) => {
  try {
    validateNums(nums);

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
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

const result = longestSubsequence(nums);
console.log(result);
