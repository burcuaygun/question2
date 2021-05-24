
function calculateNumCarry(p1, p2) {

    if (p1 && p2) {

    var sp1 = p1.toString();
    var sp2 = p2.toString();
    
    var sp1Digits = [];
    var sp2Digits = [];
    
    for (var i = 0; i < sp1.length;i++) {
    
    sp1Digits.push(+sp1.charAt(i));
    
    }
    for (var i = 0; i < sp2.length;i++) {
    
    sp2Digits.push(+sp2.charAt(i));
    
    }
   
    var carry = 0;
    
    while (sp1Digits.length > 0 || sp2Digits.length> 0) {
    
    
    var digit1 = sp1Digits.pop();
    var digit2 = sp2Digits.pop();
 
    if (digit1 && digit2) {
    
    carry = carry + (digit1 + digit2 >= 10 ? 1: 0);
    
    } else if (digit1 && !digit2) {
    
    
    carry = carry + (digit1 + carry >= 10 ? 1: 0);
    
    } else if (!digit1 && digit2) {

    carry = carry + (digit2 + carry >= 10 ? 1: 0);
    
    }
    
    }
    
    return console.log(carry);
    
    }
    
    return null;
    
    }

    calculateNumCarry(9, 2);