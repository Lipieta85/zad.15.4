'use strict';

var zmienna1 = 'Hello';
var zmienna2 = 'World';
var zmienna3 = zmienna1 + ' ' + zmienna2;
console.log(zmienna3);

var zmienna4 = function zmienna4() {
	var zmienna1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
	var zmienna2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';
	return console.log(zmienna1 + ' ' + zmienna2);
};
zmienna4();

/////////////////////////////////////////////////////////////////////////////////////////////

var multiply = function multiply() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
	return x * y;
};
console.log(multiply(5));
console.log(multiply(6, 6));

/////////////////////////////////////////////////////////////////////////////////////////////

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	});
	return '\u015Arednia: ' + sum / args.length;
};

console.log(average(1, 2, 4));

/////////////////////////////////////////////////////////////////////////////////////////////

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//////////////////////////////////////////////////////////////////////////////////////////////

var array = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = array[2],
    lastname = array[4];


console.log('First Name: ' + firstname);
console.log('Last Name: ' + lastname);