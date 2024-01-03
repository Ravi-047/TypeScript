
type TodoD = {
    title: string
}

function funcA() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json()).then((data) => {
        return data as TodoD
    })
}