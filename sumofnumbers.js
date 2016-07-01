/* Description:

Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

Note! a and b are not ordered! */

function GetSum(a,b)
{
  var low = Math.min(a,b);              // Use Math.min to find lowest number in provided range
  var high = Math.max(a,b);             // Use Math.max to find highest number in provided range
  var total = 0;
   if (low !== high) {                  // If numbers aren't equal, start loop to add them together
     for(i = low; i < high +1; i++) {   // starting at low and ended loop after high
       total += i;
     }
   }
  else {
    return low;
  }
  return total;
}
