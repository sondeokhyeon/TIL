function add(x: number, y: number): number {
    return x + y;
}

const result = add(1,2);

function buildUserInfo(name = '-', email = '-') {
    return {name, email};
}

const user = buildUserInfo('a','b');
console.log(user)

const add2 = (a: number, b: number):number => a + b;
console.log(add2(1,2))

interface Storage { 
    a : string;
}
interface ColdStorage {
    b : string;
}
// 오버로드 
function store(type: "통조림"): Storage 
function store(type: "아이스크림"): ColdStorage 

 //유니온 타입이다.
function store(type: "통조림" | "아이스크림")   {
    if(type === "통조림") {
        return {a : '통조림'}
    } else if (type === "아이스크림") {
        return {b : '아이스크림'}
    } else {
        throw new Error('unknowType')
    }
}

const s  = store('통조림');
console.log(s.a)