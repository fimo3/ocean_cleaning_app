let map_of_the_world = tryToLoad("map_of_the_world", "black");
let pin = tryToLoad("pin", "red");
let pins = [];
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
for (var k = 0; k <= 12; k++) {
  pins[k] = new Hocation();
  rand = randomInteger(12);
}
function update() {}
function drawPin(x, y) {
  context.fillText(x + ", " + y, x, y);
  drawImage(pin, x - 10, y - 30, 20, 30);
}
function draw() {
  drawImage(map_of_the_world, 0, 0, 900, 600);
  for (var k = 0; k <= 12; k++) {
    drawPin(pos[pins[k].x][0], pos[pins[k].y][1]);
  }
}
