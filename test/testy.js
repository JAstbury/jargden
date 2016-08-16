(function(exports) {  //self-executing anonymous function
  function Testy(){}

  Testy.prototype.isTrue = function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Test failed:" + assertionToCheck + " is not truthy");
      } else {
        console.log("WOOO WE ARE AWESOME");
      }
    };

  exports.Testy = Testy;
})(this);
