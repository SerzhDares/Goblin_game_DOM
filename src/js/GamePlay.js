export default class GamePlay {

    constructor(field, char) {
        this.field = field;
        this.fieldSize = 4;
        this.char = char;
        this.activeChar = null;
    }

    init() {
        this.redrawField();
        this.start();
    }

    redrawField() {
        const field = this.field.viewField(this.fieldSize);
        const body = document.querySelector('body');
        const container = document.createElement('div');
        container.classList.add('container');
        container.appendChild(field);
        body.insertBefore(container, body.firstChild);
        this.fieldBlocks = [...field.children];
    }

    generatePosition() {
        const position = Math.floor(Math.random() * this.fieldSize ** 2);
        if (position === this.position) {
            this.generatePosition();
            return;
        }
        this.deleteChar();
        this.position = position;
        this.addChar();
    }

    addChar() {
        this.activeChar = this.char.viewChar();
        this.fieldBlocks[this.position].appendChild(this.activeChar);
    }

    deleteChar() {
        if (this.activeChar === null) {
            return;
        }
        this.fieldBlocks[this.position].firstChild.remove();
    }

    start() {
        setInterval(() => {
            this.generatePosition();
        }, 1000);
    }
}