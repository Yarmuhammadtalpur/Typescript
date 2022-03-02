
let number = [1,2,4,5]
let string :string[] = []
type StringorNum = number|string
type objectwithNam = { name: string, age: number, color: String}
string.push("hello")


console.log(string);
let mixed :(string|number|boolean)[] =[];
mixed.push('hello')
mixed.push(2)
mixed.push(true)
console.log(mixed);




let ustring :string|number
ustring = "Word"
console.log(string);
ustring = 2
console.log(ustring);



//object type in var
let objectName : objectwithNam
objectName = {
  name: "myName",
  age: 12,
  color: "red"
}
console.log(objectName)




const add = (a :number, b :number, c?: StringorNum)=>{
console.log(a+b)
}
add(1,6)


// function singature

type Greet = (a: string, b: string) => void;

let Greet  = ( x: string, y: string )=>{
  console.log(`${x} says ${y}`);
}
Greet("helloo", "friend")


//
type calc = (a: number, b: number, choices: string) => number ;

let calc = (numONe: number, numTwo: number, action: string) =>{
  if(action === "add"){
    return numONe + numTwo
  }
}
console.log(calc(3,8,"add"));


//