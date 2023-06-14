let texts;
let sizes;
let colors;

function preload(){
    words = loadStrings('wordcloud_data.csv');

}


class TextObject {
  constructor(x, y, text, size, color) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.size = size;
    this.color = color;
  }

  display() {
    textSize(this.size);
    fill(this.color[0], this.color[1], this.color[2]);
    text(this.text, this.x, this.y);
  }
}

let textObjects = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < texts.length; i++) {
    let x = random(width);
    let y = random(height);
    let text = texts[i];
    let size = sizes[i];
    let color = colors[i];
    let textObj = new TextObject(x, y, text, size, color);
    textObjects.push(textObj);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < textObjects.length; i++) {
    let textObj = textObjects[i];
    textObj.display();
  }
}
