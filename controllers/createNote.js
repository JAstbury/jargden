var notes = new NoteList();

function createMessageClick(){
  var message = document.forms.Form.message.value;
  save(message);
  //renderNote();
}

// function renderNote() {
//   var notesArray = getItem("notes");
//   var messageList = document.getElementById("messages").innerHTML;
//   document.getElementById("messages").innerHTML = viewNote(messageList, notesArray);
// }
