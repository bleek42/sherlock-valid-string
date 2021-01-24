const isValidString = (str) => {
  if (typeof str !== 'string') throw TypeError('thats not a mfn string!');

  const hashMap = new Map();

  for (const char of str) {
    if (!hashMap.has(char)) {
      hashMap.set(char, 1);
      console.log(hashMap);
    }
    else {
      hashMap.set(char, hashMap.get(char) + 1);
      console.log(hashMap);
    }
  };
};

console.log(isValidString('abcc'));