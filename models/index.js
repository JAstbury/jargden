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
         document.getElementById("messages").innerHTML = messageList + "<br>" + "<a href=#" + stringToObject[i]['message'].replace(/ /g,"_") +">" + stringToObject[i]['message'].substring(0,20) + "...</a>";
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
  location.hash = location.hash.replace(/_/g," ");
  return location.hash.split("#")[1];
};

function showNote(note){
  document.getElementById("currentMessage").innerHTML = note;
};
