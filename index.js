const isValidString = (str) => {
  if (typeof str !== 'string') throw new Error('argument must be a string!');
  const strMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!strMap.has(str[i])) {
      strMap.set(str[i], + 1);
      console.log(strMap);
    }
    else if (strMap.has(str[i])) {
      strMap.set(str[i], + 1);
    }
  }
};

console.log(isValidString('abc'));