function map (arr, callback) {
    let newArr = [];
    arr.forEach(element => {
        newArr.push(callback(element));
    });
    return newArr;
}
