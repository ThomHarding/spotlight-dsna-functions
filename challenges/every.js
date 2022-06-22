function every (arr, predicate) {
    for(let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i])) {
            return false;
        }
    };
    return true;
}

console.log(every([2, 4, 6], n => n % 2 === 0));
console.log(every([1, 2, 3], n => n % 2 === 0));