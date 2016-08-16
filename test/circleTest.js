var assert = require("./assert");
var Circle = require('../modules/circle')

  function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue(circle.radius === 10);
};


testCircleRadiusDefaultsTo10();
