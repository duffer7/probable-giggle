function isNonTrivialRotation(s1: string, s2: string): boolean {
    let news1 = s1;

    for (let i = 0; i < s1.length; i++) {
        news1 = news1.slice(1) + news1[0];

        if (news1 === s2 && s1 !== s2) {
            return true;
        }
    }

    return false;
}

function isNonTrivialRotation1(s1: string, s2: string): number {
    if (s1.length !== s2.length || s1 === s2) {
        return 0;
    }

    const doubled = s1 + s1;

    return doubled.includes(s2) ? 1 : 0;
}

console.log(isNonTrivialRotation('abcde', 'cdeab')); // true
console.log(isNonTrivialRotation('a', 'a')); // false

console.log(isNonTrivialRotation1('abcde', 'cdeab')); // true
console.log(isNonTrivialRotation1('a', 'a')); // false
