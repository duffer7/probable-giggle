function cycleSort(arr: number[]): number[] {
    const n = arr.length;

    // traverse array elements and put it to on the right place
    for (let cycle_start = 0; cycle_start <= n - 2; cycle_start++) {
        // initialize item as starting point
        let item = arr[cycle_start];

        // Find position where we put the item.
        // We basically count all smaller elements on right side of item.
        let pos = cycle_start;
        for (let i = cycle_start + 1; i < n; i++) {
            if (arr[i] < item) {
                pos++;
            }
        }

        // If item is already in correct position
        if (pos === cycle_start) continue;

        // Ignore duplicates
        while (item === arr[pos]) {
            pos += 1;
        }

        // Put the item to its correct position
        if (pos !== cycle_start) {
            let temp = item;
            item = arr[pos];
            arr[pos] = temp;
        }

        // Rotate rest of the cycle
        while (pos !== cycle_start) {
            pos = cycle_start;

            // Find position where we put the item
            for (let i = cycle_start + 1; i < n; i++) {
                if (arr[i] < item) {
                    pos += 1;
                }
            }

            // Ignore duplicates
            while (item === arr[pos]) {
                pos += 1;
            }

            // Put the item to its correct position
            if (item !== arr[pos]) {
                let temp = item;
                item = arr[pos];
                arr[pos] = temp;
            }
        }
    }

    return arr;
}

console.log(cycleSort([7, -4, 0, 1, 555, 666]));
