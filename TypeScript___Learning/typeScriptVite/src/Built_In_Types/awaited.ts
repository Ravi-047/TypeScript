type Async = Promise<string>;

type Value = Awaited<Async>;

async function f() {
    return 3;
}

type Valuea = Awaited<ReturnType<typeof f>>;