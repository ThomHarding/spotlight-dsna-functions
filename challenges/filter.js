function filter(arr, predicate) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      newArr[i] = (arr[i]);
    }
  }
  return newArr;
}

console.log(filter([2, 6, 5], (n) => n % 2 === 0));
