function model() {
  try {
    this.persons = localStorage.getItem("list").split(" ");
  }
  catch (e) {
    this.persons = new Array();
  }
  this.changeListeners = new Array();

  this.addPerson = function (addable) {
    this.persons.push(addable);
    var list = localStorage.getItem("list");
    if (list)
      localStorage.setItem("list", list + " " + addable);
    else
      localStorage.setItem("list", addable);
    
    this.notifyChange();
  }

  this.notifyChange = function () {
    this.changeListeners.forEach(function (changeListener) {
      changeListener();
    });
  }

  this.addNewListener = function (newListener) {
    this.changeListeners.push(newListener);
  }
}