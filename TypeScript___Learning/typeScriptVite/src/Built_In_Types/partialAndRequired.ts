type Todo2 = {
    title: string;
    completed: boolean;
    address?: {
        street?: string;
        city?: string;

    }
}

type FormTodo = Partial<Todo2>;
type RequiredTodo = Required<Todo2>;

type NewFormTodo = Required<Pick<Todo2, "title">> & Omit<Todo2, "title">;

const todo2: NewFormTodo = {
    title: "Clean room",
    completed: false
}

type RequiredPick<T, key extends keyof T> = Required<Pick<T, key>>