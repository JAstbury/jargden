function getItem(notes) {
  return JSON.parse(localStorage.getItem(notes));
}

function setItem(notes) {
  return localStorage.setItem("notes", JSON.stringify(notes));
}

function getById(id) {
  return JSON.parse(localStorage.getItem("notes"))[id]['message'];
}

function save(note) {
  var request = new XMLHttpRequest();
  var jsonNote = JSON.stringify(note);
  request.open('POST', 'http://localhost:4567/notes?content=' + jsonNote, true);
  request.send();
}
