function reverseString(message){

    var result = "";
    for(i = message.length-1;i >= 0;i--){
       result += message.charAt(i);
   }

   return result;


}

alert(reverseString('hello'));

