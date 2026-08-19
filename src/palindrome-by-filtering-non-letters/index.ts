function isAlphabeticPalindrome(code: string): boolean {
    const filtered = code.toLowerCase().match(/[a-z]/g) || [];

    return filtered.join('') === filtered.reverse().join('');
}

console.log(isAlphabeticPalindrome('A1b2B!a'));
