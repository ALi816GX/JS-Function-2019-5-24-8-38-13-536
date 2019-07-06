function palindrome(message){
    var result = "";
    for(i = message.length-1;i >= 0;i--){
        result += message.charAt(i);
    }
    return (message == result);
}

alert(palindrome('hello')); // should return false
alert(palindrome('abcba')); // should return true
