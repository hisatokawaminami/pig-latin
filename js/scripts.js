// User interface logic
$(function(){

  $("#submit").click(function(){
    var words= $("input#word").val();
    var result=notnumber(words)
    $("#output").text(result);

  });
});



var notnumber=function(words){
if (!(isNaN(words))) {
alert("Please enter words");
}
else{
  return words
}
}
