module.exports = function getZerosCount(number, base) {
  // your implementation 
       /*
  var zeros = 0;
  var number = 130;      
  while(number){
    number = (number/5)|0;
    zeros+=number;
  }
    //32 нуля число 1.
    
    //https://tehnoshell.ru/news/itkpi/marsianskie-faktorialyi/
  */
   var n = number;
   var k = base;
    
    for(var i = 2; i <= k; i++) {
        if (k % i == 0) {
            
            var k1 = 0;
            while (k % i == 0) {

                k = k / i;
                 k1++;
            }
            
    var k2 = 0;
    var t =  Math.floor(number / i);   
    while (t > 0) {
        
        k2 = k2 + t;
        t =  Math.floor(t / i);
    }
            
   n = Math.min(n, Math.floor(k2 / k1));     
            
            
}
}
 
     return n;
}


