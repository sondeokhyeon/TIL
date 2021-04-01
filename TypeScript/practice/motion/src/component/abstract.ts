
interface Items {
    index : number;
    type : string;
    url? : string;
    title : string;
    content? : string;
    isDelete : boolean;
}

abstract class abMotion {
    remove(lists : Items[], index : number) : Items[] {
        const nlist : Items[] = lists.filter(elem => elem.index !== index);
        return nlist
    }

    render(item : Items) : void {
        //document.getElementById('content-cont').innerHTML = elem;
    }

}