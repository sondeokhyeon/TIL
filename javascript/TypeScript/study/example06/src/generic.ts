

function createPromise<T>(x : T, timeout: number) {
    return new Promise<T>((res : (v:T) => void, rej) => {
        setTimeout(() => {
            res(x)
        }, timeout)
    })
}

createPromise(10, 100).then(v => console.log(v))

function createTuple2<T, U>(v: T, v2: U):  [T, U] {
    return [v, v2]
}

const t1 = createTuple2('user1', 1000);

interface DB<T> {
    add(v : T): void;
    get() : T;
}

class D<T> implements DB<T> {
    add(v: T): void {
        throw new Error("Method not implemented.")
    }
    get(): T {
        throw new Error("Method not implemented.")
    }
}

interface JSONSerialier {
    serialize() : string;
}

class LocalDb<T extends JSONSerialier> implements DB<T> {
    constructor(private localStorageKey : string) {}
    add(v : T) {
        localStorage.setItem(this.localStorageKey, v.serialize())
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null
    }
}

// interface User {name : string}

// const userDb = new LocalDb<User>('user');
// userDb.add({name : 'jay'});
// const userA = userDb.get();
// userA.name;


interface Vegitable {
    v : string;
}

interface Meat {
    m : string;
}
interface Cart<T> {
    getItem() : T extends Vegitable ? Vegitable : Meat
}

const cart : Cart<string> = {
    getItem() {
        return {
            m : ''
        }
    }
}

cart.getItem();