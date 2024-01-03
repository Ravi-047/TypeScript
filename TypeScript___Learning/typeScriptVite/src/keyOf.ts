// keyof ------------------------------------

type Person5 = {
    name: string,
    age: number,
    isProgrammer?: boolean
}

function getValue(key: keyof Person5, person: Person5) {
    return person[key]
}

const age = getValue("age", { name: "Kyle", age: 20 })

