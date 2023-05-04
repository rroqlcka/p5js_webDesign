function minMax() {
  for (let i = 0; i < 804; i++) {
    let myData = table.getNum(i, 2);
    if (myData > dataMax) {
      dataMax = myData;
    }
    if (myData < dataMin) {
      dataMin = myData;
    }
  }
}
