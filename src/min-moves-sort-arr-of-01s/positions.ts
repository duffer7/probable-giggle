function minMovesByPositions(arr: number[]): number {
    const zeroIndices: number[] = [];
    const oneIndices: number[] = [];

    arr.forEach((val, idx) => {
        if (val === 0) zeroIndices.push(idx);
        else oneIndices.push(idx);
    });

    // Нули слева
    let swapsZerosLeft = 0;
    zeroIndices.forEach((pos, i) => {
        swapsZerosLeft += pos - i;
    });

    // Единицы слева
    let swapsOnesLeft = 0;
    oneIndices.forEach((pos, i) => {
        swapsOnesLeft += pos - i;
    });

    return Math.min(swapsZerosLeft, swapsOnesLeft);
}

// Examples
console.log(minMovesByPositions([0, 1, 0, 1])); // 1
console.log(minMovesByPositions([1, 0, 1, 0, 1, 0])); // 3
