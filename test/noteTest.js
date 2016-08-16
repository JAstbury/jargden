// var Note = require("../note");
// var Testy = require("./testy").Testy;
// var NoteList = require('../noteList').noteList;

// function testThatNoteDisplaysStoredText() {
//   var note = new Note("Georgia");
//   var testy = new Testy();
//
//   testy.isTrue(note.display === "Georgia");
// }
//
// function testThatNoteAbbreviates() {
//   var note = new Note("Georgia is a member of the excellent team jargden.");
//   var testy = new Testy();
//
//   testy.isTrue(note.abbreviate === "Georgia is a member o...");
// }

function testItMakesANewNote() {
  var note = new Note("Georgia").Note;
  var testy = new Testy();

  testy.isTrue(note.message === "Georgia");
}

function testThatcreateMessageClickWorks() {
  var note = new Note("Georgia");
  var testy = new Testy();
  var noteList = new NoteList();
  noteList.add(note);
  var list = noteList.notes;
  testy.isTrue(list[list.length - 1].message === "Georgia");
}


testThatcreateMessageClickWorks()
// testItMakesANewNote()
// // testThatNoteDisplaysStoredText();
// testThatNoteAbbreviates();
