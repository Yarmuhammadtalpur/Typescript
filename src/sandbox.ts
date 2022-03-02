
let number = [1,2,4,5]
let string :string[] = []


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

let objectName :{
  name: string,
  age: number,
  color: string
}

objectName = {
  name: "myName",
  age: 12,
  color: "red"
}

console.log("test")

const add = (a :number, b :number)=>{
console.log(a+b)
}

add(1,6)