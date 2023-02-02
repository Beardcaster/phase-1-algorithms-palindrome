function isPalindrome(word) {
  const wordArray = Array.from(word);

  console.log(wordArray);

  let i = 1;
  let testArray = [];
  let testWord = "";

  while(i <= wordArray.length){
    
    testArray.push(wordArray[wordArray.length - i]);
    testWord = testWord + `${wordArray[wordArray.length - i]}`
    i++;
  }

  console.log(testArray);
  console.log(testWord);
  
  if(word === testWord){return true;
  } else {return false;}

}

/* 
  get word
  create array from letters in word -> wordArray
  create new Array using letters from wordArray loaded backwards -> testArray
  if wordArray = testArray then word isPalindrome

  ended up needed to restore testArray to a string for comparison at end of function.
*/

/*
  loading the word into an array and using a function to reverse it then comparing the two arrays should confirm whether or not it is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("xrtsstrx")); //does it work with even length strings

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tacocat"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("beachball"));
}

module.exports = isPalindrome;
