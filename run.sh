#!/bin/zsh
# Usage: ./run.sh <path-to-ts-file>
# Example: ./run.sh Leetcode/TwoPointers/two_sum.ts

if [ -z "$1" ]; then
  echo "Usage: ./run.sh <path-to-ts-file>"
  exit 1
fi

npx ts-node "$1"
