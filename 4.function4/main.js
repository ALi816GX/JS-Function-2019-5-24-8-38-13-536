function countWords(message){
    var result = message.split(" ");
    return result.length;
}
alert(countWords('Good morning, I love JavaScript.')); // should return 5
