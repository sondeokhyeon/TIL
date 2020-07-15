import {Board, DeadZone, Cell} from './Board'
import { Player, PlayerType } from './player';
import "./Piece" 

export interface Hello {
    text: string;
}
/** 주석 테스트  
 *  이것은 이거다
*/
export interface user {
    name : string;
}

export class A {
 a () {

 }
}

export type d = Hello & { hi() : void }

export class Game {
    private selectedCell : Cell;
    private turn = 0;
    private currentPlayer : Player;
    private gameInfoEl = document.querySelector('.alert');
    private state: 'STARTED' | 'END' = 'STARTED';

    readonly upperPlayer = new Player(PlayerType.UPPER);
    readonly lowerPlayer = new Player(PlayerType.LOWER);

    readonly board = new Board(this.upperPlayer, this.lowerPlayer);
    readonly upperDeadZone = new DeadZone('upper');
    readonly lowerDeadZone = new DeadZone('lower');

    constructor() {
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el)
        this.currentPlayer = this.upperPlayer;
        this.board.render();
        this.renderInfo();
    }

    renderInfo(extraMessage ? : string) {
        this.gameInfoEl.innerHTML = `#${this.turn}턴 ${this.currentPlayer.type} 차례 ${(extraMessage) ? '| ' +  extraMessage : ''  }`
    }

    chnageTurn() {
        this.selectedCell.deactive();
        this.selectedCell = null;
        if(this.state === 'END') {
            this.renderInfo('END!')
        } else {
            this.turn += 1;
            this.currentPlayer = (this.currentPlayer === this.lowerPlayer) ? this.upperPlayer : this.lowerPlayer;
            this.renderInfo();
        }
        this.board.render();
    }
}

