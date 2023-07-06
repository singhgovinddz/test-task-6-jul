
let fact = (function() {
    type CacheType = {
        [key: number]: number;
        (value: number): number;
    } | Record<number, (value: number)=> number>;

    let memoizor: CacheType = {}; 
    
    function checkMemoizor(value: number) {
      if (value in memoizor) {
        console.log('fetching value from cache : ' + value);
        return memoizor[value];
      } else {
        memoizor[value] = factorial(value); 
        return memoizor[value];
      }
      
    }
  
    function factorial(num: number): number {
      return (num === 0)? 1 : num * factorial(num - 1);
    }

    return checkMemoizor; 
  }());

  fact(20);
  fact(20); // cached value
  fact(30);
  fact(30); // cached 