function some(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(some([1, 6, 5], (n) => n % 2 === 0));
console.log(some([1, 7, 3], (n) => n % 2 === 0));
