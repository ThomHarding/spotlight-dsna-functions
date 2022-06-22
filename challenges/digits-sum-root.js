function rootDigit(n) {
    if (n < 10) {
        return n;
    }
    return rootDigit((n % 10) + rootDigit(Math.floor(n / 10)));
  }
  
console.log(rootDigit(123));
// 6
console.log(rootDigit(4322));
//  2
console.log(rootDigit(999888777));
//   // 9