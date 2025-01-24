# // Given a list of integers, write a function that finds the longest subsequence where the difference between consecutive elements is either 1 or -1. Return the length of this subsequence.
# // Examples:
# // > longestSubsequence([1,2,3,4,5])
# // 5
# // > longestSubsequence([4,2,3,1,5])
# // 2
# // > longestSubsequence([10,11,7,8,9,12])
# // 3

nums = [1,2,3,2,5,6,7,8,9]
# nums = [0, 0, 0, 0]
# nums = []
# nums = ['apple', 'orange']
# nums = [2.5, 4.3, 5.6, 8.9]
# nums = [{},{},2,45,]
# nums = [[],[],2,45,]

#  brute force solution
# def longest_subsequence(nums):
#     max_sub = []  
#     current_sub = []	
#     for i in range(len(nums) - 1):  
#         if abs(nums[i] - nums[i+1]) == 1:  
#             current_sub.append(nums[i])	 
#         else:
#             current_sub.append(nums[i])	
#             if len(current_sub) > len(max_sub):	
#                 max_sub = current_sub
#         current_sub = []
	        
#     current_sub.append(nums[-1])		
#     if len(current_sub) > len(max_sub):
#            max_sub =  current_sub
#     return max_sub 

# result = longest_subsequence(nums)
# print(result)

# refactored solution
# def longest_subsequence(nums):
#     max_sub = 0  
#     current_sub = 1	
#     for i in range(len(nums) - 1):  
#         if abs(nums[i] - nums[i+1]) == 1:  
#             current_sub+=1	 
#         elif current_sub > max_sub:
#                 max_sub	= current_sub
#                 current_sub = 1
	        		
#     if current_sub > max_sub:
#            max_sub =  current_sub
#     return max_sub 

# result = longest_subsequence(nums)
# print(result)

# refactored solution with error handling
def longest_subsequence(nums):
    try:
        if not isinstance(nums, list):
             raise ValueError("The input must be a list.")
        
        if len(nums) == 0:
            raise ValueError("The list must not be empty.")
        
        if any(not isinstance(num, (int, float)) for num in nums):
            raise ValueError("The list must contain only numbers.")
        
        if any(isinstance(num, float) and not num.is_integer() for num in nums):
             raise ValueError("The list must not contain decimals.")

        if all(num == 0 for num in nums):
            raise ValueError("The list must not contain only zeros.") 
        
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