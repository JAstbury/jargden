

function Note(msg) {
  this.mesage = msg;
}



function createMessageClick(){
  var message = new Note(document.forms.Form.message.value)
notesList.add(message);

 //  window.onload = function() {
 //  document.getElementById('messages').innerHTML = document.forms.Form.message.value;
 // }

}




// var storedNames = JSON.parse(localStorage["notes"]);
