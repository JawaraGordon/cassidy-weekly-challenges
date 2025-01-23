# Cassidy's Weekly Challenge Questions

## January 20, 2025:

Given a list of integers, write a function that finds the longest subsequence where the difference between consecutive elements is either 1 or -1. Return the length of this subsequence.

### Examples:

```javascript
> longestSubsequence([1,2,3,4,5])
5
> longestSubsequence([4,2,3,1,5])
2
> longestSubsequence([10,11,7,8,9,12])
3
```

## Solution Explained:

I'm declaring an arrow function called longestSubsequence that takes one argument called nums (an array if integers).

Next, I'm initializing two variables, maxSub and currentSub. These will hold the values for the longest valid subsequence (grouping of numbers) and the current valid subsequence.

The function will then use a for loop to iterate through nums to check each number in the index against the next number in the index stopping at the second to last index. (JavaScript will allow you to compare nums.length instead of nums.length -1 but it returns NaN which is bad, so it's best practice not to do this.)

Next, I'm using an if statement to determine whether the number at the current index of (nums[i]) minus the next (index[i+1]) is strictly equal to 1. The challenge asks to determine if the difference between consecutive elements is either 1 or -1 so I'm using Math.abs() to find the absolute difference which eliminates the need to check for both 1 and -1 separately. The function then increments currentSub if this is true. If this is false, the function checks to see if the currentSub is greater than the maxSub and updates maxSub with the current high score. It then resets currentSub to 1 to start logging a new sequence.

When the loop is done and all numbers in nums have been checked, currentSub and maxSub are checked one last time and maxSub is returned. This will show the length of the final sequence which is printed to the console.

## Solution Code:

```javascript
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
```
