const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';

let gameCanvas = document.getElementById('gameCanvas');
let ctx = gameCanvas.getContext('2d');

ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
ctx.strokestyle = CANVAS_BORDER_COLOR;

ctx.fillRect(0,0,gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0,0, gameCanvas.width, gameCanvas.height);