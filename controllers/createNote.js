var notes = new NoteList();

function createMessageClick(){
  var message = new Note(document.forms.Form.message.value);
  notes.add(message);
  renderNote();
}

function renderNote() {
  var notesArray = getItem("notes");
  var messageList = document.getElementById("messages").innerHTML;
  document.getElementById("messages").innerHTML = viewNote(messageList, notesArray);
}
