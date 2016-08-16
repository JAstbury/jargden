(function(exports) {  //self-executing anonymous function
  function Testy(){}

  Testy.prototype = {
    // describe: function(description, ) {
    //   if (!assertionToCheck) {
    //     throw new Error("Test failed:" + assertionToCheck + " is not truthy");
    //   } else {
    //     console.log(".");
    //   }
    // }

    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Test failed:" + assertionToCheck + " is not truthy");
      } else {
        console.log("Test passed");
      }
    }
  };

  exports.Testy = Testy;
})(this);
