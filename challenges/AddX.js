function addX(num) {
  return (x) => {
    return num + x;
  };
}

const add5 = addX(5);
console.log(add5(10));

console.log(add5(3));

const add3 = addX(3);
console.log(add3(3));

console.log(add3(20));
