let myName = "Jemimah";
let age = 20

function greetMe(){
    console.log(myName, age)
}

function greetMeOthers(myName, age) {
    console.log(myName, age);
}

greetMeOthers("Linda", 14)
greetMeOthers("Cathy", 25)
greetMeOthers("Allan", 21)
greetMeOthers("Annie", 21)
greetMe()
// functions that print my name and age, and that of four others


let add= (x, y) =>  x+y;
console.log (add(2,8));
//arrow function having two local variables concatenated together



let numberLimit= 20;
for (let num = 1; num < numberLimit; num++) {
    const element = numberLimit[num];
    console.log("I love Uganda",num)   
}
//Loop that prints "I love Uganda" 19 times