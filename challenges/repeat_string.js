function repeat_string(txt,n) {
    if (n == 0) {
        return '';
    } if (n == 1) {
        return txt;
    } return txt + repeat_string(txt, n-1);
  }
  
console.log(repeat_string('ab', 3));
//'ababab'
console.log(repeat_string('kiwi', 1));
//'kiwi'
console.log(repeat_string('cherry', 2));
//'cherrycherry'
console.log(repeat_string('egg', 0));
//''