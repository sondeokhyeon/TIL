// interface 

interface TV {
    turnOn() : boolean;
    turnOff() : void;
}

const myTV : TV  = {
    turnOn() {
        console.log('켜짐')
        return true;
    },
    turnOff() {
        console.log('꺼짐')
    }
}

console.log(myTV.turnOn())
console.log(myTV.turnOff())

interface Cell {
    row : number;
    col : number;
    piece? : Piece ; //?는 optional 속성이다.
}

interface Piece {
    move(from : Cell, to :Cell) : boolean;
}

function createBoard() {
    const cells : Cell[] = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({row, col})
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to:Cell) {
        return true;
    }
}