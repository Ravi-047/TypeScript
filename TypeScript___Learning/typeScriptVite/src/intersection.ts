// Intersections ----------------------------------------------

type Person3 = {
    name: string,
    age: number
}

type PersonWithId = Person & { id: string }

const person0 = { name: "Kyle", age: 20, id: "1" }


