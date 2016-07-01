/*Description:

Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value 'Fizz' instead
If the value is a multiple of 5: use the value 'Buzz' instead
If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead */

var fizzify = fizzbuzz;
function fizzbuzz(n) {
  var fizzy = [];                 // create empty array to push result into
  for (i = 1; i < n + 1; i++) {
    fizzy.push(i);
  }
  for (i = 0; i < fizzy.length; i++) {
    if (fizzy[i] % 3 === 0 && fizzy[i] % 5 !== 0) {         // New loop goes through array to replace numbers divisble by 3
      fizzy[i] = "Fizz";
    }
    else if (fizzy[i] % 5 === 0 && fizzy[i] % 3 !== 0) {    // and then by 5
      fizzy[i] = "Buzz";
    }
    else if (fizzy[i] % 3 === 0 && fizzy[i] % 5 === 0) {    // and then by both 3 and 5 replacing the digits with Fizz, Buzz, or Fizzbuzz
      fizzy[i] = "FizzBuzz";
    )
  }
  return fizzy;
}
