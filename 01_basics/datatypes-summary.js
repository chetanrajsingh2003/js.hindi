// Primitive

// 7 types : String , Number , boolean , null, undefined , symbol,BigInt

// javascript is a dynamically typed language

const score = 100
const scoreValue = 100.3
const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );




const bigNumber = 34565645342432453n



//reference type or non-premitive : 


// Arrays,Objects,Functions

const heros = ["shaktiman","naagraj","doga"];
let MyObj = {
    name : "chetan",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);




// **********************Memory****************

//stack (Primitive),Heap (Non-Premitive)

let myyoutubename = 