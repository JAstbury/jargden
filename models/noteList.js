function NoteList() {
  this.notes = [];
}

NoteList.prototype.add = function(note){
  if(getItem("notes") === null){
    this.notes.push(note);
    setItem(this.notes);
  } else {
    this.notes = getItem("notes");
    this.notes.push(note);
    setItem(this.notes);
  }
};
