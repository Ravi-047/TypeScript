const input = document.querySelector<HTMLInputElement>(".input");

console.log(input?.value);

function getSecond<ArrayType>(array: ArrayType[]) {
    return array[1];
}


const numa = [1, 2, 3, 4, 5];
const strb = ["a", "b", "c", "d", "e"];

const get = getSecond(numa);
const get2 = getSecond(strb);

const ageneric = new Set<string>()
ageneric.add("a")

const ageneric2 = new Map<string, number>()
ageneric2.set("a", 1);

type APIResponse<TData extends object> = {
    data: TData,
    isError: boolean
}

type UserResponse = APIResponse<{ name: string, age: number }>

const api: UserResponse = {
    data: {
        name: "a",
        age: 1
    },
    isError: false
}

function aToO<T>(array: [string, T][]) {
    const obj: {
        [index: string]: T
    } = {};

    array.forEach(([key, value]) => {
        obj[key] = value;
    })

    return obj;
}

const arr: [string, number | boolean][] = [["keyONe", 1], ["keyTwo", 2], ["keyThree", true],]
