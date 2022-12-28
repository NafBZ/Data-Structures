# Rotate a square matrix by 90 degree.

# Here are two examples. First one with space complexity of O(1) and the second one with space complexity O(n).
# Time complexity is same O(n^2) for both the solutions.

import numpy as np


def rotation(matrix):
    rows = matrix.shape[0]
    for slice in range(rows // 2):
        first = slice
        last = rows - slice - 1
        for i in range(first, last):

            top = matrix[slice][i]

            matrix[slice][i] = matrix[-i - 1][slice]

            matrix[-i - 1][slice] = matrix[-slice - 1][-i - 1]

            matrix[-slice - 1][-i - 1] = matrix[i][- slice - 1]

            matrix[i][- slice - 1] = top
    return matrix


def rotation_easy(matrix):
    n = matrix.shape[0]
    arr = np.zeros((n, n))  # Extra Space O(N)
    for j in range(n):
        for i in range(n-1, -1, -1):
            arr[i][j] = matrix[i][j]

    return arr


matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

if __name__ == '__main__':
    print(rotation(matrix))
    print(rotation_easy(matrix))
