let angle;

function setup() {
  createCanvas(700, 400);
  colorMode(HSB);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);
  angle = (mouseX/width)*90;
  angle = min(angle, 90);
  translate(width/2, height);
  stroke(0, 255, 255);
  line(0, 0, 0, -120);
  translate(0, -120);
  branch(120, 0);
}

function branch(h, level) {
  stroke(level*25, 255,255);
  h *= 0.66;
if(h>2) {
  push();
  rotate(angle)
  line(0, 0, 0, -h);
  translate(0, -h);
  branch(h, level+1);
  pop();
  push();
  rotate(-angle)
  line(0, 0, 0, -h);
  translate(0, -h);
  branch(h, level+1);
  pop();
}
}