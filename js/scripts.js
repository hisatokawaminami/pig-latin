// User interface logic
$(function(){

  $("#submit").click(function(){
    var words= $("input#word").val();

    $("#output").text(words);

  });
});
