import { htmlElems, Items } from "../cmm-types";
abstract class abMotion {
    private lists: Items[] = [];

    constructor() {}

    //add() : void 
    
    remove(index : number) : Items[] {
        const nlist : Items[] = this.lists.filter(elem => elem.index !== index);
        return nlist
    }

    render(item : Items) : void {
        const elems : string = '<div></div>';
        const cont : htmlElems = document.getElementById('content-cont');
        if(cont !== null ) {
            cont.innerHTML += elems;
        }
    }

    //reRender()
}

export {abMotion}