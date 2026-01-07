# Sliding Window Technique

**Concept**: Optimizing subarray/substring problems

The sliding window technique reduces time complexity from O(n²) to O(n).

## Problem: Maximum Sum Subarray of Size K
**Naive Approach**: O(n*k)
```javascript
function maxSum(arr, k) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
```

## Optimized: Sliding Window O(n)
```javascript
function maxSum(arr, k) {
  let windowSum = 0;

  // Calculate first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
```

**Key Insight**: Instead of recalculating, subtract the left element and add the right element!

**Common Patterns**:
- Fixed window size (like above)
- Dynamic window (two pointers)
- Longest substring without repeating characters


---

*Generated on 2026-01-07*
