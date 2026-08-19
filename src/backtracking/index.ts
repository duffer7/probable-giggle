function generatePasswords(length: number, chars: string[]): string[] {
    const result: string[] = [];

    function backtrack(current: string[]) {
        if (current.length === length) {
            result.push(current.join(''));
            return;
        }

        for (const char of chars) {
            current.push(char);
            backtrack(current);
            current.pop();
        }
    }

    backtrack([]);
    return result;
}

function generateParentheses(pairs: number): string[] {
    const result: string[] = [];

    function backtrack(current: string[], openCount: number, closeCount: number): void {
        // 1. УСЛОВИЕ ВЫХОДА: Длина строки равна pairs * 2
        if (current.length === pairs * 2) {
            result.push(current.join(''));
            return;
        }

        // 2. ШАГ 1: Добавляем '<', если еще не исчерпали лимит
        if (openCount < pairs) {
            current.push('<');
            backtrack(current, openCount + 1, closeCount);
            current.pop(); // Backtrack
        }

        // 3. ШАГ 2: Добавляем '>', только если их меньше, чем уже открытых '<'
        if (closeCount < openCount) {
            current.push('>');
            backtrack(current, openCount, closeCount + 1);
            current.pop(); // Backtrack
        }
    }

    backtrack([], 0, 0);
    return result;
}

console.log(generateParentheses(3)); // [ '<<<>>>', '<<><>>', '<<>>><', '<><<>>', '<><><>' ]
console.log(generatePasswords(2, ['A', 'B'])); // ['AA', 'AB', 'BA', 'BB']
