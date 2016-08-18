
function viewNotes(notesArray) {
  var messageList = "";
  for(var i = 0; i < notesArray.length;i++) {
    messageList += "<br><a href=#" + i +">" +
    notesArray[i]['message'].substring(0,20) + "...</a>";
  }
  return messageList;
}
