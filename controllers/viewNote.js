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

var notesArray = get();

if(get() !== null) {
  var notesArray = get();
  document.getElementById("messages").innerHTML = viewNotes(notesArray);
}
