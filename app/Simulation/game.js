let mapX,
  mapY = 0;
let cell = {
  color: "green",
};
function update() {}
function draw() {
  for (var i = 0; i < 267; i++) {
    for (var j = 0; j < 200; j++) {
      context.fillStyle = "blue";
      context.fillRect(i * 3, j * 3, 3, 3);
    }
  }
  for (var i = 0; i < 200; i++) {
    for (var j = 0; j < 100; j++) {
      context.fillStyle = cell.color;
      context.fillRect(i * 3, j * 3, 3, 3);
    }
  }
}
