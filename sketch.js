var ball = {
  x: -88,
  y: 36,
  r: 15,
  xspeed: 7,
  yspeed: 4,
  color: ["red", "purple", "blue", "yellow", "orange"]
}

function setup() {
  createCanvas(400, 400);
  console.log(ball)
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.r)
  fill(ball.color[2])
}