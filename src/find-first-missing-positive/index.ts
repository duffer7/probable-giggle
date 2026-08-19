/*
 * Complete the 'findSmallestMissingPositive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY orderNumbers as parameter.
 */

function findSmallestMissingPositive(orderNumbers: number[]): number {
    if (orderNumbers.length === 0) {
        return 1;
    }
    let index = 0;

    while (index < orderNumbers.length) {
        const item = orderNumbers[index];
        const targetIndex = item - 1;
        const oldEl = orderNumbers[targetIndex];

        if (item > 0 && item !== index + 1 && item !== oldEl) {
            orderNumbers[index] = oldEl;
            orderNumbers[targetIndex] = item;
        } else {
            index++;
        }
    }

    for (let i = 0; i < orderNumbers.length; i++) {
        if (orderNumbers[i] - 1 !== i) {
            return i + 1;
        }
    }

    return orderNumbers.length + 1;
}

console.log(findSmallestMissingPositive([4, 3, 4, -1, 1])); // 2
