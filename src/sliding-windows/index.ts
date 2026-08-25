function swsearchmaxsum(arr: number[], n: number): number {
    if (arr.length < n) {
        return 0;
    }
    let windowSum = 0;
    let maxSum = 0;

    // calculate first window sum
    for (let i = 0; i < n; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let i = n; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - n];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(swsearchmaxsum([11, 2, 3, 4, 5, 6], 2)); // 13
