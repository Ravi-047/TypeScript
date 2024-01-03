type TodoA = {
    title: string;
    completed: boolean;
}

type FinalTodo = Readonly<TodoA>;