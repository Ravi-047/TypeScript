// typeof -----------------------------------

const person6 = {
    name: "Kyle",
    age: 20
}
const people: (typeof person6)[] = [];

people.push({ name: "Kyle", age: 20 })



function sayHi(name: string) {
    console.log(`Hello ${name}`)
}

type FuncType = typeof sayHi