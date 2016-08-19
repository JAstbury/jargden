function getItem(notes) {
  return JSON.parse(localStorage.getItem(notes));
}

// function setItem(notes) {
//   return localStorage.setItem("notes", JSON.stringify(notes));
// }

function getById(id) {
  return JSON.parse(localStorage.getItem("notes"))[id]['message'];
}

function save(note) {
  var request = new XMLHttpRequest();
  var jsonNote = JSON.stringify(note);
  request.open('POST', 'http://localhost:4567/notes?content=' + jsonNote, true);
  request.send();
}

function get() {
  var request = new XMLHttpRequest();
  var notesArray = []
  request.onreadystatechange = function() {
    if(request.readyState === 4) { // done
        if(request.status === 200) { // complete    
            notesArray.push(JSON.parse(request.responseText));
        }
    }
  };
  request.open('GET', 'http://localhost:4567/notes' );
  request.send();
    console.log(notesArray);
  return notesArray;
  // console.log(JSON.parse(request.responseText));
  // return JSON.parse(request.responseText);
}
