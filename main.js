function setup() {
  fder = createCanvas(640, 480);
  fder.center();
  j = createCapture(VIDEO);
  j.hide();

}

function draw() {
  image(j, 230, 150, 220, 200);
  fill(0, 26, 255);
  stroke(0, 26, 255);
  circle(50, 50, 80);
  circle(50, 430, 80);
  circle(590, 50, 80);
  circle(590, 430, 80);
  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 40, 460, 20);
  rect(90, 420, 460, 20);
  rect(40, 90, 20, 300);
  rect(580, 90, 20, 300);
}

function huyp(){    
  save("img.png");
}