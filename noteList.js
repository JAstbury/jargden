function noteList() {
  this.notes = [];
}

noteList.prototype.add = function(note){

  if(localStorage.getItem("notes") === null){
    this.notes.push(note);
    localStorage.setItem("notes", JSON.stringify(this.notes));
  } else {
    this.notes = JSON.parse(localStorage.getItem("notes"));
    this.notes.push(note);
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
  }
