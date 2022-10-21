/*

console.log("hello");

window.alert("I'm Mert")

// one line comment
********************************************

let age;
age = 20;

let name = "mert";

let student = false;

console.log("You are", age, "years old");
console.log("Hello", name);
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML="Hello " + name;
document.getElementById("p2").innerHTML="You are " + age + " years old";
document.getElementById("p3").innerHTML="Enrolled:" + student;

***********************************

let username= window.prompt("What is your name?");
console.log(username)

*******************
*/

let username;

document.getElementById("myButton").onclick=function(){
    
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML= "Hello " + username;
}