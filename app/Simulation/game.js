let pins = [];
let pos = [
  [100, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [500, 50],
  [600, 60],
  [700, 70],
  [800, 60],
  [90, 30],
  [20, 14],
  [40, 200],
  [20, 400],
];

class Hocation {
  x = randomInteger(12);
  y = randomInteger(12);
}
for (var k = 0; k <= 12; k++) {
  pins[k] = new Hocation();
}
let map_of_the_world = tryToLoad("map_of_the_world", "black");
let pin = tryToLoad("pin", "red");
function update() {}
function drawPin(x, y) {
  drawImage(pin, x - 10, y - 30, 20, 30);
}
function draw() {
  drawImage(map_of_the_world, 0, 0, 900, 600);
  for (var k = 0; k <= 1; k++) {
    drawPin(pos[pins[k].x][0], pos[pins[k].y][1]);
  }
}
