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

## JavaScript Solution Explained:

First, I'm creating a helper function called validateNums that handles any errors thrown by incorrect data types or invalid inputs.

Next, I'm declaring an arrow function called longestSubsequence that takes one argument called nums (an array of integers). I'm wrapping the function login inside a try-catch block that will throw an error by passing the function argument through the validateNums helper function. Then I'm initializing two variables, maxSub and currentSub. These will hold the values for the longest valid subsequence (grouping of numbers) and the current valid subsequence.

The function will then use a for loop to iterate through nums to check each number in the index against the next number in the index stopping at the second to last index. (JavaScript will allow you to compare nums.length instead of nums.length -1 but it will return undefined which throws an out of bounds error leading to unintended behavior, so it's best practice not to do this.)

Next, I'm using an if statement to determine whether the number at the current index of (nums[i]) minus the next (index[i+1]) is strictly equal to 1. The challenge asks to determine if the difference between consecutive elements is either 1 or -1 so I'm using Math.abs() to find the absolute difference which eliminates the need to check for both 1 and -1 separately. The function then increments currentSub if this is true. If this is false, the function checks to see if the currentSub is greater than the maxSub and updates maxSub with the current high score. It then resets currentSub to 1 to start logging a new sequence.

When the loop is done and all numbers in nums have been checked, currentSub and maxSub are checked one last time and maxSub is returned. The function will log any errors if they occur. Finally, it will print the longest valid subsequence to the console.

## JavaScript Solution Code:

```javascript
const nums = [1, 2, 3, 2, 5, 6, 7, 8, 9];
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
```

## Python Solution Explained:

First, I’m creating a helper function called validate_nums that handles errors thrown by incorrect data types or invalid inputs. This function checks to make sure that the input is a list, is not an empty list, has more than one number, contains only integers (no decimals), and contains more than zeros.

Next, I’m declaring a function called longest_subsequence that takes one argument called nums (a list of integers). I’m wrapping the function logic inside a try-except block that will handle any errors by passing the function argument through validate_nums. Then, I’m initializing two variables, max_sub and current_sub. These will hold the values for the longest valid subsequence (a grouping of numbers) and the current valid subsequence.

The function uses a for loop to iterate through nums to check each integer at the current index against the next number in the index, stopping at the second to last index. (Python raises an index error if you try to access an index past the list length, so stopping at len(nums) - 1 prevents this from happening.)

Next, I’m using an if statement to determine if the absolute difference between the current number (nums[i]) and the next number (nums[i+1]) is equal to 1. The challenge asks to find the difference between consecutive elements is either 1 or -1, so using abs() eliminates the need to check for both cases separately. The function increments current_sub if the condition is true. If this condition is false, the function checks whether current_sub is greater than max_sub and updates max_sub with the current high score. It then resets current_sub to 1 to start logging a new sequence.

When the loop is done and all numbers in the list have been checked, current_sub and max_sub are checked one last time. The function returns max_sub, which contains the length of the longest valid subsequence. Finally, if any errors occur, the message is printed, and the function returns None.

## Python Solution Code:

```python
def validate_nums(nums):
    if not isinstance(nums, list):
             raise ValueError("The input must be a list.")

    if len(nums) == 0:
        raise ValueError("The list must not be empty.")

    if any(not isinstance(num, (int, float)) for num in nums):
        raise ValueError("The list must contain only numbers.")

    if len(nums) < 2:
        raise ValueError("The list must contain more than one number.")

    if any(isinstance(num, float) and not num.is_integer() for num in nums):
            raise ValueError("The list must not contain decimals.")

    if all(num == 0 for num in nums):
        raise ValueError("The list must not contain only zero(s).")

def longest_subsequence(nums):
    try:

        validate_nums(nums)
        max_sub = 0
        current_sub = 1
        for i in range(len(nums) - 1):
            if abs(nums[i] - nums[i+1]) == 1:
                current_sub+=1
            elif current_sub > max_sub:
                    max_sub	= current_sub
                    current_sub = 1

        if current_sub > max_sub:
            max_sub =  current_sub
        return max_sub
    except ValueError as e:
        print(f"Error: {e}")
        return None

result = longest_subsequence(nums)
print(result)

```
