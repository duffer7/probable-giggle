function findFirstOccurrence(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        console.log({
            left,
            right,
        });

        if (nums[mid] === target) {
            result = mid;
            right = mid - 1;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }

    return result;
}

console.log(findFirstOccurrence([1, 2, 3, 4, 10, 10], 10)); // 4
