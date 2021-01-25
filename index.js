const isValidString = (str) => {
  if (typeof str !== 'string') throw TypeError('thats not a mfn string!');

  const strObj = {};
  strObj['a'] = 1;

  for (char in str){
      if(strObj[str[char]] === undefined){
          strObj[str[char]] = 1
      }
      else{
          strObj[str[char]] += 1;
      }
  }

  let uniqueValues = []

  for(x in strObj){
      console.log(strObj[x])
      uniqueValues.push()
  }
}
console.log(isValidString('abccc'));