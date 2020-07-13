// class 

interface User {
    name: string;
}

interface Product {
    id: string,
    price : number
}

class Member {
   // protected user : User;  // 인스턴스에서 접근 불가능이지만 상속관계에서는 접근이 가능하다 
    //private store: object;  // 인스턴스에서 접근 불가능
    constructor(public user : User, private store: object = {}) { // 기본적으는 public이다
        //this.user = user;
        //this.store = {};
    }
    put(id : string, product : Product) {
        this.store[id] = product;
    }
    get(id : string) {
        return this.store[id];
    }
}

class memberEvent extends Member {
    eventApply() {
        this.user.name
    }
}

const member = new Member({name : 'john'});
const regi = new memberEvent({name : 'john'});
console.log(regi.eventApply())

