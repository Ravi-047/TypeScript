type Options1 = {
    debug: boolean;
    format: {
        tabs: boolean;
        tabwidth: number;
    }
}

// @ts-expect-error
function printNumber(num: number, options?: Options1) {
    console.log(num);
}

printNumber(100);