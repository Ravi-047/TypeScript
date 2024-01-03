type TodoE = {
    title: string
    dueDate: string | Date
    isComplete: boolean
}

const todoE = {
    title: "sdf",
    dueDate: new Date(),
    isComplete: true
} satisfies TodoE

todoE.dueDate.setDate(4)