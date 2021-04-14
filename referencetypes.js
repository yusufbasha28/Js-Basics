// reference types



//object

let person = {
    name:'yusuf',age:22 ,color:'red'
};

//dot notation

person.name = 'basha';

// bracket notation

//person[Name] = 'yusuf';
console.log(person);

//object constructors

var animal = new Object();
animal.name = "bla bla";
animal.type = "killer";
animal.color = "black";

console.log(animal.name,animal.type);

//arrays


// in array we can see the length of the variale

let selectedname = ['yusuf','basha', ]
selectedname[2] = 'k';
console.log(selectedname.length);
console.log(selectedname);

//functions

function call(name , number) {
    console.log('hello' , name ,"" ,number);
}
console.log(call('yusuf',28));


//calculating a value
//Operators.
function addNumbers(num1,num2) {
return num1 + num2 ;
}
function subNumbers(num1,num2) {
    return num1 - num2;
    }
function multiplyNumbers(num1,num2) {
        return num1 * num2;
        }
function divideNumbers(num1,num2) {
            return num1 / num2;
            }
console.log(divideNumbers(5,6));


// console.log(addNumbers(3));

// call('yusuf' , 3 );

// double 
// float
// integer