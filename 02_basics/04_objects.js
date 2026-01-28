// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "chetan"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularuser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"chetan",
            lastname: "singh"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1 , obj2 }
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3)

const users = [
    {
    id:1,
    email : "c@gmail.com"
    },
     {
    id:1,
    email : "c@gmail.com"
    },
    {
    id:1,
    email : "c@gmail.com"
    }
   

]

users[1].email

console.log(tinderUser)

console.log(object.Keys(tinderUser))

console.log(object.values(tinderUser))

console.log(object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
