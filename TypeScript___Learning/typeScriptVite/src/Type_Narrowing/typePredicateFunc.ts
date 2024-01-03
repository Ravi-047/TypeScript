type Person0 = { name: string };

type Todo0 = {
    title: string;
}

function print(obj: Person0 | Todo0) {
    if (isPerson(obj)) {
        console.log(obj.name)
        return
    }
    console.log(obj.title);
}

function isPerson(obj: Person0 | Todo0): obj is Person0 {
    return "name" in obj;
}

//--------------------------------------------

const PRIORITES = ["High", "Medium", "Low"];
type Priority = (typeof PRIORITES)[number];
type Todo3 = {
    title: string;
    description: string;
}

function func(todo: Todo3) {
    if (isPriority(todo.description)) {
        console.log(todo.description)
    }
}

function isPriority(description: string): description is Priority {
    return PRIORITES.includes(description as Priority);
}