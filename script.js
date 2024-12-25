function findLargest(a, b, c) {
  // Check which number is the largest
  if (a >= b && a >= c) {
    return a; // 'a' is the largest or tied with others
  } else if (b >= a && b >= c) {
    return b; // 'b' is the largest or tied with others
  } else {
    return c; // 'c' is the largest
  }
}

// Prompt the user for input
const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));

// Display the largest number
alert(findLargest(num1, num2, num3));

