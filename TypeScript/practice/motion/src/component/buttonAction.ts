
import { htmlElems, Items } from "../cmm-types";

type actionType = 'image' | 'video' | 'note' | 'task';

class buttonAction {
    private readonly IMAGE_BTN : htmlElems = document.getElementById('image-btn')
    private readonly VIDEO_BTN : htmlElems = document.getElementById('video-btn')
    private readonly NOTE_BTN : htmlElems = document.getElementById('note-btn')
    private readonly TASK_BTN : htmlElems = document.getElementById('task-btn')
    private readonly modalContainer  = document.getElementById('modal-container') as HTMLElement
    private readonly inputContainer  = document.getElementById('input-cont') as HTMLElement
    private readonly modalBackground = document.getElementById('modal-background') as HTMLElement

    constructor() {
        this.btnAction();
        this.modalClose();
    }

    btnAction() {
        !!this.IMAGE_BTN && this.IMAGE_BTN.addEventListener('click', () => {this.modalOpen('image')})
        !!this.VIDEO_BTN && this.VIDEO_BTN.addEventListener('click', () => {this.modalOpen('video')})
        !!this.NOTE_BTN  && this.NOTE_BTN.addEventListener('click', () => {this.modalOpen('note')})
        !!this.TASK_BTN  && this.TASK_BTN.addEventListener('click', () => {this.modalOpen('task')})
    }
    
    modalOpen(types : actionType) : void {
        let inputs : string = ''; 
        if(types === 'image') {
            inputs  = "<div><label>타이틀<input></label></div>"
                    + "<div><label>주소<input></label></div>"
        } else if(types === "video") {
            inputs  = "<div><label>타이틀<input></label></div>"
                    + "<div><label>주소<input></label></div>"
        } else if(types === 'note') {
            inputs  = "<div><label>타이틀<input></label></div>"
                    + "<div><label>주소<input></label></div>"
        } else if(types === 'task') {
            inputs  = "<div><label>타이틀<input></label></div>"
                    + "<div><label>주소<input></label></div>"
        }
        

        if(this.inputContainer !== null && this.modalContainer !== null) {
            const title = document.getElementById('modal-title') as HTMLElement
            title.innerText = types.toUpperCase();
            this.inputContainer.innerHTML = inputs;
            this.modalContainer.style.display = 'block'
            this.modalBackground.style.display = 'block';
        }
        this.modalBackground.addEventListener('click', () => {
            this.inputContainer.innerHTML = '';
            this.modalContainer.style.display = 'none'
            this.modalBackground.style.display = 'none'
        })
    }

    modalClose() : void {
        const closeBtn : htmlElems = document.getElementById('modal-close') as HTMLElement
        closeBtn.onclick = () => {
            if(this.inputContainer !== null && this.modalContainer !== null) {
                this.inputContainer.innerHTML = '';
                this.modalContainer.style.display = 'none'
                this.modalBackground.style.display = 'none'
            }
        }
    }

    // submit(type : actionType) : Items {
        
    // }
}

export default buttonAction;