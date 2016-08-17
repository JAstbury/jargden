
var testy = new Testy()

  function describe(title, callback) {
    console.log(title);
    callback();
 }

  function it(title, callback) {
    callback(title);
  }
