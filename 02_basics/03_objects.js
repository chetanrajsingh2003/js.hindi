// singleton
//object.create

//object literals


const mySym = Symbol("key1")

const JsUser = {
    name:"Chetan",
    "full name":"chetan raj singh",
    [mySym] : "mykey1",
    age : 18,
    location:"noida",
    email:"chetan@google.com",
    isLoggedIn: false,
    lastloggindays:["Monday","Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(JsUser["full name"]);

JsUser.email = "chetan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "chetan@microsoft.com"
console.log(Jsuser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingtwo = function(){
    console.log("Hello JS User,${this.name}");

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

