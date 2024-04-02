let map_of_the_world = tryToLoad("map_of_the_world", "black");
let pin = tryToLoad("pin", "red");
let pins = [];
let fishX = 10;
let fishDirection = 1;
let randSpeed = randomInteger(5) + 1;
let horizon = false;
let bokluk = tryToLoad("bokluk", "black");
let boklukY = 300;
let dfloat = 0.1;
let pos = [
  [50, 250], //yes
  [500, 50], //yes
  [510, 200], //yes
  [400, 400], //yes
  [300, 250], //yes
  [600, 400], //yes
  [220, 150], //yes
  [480, 150], //yes
  [850, 250], //yes
  [550, 200], //yes
  [450, 210], //yes
  [100, 400], //yes
];
let rand = randomInteger(12);
class Hocation {
  x = rand;
  y = rand;
}
let drawX = (x, y, w, h) => {
  context.fillStyle = "red";
  context.fillRect(x, y, w, h);
  context.strokeStyle = "crimson";
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + w, y + h);
  context.moveTo(x + w, y);
  context.lineTo(x, y + h);
  context.closePath();
  context.stroke();

  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(x + w / 2, y + h / 4);
  context.lineTo(x, y);
  context.moveTo(x + w / 2, y + h / 4);
  context.lineTo(x + w, y);
  context.moveTo(x + w / 2, y + h / 1.3);
  context.lineTo(x, y + h);
  context.moveTo(x + w / 2, y + h / 1.3);
  context.lineTo(x + w, y + h);
  context.moveTo(x + w / 4, y + h / 2);
  context.lineTo(x, y);
  context.moveTo(x + w / 4, y + h / 2);
  context.lineTo(x, y + h);
  context.moveTo(x + w / 1.3, y + h / 2);
  context.lineTo(x + w, y + h);
  context.moveTo(x + w / 1.3, y + h / 2);
  context.lineTo(x + w, y);
  context.closePath();
  context.stroke();
  context.fill();
  context.fillStyle = "black";
  context.strokeStyle = "black";
};
function plotSine(context, xOffset) {
  var width = context.canvas.width;
  var height = context.canvas.height;
  context.beginPath();
  context.lineWidth = 10;
  context.strokeStyle = "cornflowerblue";
  context.fillStyle = "cornflowerblue";
  var x = 0;
  var y = 0;
  var amplitude = 20;
  var frequency = 20;
  context.moveTo(x, 600);
  while (x < width) {
    y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
    context.lineTo(x, y);
    x += 100;
  }
  context.stroke();
  context.save();
  context.restore();
}

function plotSine2(context, xOffset) {
  var width = context.canvas.width;
  var height = context.canvas.height;
  context.beginPath();
  context.lineWidth = 10;
  context.strokeStyle = "#baddad";
  context.fillStyle = "#baddad";
  var x = 0;
  var y = 0;
  var amplitude = 20;
  var frequency = 20;
  context.moveTo(x, 600);
  while (x < width) {
    y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
    context.lineTo(x, y);
    x += 95;
  }
  context.stroke();
  context.save();
  context.restore();
}

function plotSine3(context, xOffset) {
  var width = context.canvas.width;
  var height = context.canvas.height;
  context.beginPath();
  context.lineWidth = 10;
  context.strokeStyle = "blue";
  var x = 0;
  var y = 0;
  var amplitude = 20;
  var frequency = 20;
  context.moveTo(x, 600);
  while (x < width) {
    y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
    context.lineTo(x, y);
    x += 105;
  }
  context.stroke();
  context.save();
  context.restore();
}

function spirograph() {
  var canvas = document.getElementById("canvas2");
  var step = 4;
  for (var i = -4; i < canvas.height; i += step) {
    plotSine(context, i);
    plotSine2(context, i);
    plotSine3(context, i);
  }
}
var step = -4;
var drawFish = (x, y, w, h) => {
  drawImage(pin, x, y, w, h);
};
let isMouseColliding = (x, y, w, h) => {
  return areColliding(mouseX, mouseY, 1, 1, x, y, w, h);
};
for (var k = 0; k <= 12; k++) {
  pins[k] = new Hocation();
  rand = randomInteger(12);
}
function update() {
  boklukY += dfloat;
  console.log(dfloat);
  if (boklukY <= 250) {
    dfloat += 0.2;
    console.log(dfloat);
  } else if (boklukY >= 300) {
    dfloat -= 0.2;
    console.log(dfloat);
  }
  if (fishDirection == 1) {
    fishX += randSpeed;
    for (var i = 1; i < 4; i++) {
      randSpeed = i;
    }
  } else {
    randSpeed = randomInteger(4) + 1;
    fishX -= randSpeed;
    for (var i = 1; i < 4; i++) {
      randSpeed = i;
    }
  }
  if (fishX <= 0) {
    fishDirection = 1;
  } else if (fishX >= 880) {
    fishDirection = 0;
  }
}
function drawPin(x, y) {
  context.fillText(x + ", " + y, x, y);
  drawImage(pin, x - 10, y - 30, 20, 30);
}
function draw() {
  drawImage(map_of_the_world, 0, 0, 900, 600);
  for (var k = 0; k <= 12; k++) {
    drawPin(pos[pins[k].x][0], pos[pins[k].y][1]);
  }
  if (horizon) {
    context.fillStyle = "white";
    context.fillRect(0, 0, 900, 600);
    context.fillStyle = "#0033cc";
    context.fillRect(0, 300, 900, 300);
    drawX(0, 0, 50, 50);
    context.save();
    plotSine(context, step, 50);
    plotSine2(context, step - 100, 50);
    plotSine3(context, step - 200, 50);
    context.restore();
    step += 1;
    drawFish(fishX, 400, 20, 20);
    drawImage(bokluk, 300, boklukY, 200, 100);
  }
}
function mouseup() {
  if (isMouseColliding(0, 0, 50, 50)) {
    horizon = false;
  }
  for (var k = 0; k <= 12; k++) {
    if (
      isMouseColliding(pos[pins[k].x][0] - 10, pos[pins[k].y][1] - 30, 20, 30)
    ) {
      horizon = true;
    }
  }
}
