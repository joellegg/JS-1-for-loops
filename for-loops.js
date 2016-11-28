for (var i = 5; i <= 120; i += 5) {
	console.log(i);
}
for (var i = 4096; i >= 1; i /= 2) {
	console.log(i);


var presidents = ["George Washington", "John Adams", "Thomas Jefferson"];
var presidentsLength = presidents.length;

for (var i = 0; i < presidentsLength; i++) {
	console.log("President #" + (i + 1) + " was " + presidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
for (var key in antSpecies) {
	console.log(key);
}
