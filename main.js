import { addCardClickEvent } from './dom-utils.js';
import { test } from './modules.js';
document.addEventListener('DOMContentLoaded', () => {
    console.log(test)
    addCardClickEvent();
});