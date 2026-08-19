class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);

        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const currentMin = this.getMin()!;
            this.minStack.push(Math.min(val, currentMin));
        }
    }

    pop(): void {
        if (this.stack.length > 0) {
            this.stack.pop();
            this.minStack.pop();
        }
    }

    top(): number | undefined {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number | undefined {
        return this.minStack[this.minStack.length - 1];
    }
}

function processCouponStackOperations(operations: string[]): (number | undefined)[] {
    const minStack = new MinStack();
    const result: (number | undefined)[] = [];

    for (const op of operations) {
        const [command, valStr] = op.split(' ');

        if (command === 'push') {
            minStack.push(Number(valStr));
        } else if (command === 'pop') {
            minStack.pop();
        } else if (command === 'top') {
            result.push(minStack.top());
        } else if (command === 'getMin') {
            result.push(minStack.getMin());
        }
    }

    return result;
}

const operations = [
    'push 2',
    'push 0',
    'push 3',
    'push 0',
    'getMin',
    'pop',
    'getMin',
    'pop',
    'top',
    'getMin',
];
console.log(processCouponStackOperations(operations)); // Output: [0, 0, 0, 0]
