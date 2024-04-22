// FUNCTION:
function make_shirt(){
    console.log('welcome home')
    console.log('bye bye!')
}
make_shirt(); //CALL FUNCTION!!

function username(){
    return 'bilal'
}
let response:string= username();
console.log(response);
 

function halfFryEgg(){
    let cocked=1+1.5+2
    console.log(cocked)
}
halfFryEgg();  



// NAME FUNCTION:
function list(){
    console.log('My first function.');
    console.log('Another value.');   
}
list();



// RETURN FUNCTION:
function hooriya(){
    console.log('what is your name:');
    console.log('My name is hooriya.');
}
hooriya()
function user_name(){
    return 'bilal!'
}
let num1:string=user_name();
console.log(num1);


function full(){
    let total =2+2
    return total;
}
let marks :number=full()
console.log(marks);




// ARROW FUNCTION:
let arrowfunctTion=() => {
    console.log('My first function.');
}
arrowfunctTion();


let set=() => {
    console.log('My first function.');
}
set();

let arrowfunction:() =>string= ():string=> {
   let data :string='bilal'
   return data
}
console.log(arrowfunction());

let arrowfunctionN=():string=>{
  let data :string='bilal'
  return data
}
console.log(arrowfunctionN());

let noneed:()=>string=():string=>{
    let data:string='hooriya';
    return data
}
console.log(noneed());



// NESTED FUNCTION:
let another_function=():void=>{
    console.log('My first function.');

}
another_function();
let name_another_function=():void=>{
    another_function();
}
name_another_function();

let sum=():number=>{
    return 2+4;
}
let total=sum()
console.log(total);



// ARGUMENT AND PARAMETER:
let position=(num1:number,num2:number)=>{
     console.log(num1,num2)
}
position(5,6);


function shift_work(val1:string,val2:string,val3:number){
    console.log(val1);
    console.log(val2);
    console.log(val3);
}
shift_work('cloths','pencil',2300);

let count=(val1:number,val2:number,name:string="bilal")=>{
    console.log(val1);
    console.log(val2);
    console.log(name);
}
count(4,6,'hooriya');

let value=(val3:number,val4:number,name:string="bilal")=>{
    console.log(val3);
    console.log(val4);
    console.log(name);
}
value(4,6);
 
function value1(num11:number,num22:number){
    return num11-num22;
}
let result1=value1(12,16);
console.log(result1);

function value12(num11:number,num22:number){
    return num11*num22;
}
let result2=value12(12,16);
console.log(result2);

function value2(num11:number,num22:number){
    return num11/num22;
}
let result3=value2(12,16);
console.log(result3);

function value132(num11:number,num22:number){
    return num11/num22;
}
let result4=value132(12,16);
console.log(result4);


function sum1(num1:number,num2:number){
    return num1 + num2;
}
let result=sum1(20,25);

console.log(result);

function subtract(num1:number,num2:number){
    return num1 - num2;
}
let resultt=subtract(20,25);
console.log(result);


function multiply(num1:number,num2:number){
    return num1 * num2;
}
let result5=multiply(20,25);
console.log(result5)