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

  get(function(parsed){
    document.getElementById("messages").innerHTML = viewNotes(parsed);
  })
