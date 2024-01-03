// unions ----------------------------------------------

let id: string | number = "2"

type Todo = {
    id: number | string,
    name: string,
    status: "Complete" | "Incomplete" | "Draft"
}

type Person1 = {
    name: string,
    age: number
}

type TodoPerson = Todo | Person1

const todo: TodoPerson = { name: "Kyle", age: 20 }


