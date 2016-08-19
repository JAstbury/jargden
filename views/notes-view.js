

function viewNotes(notesArray1) {

  var messageList = "";
  // console.log('***')
  // console.log(notesArray1[0])
  // console.log('***')
  for(var i = 0; i < notesArray1.length;i++) {
    messageList += "<br><a href=#" + i +">" +
    notesArray1[i].content.substring(0,20) + "...</a>";
  }
  return messageList;
}
