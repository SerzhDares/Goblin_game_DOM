/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Field.js
class Field {
  constructor() {
    this.field = null;
  }
  generateField(size) {
    const field = document.createElement('div');
    field.classList.add('field');
    for (let i = 0; i < Math.floor(size) ** 2; i++) {
      const fieldBlock = document.createElement('div');
      fieldBlock.classList.add('field_block');
      field.appendChild(fieldBlock);
    }
    this.field = field;
  }
  viewField(size) {
    this.generateField(size);
    return this.field;
  }
}
;// CONCATENATED MODULE: ./src/js/Character.js
class Character {
  constructor() {
    this.char = undefined;
  }
  generateChar() {
    const char = document.createElement('div');
    char.classList.add('char');
    this.char = char;
  }
  viewChar() {
    this.generateChar();
    return this.char;
  }
}
;// CONCATENATED MODULE: ./src/js/GamePlay.js
class GamePlay {
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
;// CONCATENATED MODULE: ./src/js/app.js



const field = new Field();
const app_char = new Character();
const game = new GamePlay(field, app_char);
game.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;