changeShowClickNoteForCurrentPage();

function changeShowClickNoteForCurrentPage(){
  window.addEventListener("hashchange", showClickNoteForCurrentPage);
}

function showClickNoteForCurrentPage(){
showNote(getNoteFromURL(window.location));
}

function getNoteFromURL(location){
  return location.hash.split("#")[1];
}

function showNote(id){
  document.getElementById("currentMessage").innerHTML = getById(id);
}

var notesArray = getItem("notes");

if(getItem("notes") !== null) {
  var notesArray = getItem("notes");
  document.getElementById("messages").innerHTML = viewNotes(notesArray);
}
