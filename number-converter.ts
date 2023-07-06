function arabicToNumeral(num : number ):string{
    const arabicToRoman : { [key: number]: string }= {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I',
    };
  if (num <= 0|| num >= 3999) {
      throw new Error('The number must be between 1 and 3999');
    }
    let romanNumeral:string = '';
    const keys : number[] = Object.keys(arabicToRoman).map(Number).sort((a, b) => a - b);
    for(let i = keys.length-1 ; i>=0 ; i--){
      const initialValue = parseInt(String(keys[i]));
      while (num >= keys[i]) {
             romanNumeral+= arabicToRoman[keys[i]];
             num -= initialValue;
          }
    }
    return romanNumeral;
  }
  const result = arabicToNumeral(47);
  console.log(result)