//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
var quiz = {};

// Question 1: a function called sleepIn
//////////////
// You can sleep in if it is not a weekday or if you are on vacation.
// quiz.sleepIn() => false
// quiz.sleepIn({vacation: true}) => true
quiz.sleepIn = function(options) {
	options || (options = {vacation: false});
	var day = new Date();
	day = day.getDay();
	return (day === 0 || day === 6 || options.vacation);
};

// // Question 2: function called nearHundred
// //////////////
quiz.nearHundred = function(number) {
	if (number >=0 || number <= 0){ 
	// could also do if(typeof(number) === "number")
		if ((number >=90) && (number <= 99) {
			return true;
		} else {
			return false;
		};
	} else {
		return "Error: Please enter a number!";
	};
};
// // If the number is between 90 and 99, the result is true;
// // If it is 89 or below, it is false.
// // quiz.nearHundred(52) => false
// // quiz.nearHundred(93) => true
// // quiz.nearHundred('two') => Error: Please enter a number!

// // Question 3: a function called missingChar
// //////////////
 quiz.missingChar = function(string, index){
 	if (string.class !== String) {
 		return "Error: Please enter a string!";
 	} else {
 		return string.substr(0, index) + string.substr(index+1,index.length);
 	}
 }
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"