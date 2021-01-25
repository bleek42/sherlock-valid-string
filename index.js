const isValidString = (str) => {
  if (typeof str !== 'string') throw TypeError('thats not a mfn string!');

  const strObj = {};
  const uniqueValues = [];

  for (char in str){ 
    if(strObj[str[char]] === undefined){
          strObj[str[char]] = 1
      }
      else{
          strObj[str[char]] += 1;
      }
  }

  for(x in strObj){
      if(!uniqueValues.includes(strObj[x]))
          uniqueValues.push(strObj[x])
  }

  //Most cases can be determined by array size alone
  if(uniqueValues == 1)
    return "YES";
  if(uniqueValues.length > 2)
    return "NO";

    if(Math.abs(uniqueValues[0] - uniqueValues[1]) > 1)
        return "NO"
    
        //Otherwise we must sort
  uniqueValues.sort()
  let count = 0;
  //Only if more than one value exceeds the lowest value is string not valid
  for(let x in strObj){
      if(strObj[x] == uniqueValues[1])
        count++;
        if(count > 1)
            return 'NO'
  }
  return 'YES'
}

console.log(isValidString('aabcc') == 'NO');
console.log(isValidString('abc') == 'YES');
console.log(isValidString('aabbccc') == 'YES')
console.log(isValidString('a') == 'YES')