let backImage;
let table;
let dataMax = 0;
let dataMin = 1000;
let jongro;
let date = 0;

function preload(){
  backImage = loadImage('data/seoul.png');
  jongro = loadImage('data/jongro.png');
  table = loadTable('data/corona.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800,600);
  minMax()
}

function draw() {
  jongro_disp();
  colorBar_disp(730, 150, 20); 
  print(mouseX + " : " + mouseY);
}
