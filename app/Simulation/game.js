let mapX,
  mapY = 0;
let map_of_the_world = tryToLoad("map_of_the_world", "black");
let pin = tryToLoad("pin", "red");
function update() {}
function drawPin(x, y) {
  drawImage(pin, x - 10, y - 30, 20, 30);
}
function draw() {
  drawImage(map_of_the_world, 0, 0, 900, 600);
  drawPin(100, 350);
}
