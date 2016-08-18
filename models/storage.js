function getItem(notes) {
  return JSON.parse(localStorage.getItem(notes));
}

function setItem(notes) {
  return localStorage.setItem("notes", JSON.stringify(notes));
}

function getById(id) {
  return JSON.parse(localStorage.getItem("notes"))[id]['message'];
}
