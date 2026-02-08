//  console.log("Hello from external linking")
// console.log(9*12)
//VAR
// var age ="dipti"
// console.log(age)
// age=10
// console.log(age);
//LET
// let age = 22;
// console.log(age);
// if(true){
//     let a=20
// }
// console.log(a);
//CONST
// const age = 23;
// console.log (age)
// age=88;
// console.log (age)


// Data Type 
//Numbers
// let num= 2.98;
// let nums= 9.3;
// console.log(num + nums)
// //Strings
// let firstName='Dipti'
// const lastName='Priya'
// console.log(firstName + " " + lastName) 
// //Booleans
// let isLoggedIn=true;
// console.log(isLoggedIn)
// //NULL
// let LastLogdate=null;
// console.log(LastLogdate)
// //Defined
// let LastLogDate = undefined;
// console.log(LastLogDate)
// //Objects
// const Person={firstName:"Dipti",latsName:'Priya',age:'99',isLoggedIn:false,LastLogDate:null}
// console.log(Person.firstName)
// console.log(typeof Person)


//Conditional Statement
//  const age= 80;
// if(age >=18){
//     console.log("yes u can vote")
// }
// else if(age>=80){
//     console.log("yes u can vote")
// }
// else{
//     console.log("u can't vote")
// }

//Ternary Condition
// const age=90
//  let result= age >=18? 'Yes':'No'
//  console.log(result);
 //sure that only 1 haa ya nah statemtemnt is there


// Switch Case
// const option = 3 ;>>
// switch(option){
//     case 1: console.log("Hello")
//     break;
//     case 2: console.log("namaste")
//     break;
//     case 3: console.log("Billa")
//     break;
//     default: console.log("Invalid choice")
// }

// LOGICAL STATEMENT
// AND OR
// const age = 30 ;
// const gender= "female";
//  if(age >=18 || gender =='male'){
//     console.log("U ARE ADULT")
//  }


//LOOP
//FOR-->if u know how many time to run a prgm
// for(let i=1; i<=10; i = i + 2){
// console.log("DIPTI" + i)
// }

//WHILE-->If u dont know how many itersation is needed
// let ip=1
// let house =51

// while(ip!=house)
// {
//     ip=ip+1;
//     console.log("Step Taken" + ip)
// }

//DO WHILE LOOP 
// let ip=50
//  let house=50
//  do{
//     ip=ip+1;
//     console.log("Step Taken" + ip)
//  }
//  while(ip<=house)


//FUNCTION 

// function sayHello(){
//     console.log("Hey Dipti")
// }
// sayHello();
// sayHello();
 
//  function multiply(a , b){
//     console.log(a*b);
//  }
//  multiply(12,9);

//  //unlimited argument
// function addNumbers(){
//     let ans=0;
//     for(let i=0;i<arguments.length;i++){
//         ans=ans+arguments[i];
//     }
//     return ans;
// }

// let result= addNumbers(31,23,11,11,3);
// console.log(result);

//     //SPREAD OPERATOR 

//     function addNumberV2(...numbers){
//         let ans=0;
//         for(let i=0;i<numbers.length;i++){
//             ans=ans+numbers[i];
//         }
//         return ans;
//     }

//     let result1 = addNumbers(10,33,22,11,20,24)
//     console.log(result1);


//ARROW FUNCTION

// const sayHello =() =>
// {
//     console.log("Hello");
// };

// const add = (a,b) =>
// {
//     return a+b;
// }
// console.log(add(4,5)) 
// sayHello();
// sayHello();


// sayHello();

// function sayHello()
// {
//     console.log("Hey There");
// }


// arrow function does not include the calling of function

// const sayHello = ()=>
// {
//     console.log("HEy THere")
// }
// sayHello();

//THIS FUNCTION CAN"T be accsess by arrrrow function 

// const obj={
//     value: 30,
//     myfunction:()=>{
//         console.log("the value of the number is " +  this.value);
//     }
// }
// obj.myfunction()
// ;

//ARRAY

// const myArray=[1,true,"dipti"]
// myArray.push("alexa")
// console.log(myArray)

// const myArray =[1,true,"dipti"]
// myArray.push("alexa")
// // myArray.pop();
// myArray.push("Gautam")
// console.log(myArray)
// myArray[1]="macbook";
// console.group(myArray)
// myArray.push({ name: "dipti"});
// console.log(myArray)
// console.log(myArray.indexOf("alexa"));
// myArray.reverse();
// console.log(myArray);


//HIGH ORDER ARRAY
// const students=["ddipti","true","smjhe na"]
// students.forEach((val) => console.log(val));

const number=[1,2,3,4,5,6];
function double(n){
    return n*2;
}
let newArray=number.map(double);
console.log(newArray)
console.log("hello Dipti");
