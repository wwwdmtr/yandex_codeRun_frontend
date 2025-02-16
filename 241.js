function createCountdown(n) {

  if(!Number.isInteger(n) || n < 0){
    n = 0;
  }
    return function(){
        if (n > 0){
            return n--;
        } else if (n == 0){
            const result = n;
            n = -1;
            return result;
        } else {
            return 0;
        }
    }

}

module.exports = createCountdown
