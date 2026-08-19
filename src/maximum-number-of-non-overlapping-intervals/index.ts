function maximizeNonOverlappingMeetings(meetings: number[][]): number {
    const sorted = meetings.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastEnd = -Infinity;

    for (let i = 0; i < sorted.length; i++) {
        const start = sorted[i][0];
        const end = sorted[i][1];

        if (start >= lastEnd) {
            count++;
            lastEnd = end;
        }
    }

    return count;
}

console.log(
    maximizeNonOverlappingMeetings([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
    ]),
); // 3
console.log(
    maximizeNonOverlappingMeetings([
        [0, 5],
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 5],
        [4, 6],
    ]),
); // 4
