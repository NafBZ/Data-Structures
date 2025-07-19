import matplotlib.pyplot as plt

def find_maximum(nums):
    """
    Function to find the maximum number in a list of integers.
    
    Args:
    - nums (list of int): List of integers
    
    Returns:
    - int or None: Maximum number in the list or None if the list is empty
    """
    
    # Total complexity: 
    
    if not nums:
        return None
   
    max_num = nums[0] # Complexity: O(1)
    for num in nums: # Complexity: O(n) where n is the number of elements of the given list
        if num > max_num: # Complexity: O(1)
            max_num = num # Complexity: O(1)
    return max_num

def visualize_data(nums):
    """
    Function to visualize the numbers in the list with the maximum number highlighted.
    
    Args:
    - nums (list of int): List of integers
    """
    max_num = find_maximum(nums)
    
    plt.figure(figsize=(8, 6))
    
    for num in nums:
        if num == max_num:
            plt.scatter(nums.index(num), num, color='red', s=100, label='Maximum Number')
        else:
            plt.scatter(nums.index(num), num, color='blue')
    
    plt.title('Numbers in the List')
    plt.xlabel('Index')
    plt.ylabel('Number')
    plt.legend()
    plt.grid(True)
    plt.show()


def test_find_maximum():
    # Empty list
    assert find_maximum([]) is None

    # List with positive integers
    assert find_maximum([1, 5, 3, 9, 2]) == 9

    # List with negative integers
    assert find_maximum([-5, -2, -10, -1, -3]) == -1

    # List with mixed positive and negative integers
    assert find_maximum([-5, 3, -10, 8, -1, 6]) == 8

    # List with duplicate numbers
    assert find_maximum([3, 5, 7, 5, 3, 9]) == 9

    # List with only one element
    assert find_maximum([8]) == 8

    # Large list
    assert find_maximum(list(range(1000000))) == 999999

    print("All test cases passed!")

# Run the test cases
test_find_maximum()

# Example usage
numbers = [5, 8, 3, 12, 9, 7, 15, 6, 1, 15]
print("List of numbers:", numbers)

# Finding the maximum number
max_number = find_maximum(numbers)
print("Maximum number:", max_number)

# Visualizing the data
visualize_data(numbers)
