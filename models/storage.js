(function(exports) {
function getItem(notes) {
  JSON.parse(localStorage.getItem(notes));
}

exports.getItem = getItem;
})(this);
