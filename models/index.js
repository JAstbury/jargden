var notes = new NoteList();

function createMessageClick(){
  var input = document.forms.Form.message.value;
  var message = new Note(input);
  notes.add(message);
}

var stringToObject = JSON.parse(localStorage.getItem("notes"));

  if(localStorage.getItem("notes") !== null) {
   window.onload = function() {

   for(var i = 0; i < stringToObject.length;i++) {

   var messageList = document.getElementById("messages").innerHTML;
   document.getElementById("messages").innerHTML = messageList + "<br>" + stringToObject[i]['message'];
}
  };
}
