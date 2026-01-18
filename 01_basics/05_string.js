const name = "chetan"
const repocount = 50

//console.log(name+repocount+"value");

//console.log('hello my name is ${name} and my repo count is ${repocount}');

const gameName = new String ('chetan-cr-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.charAt('a'));

const newstring = gameName.substring( -6,4 )
console.log(newstring)


const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "     chetan     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chetan.com/chetan%20singh"

console.log(url.replace('%20','-'))


console.log(url.includes('chetan'))
console.log(url.includes('raj'))

console.log(gameName.split('-'))

console.log()