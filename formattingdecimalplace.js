function twoDecimalPlaces(n) {
  var round = Math.round(n*100)/100; // allow Math.round to round the number up
  return round;                      // then divide by 100 to bring back to 2 decimals
}
