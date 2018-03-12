$(function(){
  $("#buttonGet").click(function(){
    $.ajax({
      dataType: "jsonp",
      url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
    });
  });
});


function jsonCallback(persons){
  $("#list").html("");
  $.each(persons, function (index, person){
    $("#list").append(person.name + " email: " + person.email + "<br>");
  });
}



