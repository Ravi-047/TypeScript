const s1 = sum([1, 3]);
const s2 = sum(1, 3);

function sum(nums: number[]): number;
function sum(a: number, b: number): number;

function sum(a: number | number[], b?: number) {
    if (Array.isArray(a)) {
        return a.reduce((acc, val) => acc + val, 0);
    }

    if (typeof b === "number") {
        return a + b;
    }

    if (b != null) {
        return a + b;
    }
}