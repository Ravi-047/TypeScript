function checkLength(a: string, b: number) {
    return a.length < b
}

type ReturnOfLengthCheck = ReturnType<typeof checkLength>

type Params = Parameters<typeof checkLength>;