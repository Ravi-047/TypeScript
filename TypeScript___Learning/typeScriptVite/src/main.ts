console.log('Hello World')

let a: number = 4

let b: string = 'hello'

let c: null = null;

let d: undefined = undefined;

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const any: any = JSON.parse("sdf")
const fetchData: any = fetch("sdf").then(res => res.json()).then(data => data)

// Object basics 

const person: { name: string, age: number, isProgrammer?: boolean } = {
    name: "Kyle",
    age: 20,
    // isProgrammer:true 
}

// Types Vs Interfaces 

type Person = {
    name: string,
    age: number,
    isProgrammer?: boolean
    friends?: string[]
    address?: {
        street: string,

    }
}

const person2: Person = {
    name: "Kyle",
    age: 20,
}

// Functions 

function printNmae(name: string) {
    console.log(name)
}


// return types
function sum4(a: number, b: number): number // mp meed tp specify the return type
{
    return a + b
}

const answer = sum4(4, 5)

function printPerson(person: { name: string }) {
    console.log(person.name)
}

const personParam = { name: "Kyle", age: 20 }
printPerson(personParam)

// void type

function sum2(a: number, b: number): void // mp meed tp specify the return type
{
    console.log(a + b)
}

// optional parameters

function parameters(name: string, age?: number) {
    console.log(name, age)
}

parameters("Kyle", 23)


// Destructured and Rest Parameters 

type Options = {
    debugMode?: boolean,
    indentLevel?: number
}

function dm(name: string, { debugMode = false, indentLevel }: Options = {}) {
    console.log(name, debugMode, indentLevel)
}

dm("Kyle")

function sum3(...nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0)
}

sum3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

