function getNames() {
    var typedName = document.getElementById("userInput").value;
    var nameOutput = document.getElementById("printNames");
   
    nameOutput.innerHTML += typedName + "<br>";
    document.getElementById("userInput").value = "";
}

  
getNames();