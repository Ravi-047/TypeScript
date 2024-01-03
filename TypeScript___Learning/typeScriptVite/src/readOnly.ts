// Readonly ---------------------------------------------------

type Person4 = {
    readonly id: number,
    name: string,
    age: number
}

const person4: Person4 = { id: 1, name: "Kyle", age: 20 }

type NumberArary = readonly number[]

const nums: NumberArary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

