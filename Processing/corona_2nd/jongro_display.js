function jongro_disp(){
  image(backImage, 0, 0);
  let myData = table.getNum(date, 2);
  dotColor = map(myData, dataMin, dataMax, 255, 0);
  colorMode(HSB);
  //fill(dotColor,100,100);
  //circle(mouseX, mouseY, 50);
  tint(dotColor, 100, 100);
  image(jongro, 336, 167);
  noTint();
  let myDate = table.get(date,0);
  text(myDate, 150, 150);
}
