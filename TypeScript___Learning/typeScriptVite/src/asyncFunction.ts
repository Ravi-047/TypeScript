function wait(duration: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("hi");
        }, duration);
    })
}

wait(1000).then((value) => {
    console.log(value.length);
})

async function waiting(duration: number) {
    console.log(duration);
    return await fetch("https://www.google.com");
}

waiting(1000).then((value) => {
    console.log(value.json());
})