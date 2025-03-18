// 1.Extract the last four characters from the string below;"extravaganza"

const word = "extravaganza";
const newWord = word.slice(-4);
console.log(newWord);

//2. Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const fourthIndexOfFood = food.slice(0,4) + "eat " + food.slice(4);
console.log(fourthIndexOfFood);

//3. Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"


const story = "The quick brown fox jumps over the lazy dog";
let theCount = 0;
let brownCount = 0;
let index = 0;
while (index < story.length) {
  if (story.substring(index, index + 3) === "the") {
    theCount++;
    index += 3;
  } else if (story.substring(index, index + 5)=== "brown") {
    brownCount++;
    index += 5;
  } else {
    index++;
  }
}
console.log(`"the" appears ${theCount} times.`);
console.log(`"brown" appears ${brownCount} times.`);

//4. Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const str1 = "The pupils are reading in the library";
const str2 = "The child was sitting on the table before it fell";
const arePosition = str1.includes('are');
console.log(arePosition);
const sittingPosition = str2.includes('sitting');
console.log(sittingPosition);

//5. Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
const string1 = "wonderful";
console.log(string1.toUpperCase());
const string2 = "amazing";
console.log(string2.toLowerCase());
const str3 = "UndERneath";
console.log(str3.toLowerCase());
const inputString = "a wonderful world";
const wordsList = inputString.split(' ');
const outputText = wordsList.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(outputText);