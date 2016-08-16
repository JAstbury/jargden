var Note = require("../note")
var Testy = require("./testy").Testy;

function testThatNoteDisplaysStoredText() {
  var note = new Note("Georgia");
  var testy = new Testy();

  testy.isTrue(note.display === "Georgia");
}

function testThatNoteAbbreviates() {
  var note = new Note("Georgia is a member of the excellent team jargden.");
  var testy = new Testy();

  testy.isTrue(note.abbreviate === "Georgia is a member o...");
}

testThatNoteDisplaysStoredText();
testThatNoteAbbreviates();
