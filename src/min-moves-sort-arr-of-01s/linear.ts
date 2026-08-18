function minMovesLinear(arr: number[]): number {
    let zerosLeftSwaps = 0;
    let onesSeen = 0;

    for (const x of arr) {
        if (x === 0) {
            zerosLeftSwaps += onesSeen;
        } else {
            onesSeen++;
        }
    }

    let onesLeftSwaps = 0;
    let zerosSeen = 0;

    for (const x of arr) {
        if (x === 1) {
            onesLeftSwaps += zerosSeen;
        } else {
            zerosSeen++;
        }
    }

    return Math.min(zerosLeftSwaps, onesLeftSwaps);
}

// Examples
console.log(minMovesLinear([0, 1, 0, 1])); // 1
console.log(minMovesLinear([1, 0, 1, 0, 1, 0])); // 3
