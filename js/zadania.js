const zmienna1 = 'Hello';
const zmienna2 = 'World';
const zmienna3 = `${zmienna1} ${zmienna2}`
console.log(zmienna3)

const zmienna4 = (zmienna1 = 'Hello', zmienna2 = 'World') => console.log(`${zmienna1} ${zmienna2}`)
zmienna4()

/////////////////////////////////////////////////////////////////////////////////////////////

const multiply = (x = '1', y = '1') => x * y
console.log(multiply(5))
console.log(multiply(6, 6))

/////////////////////////////////////////////////////////////////////////////////////////////

const average = (...args) => {
	let sum=0;
	args.forEach(arg  => {
		sum += arg;
	});
	return `Średnia: ${sum/args.length}`;
};

console.log(average(1,2,4));

/////////////////////////////////////////////////////////////////////////////////////////////

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//////////////////////////////////////////////////////////////////////////////////////////////

const array = [1, 4, 'Iwona', false, 'Nowak']

const [, , firstname, , lastname] = array

console.log(`First Name: ${firstname}`)
console.log(`Last Name: ${lastname}`)
