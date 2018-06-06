// User interface logic
$(function(){
// debugger
  $("#submit").click(function(){
    var words= $("input#word").val();
    var result=sentenceTranslator(words);

    // var vowel = result.split(" ");
    // var vowel =result.includes("a", "e", "i", "o", "u",0)
    //   if (vowel === true) {
    //     // arr.push(words + "way");
    //   }

    // var output=[];
    // output=spec1(vowel);
    // var vowels=output.join("");
    $("#output").text(result);

  });
});

// business logic

// this function to apply when sentence is entered
var sentenceTranslator = function(inputSentence) {
  var sentenceArray = inputSentence.split(" ");
  var output = [];
  sentenceArray.forEach(function(word) {
    output.push(latinTranslator(word));
  })
  return output.join(" ");
}
// this function to apply when sentence is entered


var latinTranslator=function(string){
var splitWord= string.split("")


if((splitWord.length===1)&& isVowel(splitWord[0])){

  splitWord=splitWord.concat("ay");
  splitWord=splitWord.join("");

  return splitWord;
}
else if(isVowel(splitWord[0])){
  splitWord=splitWord.concat("way");
  splitWord=splitWord.join("");
  return splitWord;
}
else if(!isVowel(splitWord[0])){
  var count= isNotVowel(splitWord)
  if ((splitWord[count]==="u")&&(splitWord[count-1]==="q")) {
    var joinedWord=splitWord.join("");
    var array= [joinedWord.slice(count+1),joinedWord.slice(0,count+1),"ay" ]
    var joined= array.join("");

    return joined;
  }
  var joinedWord=splitWord.join("");
  var array= [joinedWord.slice(count),joinedWord.slice(0,count),"ay" ]
  var joined= array.join("");

  return joined;
}
else if (!isVowel(splitWord[0])) {
  var count= isNotVowel(splitWord)


  }



}



var isVowel=function(letter){
  if ((letter==="a")||(letter==="e")||(letter==="i")||(letter==="o")||(letter==="u")){
    return true;
  }else{
    return false;

}
}
var isNotVowel=function(arr){
  var count = 0;
  for (var i = 0; i < arr.length ; i+=1 )
  if (!isVowel(arr[i])){
    count+=1;
  }else{
    return count;
  }
}
// John franti Example code for Pig latin
// var pigify = function(word) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i=0; i < word.length; i++) {
//     if ((vowels.indexOf(word[i])) != -1) {
//       if ((word[i] === "u") && (word[i-1] === "q")) {
//         var slice_point = i+1;
//       } else {
//         var slice_point = i;
//       }
//       var first_letters = word.slice(0, slice_point);
//       var remainder = word.slice(slice_point, word.length);
//       var piggy = remainder + first_letters + 'ay';
//       return piggy;
//     }
//   }
// };
