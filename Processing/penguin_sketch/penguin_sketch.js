function setup() {
  createCanvas(2000,2000);
  background(36,107,210);
}


function draw() {
  fill(70,70,70);
  noStroke();
  circle(1000,1000,500);
  describe('grey circle with grey outline in the middle of blue canvas');

  fill(255,255,255);
  arc(1000,1000,400,400,0,PI);

  arc(900,1000,200,200,PI,TWO_PI);
  arc(1100,1000,200,200,PI,TWO_PI);
  
  fill(0,0,0);
  circle(890,1000,25);
  circle(1110,1000,25);

  fill(254,189,18);
  ellipse(1000,1050,100,50);

}
