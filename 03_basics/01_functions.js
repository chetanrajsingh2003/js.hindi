function saymyname(){
    console.log("C")
    console.log("H")
    console.log("E")
    console.log("T")
    console.log("A")
    console.log("N")

                        
}
// saymyname()

// function addtwonumbers(num1,num2){
//    console.log(num1 + num2)
// }
function addtwonumbers(num1,num2){
//    let result = num1 + num2
//    return result

   return num1 + num2
}
const result = addtwonumbers(3,5)
// console.log("result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("chetan"))
// console.log(loginUserMessage())

function calculatecartprice(val1,val2,... num1){
    return num1
}

// console.log(calculatecartprice(200,400,500,2000))

const user = {
    username:"chetan",
    price: 199

}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
handleobject({
    username:"sam",
    price: 399
})


const mynewarray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([200,400,500,1000]));
