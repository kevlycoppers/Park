$(document).ready(function() {
  var height = parseInt(prompt("Whats Your height?"));

  if (height <= 4) {
    $('#small').css("background-color", "yellow");
  }
  else if(height <= 6){
  $('#small').css("background-color", "yellow");
  $('#median').css("background-color", "yellow");
 }

  else {
    $('#small').css("background-color", "yellow");
    $('#median').css("background-color", "yellow");
    $('#large').css("background-color", "yellow");
  }
});
