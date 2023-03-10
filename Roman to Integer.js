function romanToInt(s) {
    const romanValues = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let result = 0;
    let prevValue = 0;
    for (let i = 0; i < s.length; i++) {
        const curValue = romanValues.get(s[i]);
        if (curValue > prevValue) {
            result += curValue - 2 * prevValue;
        } else {
            result += curValue;
        }
        prevValue = curValue;
    }
    return result;
}
