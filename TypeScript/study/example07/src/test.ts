interface Human {
    name : string;
    eat(): void;
}


const human : Human = {
    name : '홍길동',
    eat()  {
        console.log(`${this.name}이 밥을 먹는다.`)
    },
}

const honggildong = human;
honggildong.eat();

