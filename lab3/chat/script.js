var connection = new WebSocket('wss://obscure-waters-98157.herokuapp.com/');


connection.onopen = function () {
  connection.send(document.getElementById("buttonSend").value); // Send the message
};


connection.onmessage = function (event) {
    
    document.getElementById("printedTexts").innerHTML += "<li>" + event.data + "</li>";
};


function sendMessage(){
    var messageText = document.getElementById("writeText").value;
    connection.send(messageText);
    console.log(messageText);
}