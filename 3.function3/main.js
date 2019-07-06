function alphabetSort(message){
   var result = "";
   var int_array = new Array();


   for(i=0;i< message.length;i++){
       int_array.push(message.charCodeAt(i));
   }

   console.log(int_array);
   int_array.sort(function (a,b) {
       return a-b;
   });
   console.log(int_array);

   for(j = 0;j < int_array.length;j++) {
        result += String.fromCharCode(int_array[j]);
   }

   return result;
}

alert(alphabetSort("hello")); // should return 'ehllo'
