function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if(date > 0){
      date--;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if(date < 804){
      date++;
    }
  }
}
