(function(exports) {
function NoteList() {
  this.notes = [];
}

NoteList.prototype.add = function(note){

  if(localStorage.getItem("notes") === null){
    this.notes.push(note);
    localStorage.setItem("notes", JSON.stringify(this.notes));
  } else {
    this.notes = JSON.parse(localStorage.getItem("notes"));
    this.notes.push(note);
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
  }
  NoteList.prototype.retrieveById = function(id){
    return JSON.parse(localStorage.getItem("notes"))[id]['message']
  }

  exports.NoteList = NoteList;
})(this);
