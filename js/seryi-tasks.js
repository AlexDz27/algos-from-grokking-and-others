function myFunc(string) {
  const result = {};

  const splitted = string.split('');

  while (splitted.length > 0) {
    const char = splitted[0];
    splitted.splice(0, 1);
    result[char] = 1;
    
    for (let i = 0; i < splitted.length; i++) {
      const compared = splitted[i];
      
      if (char === compared) {
        result[char]++;

        splitted.splice(i, 1);
        i--;
      }
    }
  }

  return result;
}

console.log( myFunc('exemple x ') );
console.log( myFunc('programming') );