let map_of_the_world = tryToLoad("map_of_the_world", "black");
let pin = tryToLoad("pin", "red");
let pins = [];
let sunR = 100;
let Win = false;
let Lose = false;
let turns = 0;
let boklukStrength = randomInteger(20) * 2;
let net = tryToLoad("net", "white");
let life = 100;
let myTurn = true;
let myEndTurn = false;
let boklukTurn = false;
let boklukEndTurn = false;
let bokluklife = 100;
let mana = 100;
let boklukmana = 100;
let fishX = 10;
let fishDirection = 1;
let randSpeed = randomInteger(5) + 1;
let horizon = false;
let bokluk = tryToLoad("bokluk", "black");
let fish = tryToLoad("fish", "blue");
let fishLeft = tryToLoad("fishLeft", "blue");
let slash = tryToLoad("slash", "white");
let boklukY = 190;
let dfloat = 0.1;
let pinMenu = false;
let boklukBattle = false;
let isBokluk = true;
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
  context.strokeStyle = "#3366ff";
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
  drawImage(fish, x, y, w, h);
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
  if (bokluklife <= 0) {
    bokluklife = 0;
    Win = true;
    Lose = false;
  } else if (life <= 0) {
    life = 0;
    Win = false;
    Lose = true;
  }
  if (boklukY <= 200) {
    dfloat += 0.01;
  } else if (boklukY >= 220) {
    dfloat -= 0.01;
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
  if (fishX <= -70) {
    fishDirection = 1;
  } else if (fishX >= 880) {
    fishDirection = 0;
  }
  if (Lose) {
    alert("You are dead.");
    alert("Try again with refreshing the tab.");
  }
  if (boklukBattle) {
    myTurn = true;
    if (myEndTurn) {
      boklukTurn = true;
      boklukEndTurn = false;
      myTurn = false;
      turns++;
    } else if (boklukEndTurn) {
      boklukTurn = false;
      myEndTurn = false;
      myTurn = true;
      turns++;
    }
  }
  if (boklukTurn) {
    boklukStrength = randomInteger(10) * 2;
    if (boklukmana >= boklukStrength + 15) {
      mana += boklukStrength / 2;
      boklukmana -= boklukStrength + 15;
      life -= boklukStrength;
      myEndTurn = false;
      turns++;
      boklukTurn = false;
      myTurn = true;
      console.log(turns);
    } else {
      boklukStrength = randomInteger(boklukmana) * 2;
    }
  }
}
function drawPin(x, y) {
  drawImage(pin, x - 10, y - 30, 20, 30);
}
function drawGarbage(x, y, w, h) {
  drawImage(bokluk, x, y, w, h);
}
function draw() {
  drawImage(map_of_the_world, 0, 0, 900, 600);
  context.font = "bold 25px cursive";
  context.fillStyle = "black";
  context.fillText("Day 1", 0, 0);
  context.font = "bold 10px cursive";
  for (var k = 0; k <= 12; k++) {
    drawPin(pos[pins[k].x][0], pos[pins[k].y][1]);

    if (
      isMouseColliding(pos[pins[k].x][0] - 10, pos[pins[k].y][1] - 30, 20, 30)
    ) {
      context.fillStyle = "#D3A96C";
      context.fillRect(pos[pins[k].x][0], pos[pins[k].y][1], 200, 155);
      context.strokeStyle = "#ad5700";
      context.strokeRect(pos[pins[k].x][0], pos[pins[k].y][1], 200, 155);
      context.fillStyle = "black";
      context.fillText("Pin", pos[pins[k].x][0] + 5, pos[pins[k].y][1] + 5);
      context.fillText(
        "has garbage",
        pos[pins[k].x][0] + 5,
        pos[pins[k].y][1] + 12
      );
    } else {
      pinMenu = false;
    }
  }
  if (horizon) {
    context.fillStyle = "#92d3ed";
    context.fillRect(0, 0, 900, 600);
    context.fillStyle = "#0033cc";
    context.fillRect(0, 300, 900, 300);
    drawX(0, 0, 50, 50);
    context.save();
    plotSine(context, step);
    plotSine2(context, step - 100);
    plotSine3(context, step - 200);
    context.restore();
    step += 1;
    context.fillStyle = "yellow";
    context.arc(0, 0, sunR, 0, 360);

    if (fishDirection == 1) {
      drawFish(fishX, 400, 70, 40);
    } else {
      drawImage(fishLeft, fishX, 400, 70, 40);
    }
    drawGarbage(300, boklukY, 200, 120);
  }
  var line = (startX, startY, endX, endY) => {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.closePath();
    context.stroke();
  };
  if (boklukBattle) {
    context.fillStyle = "#92d3ed";
    context.fillRect(0, 0, 900, 600);
    line(450, 0, 450, 400);
    context.fillStyle = "#D3A96C";
    context.fillRect(0, 400, 900, 300);
    drawFish(100, 200, 245, 140);
    context.fillStyle = "#66ff99";
    for (let i = 0; i <= life; i++) {
      context.fillRect(100 + i * 2, 190, 1, 10);
    }
    context.fillStyle = "purple";
    for (let i = 0; i <= mana; i++) {
      context.fillRect(100 + i * 2, 170, 1, 10);
    }
    drawGarbage(600, 200, 200, 120);
    context.fillStyle = "#66ff99";
    for (let i = 0; i <= bokluklife; i++) {
      context.fillRect(600 + i * 2, 190, 1, 10);
    }
    context.fillStyle = "purple";
    for (let i = 0; i <= boklukmana; i++) {
      context.fillRect(600 + i * 2, 170, 1, 10);
    }
    var j = 0;
    for (var i = 1; i <= 6; i++) {
      context.fillStyle = "#ba6e00";
      if (i % 3 == 1) {
        j++;
        context.fillRect(j * 215 - 200, 415, 200, 50);
      } else if (i % 3 == 2) {
        context.fillRect(215 * j - 200, 480, 200, 50);
      } else {
        context.fillRect(j * 215 - 200, 545, 200, 50);
      }
    }
    for (var i = 1; i <= 6; i++) {
      context.fillStyle = "#ba6e00";
      if (i % 3 == 1) {
        j++;
        context.fillRect(j * 215 - 180, 415, 200, 50);
      } else if (i % 3 == 2) {
        context.fillRect(215 * j - 180, 480, 200, 50);
      } else {
        context.fillRect(j * 215 - 180, 545, 200, 50);
      }
    }
    context.fillStyle = "black";
    context.font = "bold 15px cursive";
    context.fillText("Net slap", 20, 430, 100);
    context.fillStyle = "red";
    context.fillText("30 dm", 135, 430, 100);
    context.fillStyle = "purple";
    context.fillText("40 mana", 135, 445, 100);
    context.fillStyle = "black";
    context.fillText("three-scoop-style", 235, 430, 100);
    context.fillStyle = "red";
    context.fillText("10 dm", 350, 430, 100);
    context.fillStyle = "purple";
    context.fillText("10 mana", 350, 445, 100);
    context.fillStyle = "black";
    context.fillText("OP Vacuum", 20, 490, 100);
    context.fillStyle = "red";
    context.fillText("40 dm", 135, 490, 100);
    context.fillStyle = "purple";
    context.fillText("60 mana", 135, 505, 100);
    context.fillStyle = "black";
    context.fillText("Cheap attack", 235, 490, 100);
    context.fillStyle = "red";
    context.fillText("5 dm", 350, 490, 100);
    context.fillStyle = "purple";
    context.fillText("0 mana", 350, 505, 100);
    context.fillStyle = "black";
    context.fillText("VS", 435, 15);
    context.fillStyle = "darkorange";
    context.font = "bold 40px 'Courier New'";
    context.fillText("Battle", 10, 15);
  }
  if (Win) {
    boklukBattle = false;
    Win = false;
    mana = 100;
    boklukmana = 100;
    life = 100;
    bokluklife = 100;
  }
  context.fillStyle = "white";
  context.fillRect(900, 0, 300, 1000);
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
  if (isMouseColliding(300, boklukY, 200, 120) && isBokluk && horizon) {
    boklukBattle = true;
    horizon = false;
  }
  if (boklukBattle) {
    if (isMouseColliding(15, 415, 200, 50)) {
      if (mana >= 40) {
        console.log("Net Slap");
        bokluklife -= 30;
        mana -= 40;
        boklukmana += 15;
        myEndTurn = true;
      } else {
        alert("Not enough mana.");
      }
    }
    if (isMouseColliding(215, 415, 200, 50)) {
      if (mana >= 20) {
        console.log("Three-scoop-style");
        bokluklife -= 10;
        mana -= 10;
        boklukmana += 5;
        myEndTurn = true;
      } else {
        alert("Not enough mana.");
      }
    }
    if (isMouseColliding(15, 485, 200, 50)) {
      if (mana >= 60) {
        console.log("OP Vacuum");
        bokluklife -= 40;
        mana -= 60;
        boklukmana += 20;
        myEndTurn = true;
      } else {
        alert("Not enough mana.");
      }
    }
    if (isMouseColliding(215, 485, 200, 50)) {
      console.log("Cheap attack");
      bokluklife -= 5;
      boklukmana += 2;
      myEndTurn = true;
    }
  }
}
