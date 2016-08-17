
testy = new Testy();

describe('Online form', function () {
  it('displays the form', function(title) {
    testy.isTrue(title, document.forms.Form !== null );
  })

  it('check you can write a message', function(title) {
    var note = new Note("Georgia");
    testy.isTrue(title, document.forms.message !== null );
  })

  // it ('Submit button works', function(title) {
  //   testy.isTrue(title, document.getElementById('createMessageClick').click() !== null );
  // });
  });


describe('Local storage', function(){
  it('Notes persist in local storage', function(title){
    var notesArray = JSON.parse(localStorage.getItem("notes"));
    testy.isTrue(title, notesArray !== null );
  })

  it('New notes save to local storage', function(title){
    note = new Note('Hello')
    var notesArray = JSON.parse(localStorage.getItem("notes"))
    testy.isTrue(title, notesArray[-1] === 'Hello')
  });
});
