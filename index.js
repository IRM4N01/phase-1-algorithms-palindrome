function isPalindrome(word) {
  // Write your algorithm here:
  const reversed = word.split("").reverse("").join("");
  return word === reversed;
}

/* 
  Add your pseudocode here:
  reverse string(word) and store it in "reversed"
  if word is equal to reverse:
  return TRUE
  else:
  return FALSE
*/

/*
  Add written explanation of your solution here:
  first line: splits the word, reseveres it, re-joins it and stores it in 'reversed'
  second line: compares the word to 'reversed' and checks if the word is a palindrome returning TRUE if it is and FALSE if it isn't
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
