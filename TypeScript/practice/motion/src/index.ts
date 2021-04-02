import { abMotion } from "./component/abstract.js"
import buttonAction from './component/buttonAction.js' 

class motion extends abMotion {
    
}

function init() : void {
    new motion();
    new buttonAction();
}

window.addEventListener('load', init)