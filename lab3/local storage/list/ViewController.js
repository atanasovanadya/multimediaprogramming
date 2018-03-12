var model = new model();
registerListeners();

function addPerson()
 {
   var name = document.getElementById("nameInput").value;
     document.getElementById("list").innerHTML += "<br>" + name;

   model.addPerson(name);
 }


