function preload() {
  // Load your image here
  thinking_guy = loadImage('static/img/thinking_guy.png');
  background_gradient_orange = loadImage('static/img/gradient_orange.avif');

}

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  imageMode(CORNER);
  image(background_gradient_orange, 0,0,1920,1080);
  imageMode(CENTER);
  image(thinking_guy, width / 2, height / 2, 150,210);
}
