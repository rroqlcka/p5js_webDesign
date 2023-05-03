function setup() {
  createCanvas(2000,2000);
  background(200,200,200);
}


function draw() {
  angleMode(DEGREES);
  fill(202,150,196);

  noStroke();
  
  translate(width / 2, height / 2);
  
  for(let i=0; i<6;i++){
    rotate(30);
    ellipse(0,0,500,50);
  }
}
