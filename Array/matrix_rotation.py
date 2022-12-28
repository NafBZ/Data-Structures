# Rotate a square matrix by 90 degree

import numpy as np


def rotation(matrix):
    rows = matrix.shape[0]
    for layer in range(rows // 2):
        first = layer
        last = rows - layer - 1
        for i in range(first, last):

            top = matrix[layer][i]

            matrix[layer][i] = matrix[-i - 1][layer]

            matrix[-i - 1][layer] = matrix[-layer - 1][-i - 1]

            matrix[-layer - 1][-i - 1] = matrix[i][- layer - 1]

            matrix[i][- layer - 1] = top
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
