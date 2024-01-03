type Todo1 = {
    id: string;
    name: string;
    status: string;
    completed: boolean;
}

type NewTodo = Omit<Todo1, "id">;

function saveTodo(todo: NewTodo): Todo1 {
    return { ...todo, id: crypto.randomUUID() }
}

function renderTodo1(todo: Todo1) {
    const div = document.createElement("div");
    div.id = todo.id;
}