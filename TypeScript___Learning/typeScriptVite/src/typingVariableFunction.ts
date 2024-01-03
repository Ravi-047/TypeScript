// Typing varaible as functions

function sumWithCallback(a: number, b: number, callback: (sum: number) => void) {
    callback(a + b)
}

sumWithCallback(4, 5, (sum) => {
    console.log(sum)
});

type PrintNameFunc = (name: string) => void

function f(name: string) {
    return name
}

