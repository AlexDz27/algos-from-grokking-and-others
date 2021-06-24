function reverseString(string) {
  if (string.length <= 1) {
    return string;
  } else {
    const reversed = string[1] + string[0];
    const remainder = string.slice(2);

    return reverseString(remainder) + reversed;
  }
}

console.log( reverseString('qwek') )
console.log( reverseString('zxc') )
console.log( reverseString('hello') )
console.log( reverseString('hello123') )