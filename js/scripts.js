// User interface logic
$(function(){
// debugger
  $("#submit").click(function(){
    var words= $("input#word").val();
    var result=latinTranslator(words);

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

var latinTranslator=function(string){
var splitWord= string.split("")


if((splitWord.length===1)&& isVowel(splitWord[0])){

  splitWord=splitWord.concat("ay");
  var splitJoin=splitWord.join("");

  return splitJoin;
}



}
var isVowel=function(letter){
  if ((letter==="a")||(letter==="e")||(letter==="i")||(letter==="o")||(letter==="u")){
    return true;
  }else{
    return false;

}
}
