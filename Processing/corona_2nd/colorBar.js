function colorBar_disp(barX, barY, barW){
  for(let i=0; i < 255; i++){
    stroke(i, 100, 100);
    line(barX, barY+i, barX + barW, barY+i);
  }
  text(dataMax, barX+30, barY+5);
  text(dataMin, barX+30, barY+5 + 255);
}
