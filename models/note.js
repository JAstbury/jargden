(function(exports) {
function Note(msg) {
  this.message = msg;
}

Note.prototype.shorten  = function (){
  this.message.substring(0,20) + '...';

}

exports.Note = Note;
})(this);
