type TodoC = {
    title: string;
    priority: "High" | "Normal" | "Low";
    isComplete: boolean;
    description?: string;
    dueDate: Date | string
}


function extendTodoC(todo: TodoC) {
    if (todo.dueDate instanceof Date) {
        todo.dueDate.toDateString()
        return
    }
    console.log(todo.dueDate);
    switch (todo.priority) {
        case "High":
            console.log("High");
            break;
        case "Normal":
            console.log("Normal");
            break;
        case "Low":
            console.log("Low");
            break;
        default:
            const exhaustiveCheck: never = todo.priority;
            return exhaustiveCheck;
    }
}