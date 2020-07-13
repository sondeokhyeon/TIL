// enum
// enum도 타입이다
// 내부적으로 인덱스를 만들기 때문에 인덱스로도 접근이 가능하다
// 인덱스는 Number말고도 문자열로 지정이 가능하다 
enum StarBuksGrade {
    WELCOME,
    GREEN,
    GOLD
}

enum indexStarBuksGrade {
    WELCOME = 1,
    GREEN = 2,
    GOLD = 3
}

enum KeyValueStarBuksGrade {
    WELCOME = "WELCOME",
    GREEN = "GREEN",
    GOLD = "GOLD"
}

function getDiscount(v: StarBuksGrade) : number {
    switch(v) {
        case StarBuksGrade.WELCOME:
            return 0;
        case StarBuksGrade.GREEN:
            return 5;
        case StarBuksGrade.GOLD:
            return 10;
        default :
            return 0;
    }
}

console.log(getDiscount(StarBuksGrade.GREEN))
console.log(StarBuksGrade.GREEN)
console.log(StarBuksGrade)
console.log(indexStarBuksGrade)
console.log(KeyValueStarBuksGrade)