interface Person {
    name : string;
    say(message: string) : void;
}

interface Programmer {
    writeCode(requirement: string): string;

}

abstract class Korean implements Person {
    constructor(public name : string) {

    }
    say(message : string) : void {
        console.log(message)
    }  
    abstract doyouknow(club : string) : void
}

class KoreanProgrammer extends Korean implements Programmer {
    constructor(public name : string, public jumin : number) {
        super(name);
    }
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '....';
    }
    doyouknow(club : string) : void {
        console.log(`do you know ${club}`)
    }
    say(message: string) :void {
        console.log(message)
    }
}

const joy = new KoreanProgrammer('joy', 2222);


// class KoreanProgrammer implements Person, Programmer  {
//     constructor(public name:string) {
//     }
//     say(message: string): void {
//         console.log(message)
//     }
//     writeCode(requirement : string) : string {
//         console.log(requirement);
//         return requirement + '....';
//     }
//     doyouknow(club : string) {
//         console.log(`do you know ${club}?`)
//     }
// }
