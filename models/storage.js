function getItem(notes) {
  return JSON.parse(localStorage.getItem(notes));
}


function getById(id) {
  return JSON.parse(localStorage.getItem("notes"))[id]['message'];
}

function save(note) {
  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:4567/notes?content=' + note, true);
  request.send();
}

function get(callback) {
  var request = new XMLHttpRequest();
  var notesArray = [];
  request.onreadystatechange = function() {
    if(request.readyState === 4) { // done
        if(request.status === 200) { // complete
            parsed =  JSON.parse(request.responseText);
              callback(parsed);
  }      
    }
  };
  request.open('GET', 'http://localhost:4567/notes' );
  request.send();
}
