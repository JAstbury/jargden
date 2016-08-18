
function viewNote(messageList, notesArray) {
  return messageList + "<br>" + "<a href=#" + (notesArray.length -1) +">" +
  notesArray[notesArray.length - 1]['message'].substring(0,20) + "...</a>";
}
