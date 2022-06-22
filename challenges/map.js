function map (arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = (callback(arr[i]));
    };
    return newArr;
}

console.log(map([1, 6, 5], n => n**2));