function countResponseTimeRegressions(responseTimes: number[]): number {
    if (responseTimes.length <= 1) {
        return 0;
    }

    let count = 0;
    let sum = responseTimes[0];

    for (let i = 1; i < responseTimes.length; i++) {
        const avg = sum / i;

        if (responseTimes[i] > avg) {
            count++;
        }

        sum += responseTimes[i];
    }

    return count;
}

console.log(countResponseTimeRegressions([100, 200, 150, 300])); // 2
