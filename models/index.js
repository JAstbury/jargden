var notes = new NoteList();

function createMessageClick(){
  var input = document.forms.Form.message.value;
  var message = new Note(input);
  notes.add(message);
  var notesArray = getItem("notes");
  console.log(notesArray)
  var messageList = document.getElementById("messages").innerHTML;
         document.getElementById("messages").innerHTML = messageList + "<br>" + "<a href=#" + (notesArray.length -1) +">" + notesArray[notesArray.length - 1]['message'].substring(0,20) + "...</a>";
}

var notesArray = getItem("notes");

if(getItem("notes") !== null) {
  window.onload = function() {
     for(var i = 0; i < notesArray.length;i++) {
      var messageList = document.getElementById("messages").innerHTML;
         document.getElementById("messages").innerHTML = messageList + "<br>" + "<a href=#" + i +">" + notesArray[i]['message'].substring(0,20) + "...</a>";
    }

   };
}

changeShowClickNoteForCurrentPage();

function changeShowClickNoteForCurrentPage(){
  window.addEventListener("hashchange", showClickNoteForCurrentPage);
};

function showClickNoteForCurrentPage(){
showNote(getNoteFromURL(window.location));
};

function getNoteFromURL(location){
  return location.hash.split("#")[1];
};

function showNote(id){
  document.getElementById("currentMessage").innerHTML = notes.retrieveById(id);
};
