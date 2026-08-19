function areBracketsProperlyMatched(code_snippet: string): boolean {
    const filtered = code_snippet.replace(/[^()\[\]{}]/g, '');

    if (filtered.length === 0) {
        return true;
    }

    const pairs: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const openBrackets = new Set(['(', '{', '[']);
    const stack = [];

    for (let i = 0; i < filtered.length; i++) {
        if (openBrackets.has(filtered[i])) {
            stack.push(filtered[i]);
        } else if (stack.length === 0 || stack.pop() !== pairs[filtered[i]]) {
            return false;
        }
    }

    return stack.length === 0;
}

console.log(areBracketsProperlyMatched('code_snippet = if (a[0] > b[1]) { doSomething(); }'));
