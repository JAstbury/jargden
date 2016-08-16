function assert(){
}

assert.isTrue = function(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  } else {
    console.log('THIS ACTUALLY WORKED')
  };
};

module.exports = assert;
