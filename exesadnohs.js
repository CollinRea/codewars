function XO(str) {
    var howmanyx = str.match(/x/gi);  // use RegEx to find x's and o's case insenstive
    var howmanyo = str.match(/o/gi);  // and assign to a var to compare
    
    if (howmanyx == null && howmanyo == null) {    // first check for null since .length
      return true;                                 // would return an error on a null value
    }
    else if (howmanyx == null || howmanyo == null) {
      return false;
    }
    else if (howmanyx.length == howmanyo.length) {  // compare the .length of the strings
      return true;
    }
    else {
    return false;
    }
}
