function rootDigit(n) {
    if (n < 10) {
        return n;
    }
    const digits = n.toString().split('');
    const numbers = digits.map(d => +d);
    const sum = numbers.reduce((a, b) => a + b);
    return (rootDigit(sum));
    // return rootDigit((n % 10) + rootDigit(Math.floor(n / 10)));
  }
  
console.log(rootDigit(123));
// 6
console.log(rootDigit(4322));
// 2
console.log(rootDigit(999888777));
//  9