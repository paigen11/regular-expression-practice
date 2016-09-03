var str = ' cat. 896. ?=+. abc1';
var matches = str.match(/...\./g);
console.log(matches);

var str2 = 'man fan can lan dan ran jan ban';
var matches2 = str2.match(/[cmf]an/g);
console.log(matches2);

var str3 = 'dog log bog jog';
var matches3 = str3.match(/[^bj]og/g);
console.log(matches3);

var str4 = 'wizzzzzzup wizzzzup wizup';
var matches4 = str4.match(/z{4,5}up/g); //this will match 4 or 5 zs in a row followed by a up
console.log(matches4);

var kleene = 'aaaabc aabbbbc aacc a';
var matches5 = kleene.match(/a+b*c+/g); //at least 1 a, b is ok but not requires, at least one c
console.log(matches5);

var str5 = '1 file found? 2 files found? 24 files found? No files found.';
var matches6 = str5.match(/\d+ files? found\?/g); //match at least 1 or multiple numbers, match the word file(s),
console.log(matches6);

//if you do str.mathc(/ain/gi) it will search a global, case insensitive search for 'ain'

//you can also write regexps with 'grep'

// Case Convert
// Write a function caseConvert that accepts two arguements. The first is a string, the second is type. 
// If the type is "camelcase" then convert the string to camelcase (each word except the first is capitalized, 
// no spaces). If type is "snakecase" then convert the string to snakecase (each word is separated by a - and all 
// lowercase). As a bonus, accept a string or an array. If it's an array, use .join and proceed accordingly.

function caseConvert(str, conversionType){
 	var convertedStr = '';
 	if(Array.isArray(str) === true){
 		str = str.join();
 	}
 	if(conversionType === "camelcase"){
	 		convertedStr = str.toLowerCase().replace(/\s\w/g, 
	 			function(x){
	 				return x[1].toUpperCase();
	 				// 1. x = ' i' ===> I
	 				// 2. x = ' a' ===> A
	 				// 3. x = ' g' ===> G
	 			});
	 	}else if(conversionType === "snakecase"){
	 		convertedStr = str.replace(/\s/g, '-').toLowerCase();
	 	}
	return convertedStr;
	}

console.log(caseConvert(["Hello my name is paige"], "snakecase"));
console.log(caseConvert("HELLO my name is paige", "snakecase"));
console.log(caseConvert(["Hello my name is paige"], "camelcase"));
console.log(caseConvert("HELLO my name is paige", "camelcase"));

function caseConvert(str, conversionType){
	var stringArray = str.toLowerCase().split(' ');
	var convertedStr = '';
	var temp = [];
	if(conversionType === 'camelcase'){
		temp.push(stringArray[0]);
		for(var i = 0; i < stringArray.length; i++){
			temp.push(stringArray[i].replace(stringArray[i].charAt(0), stringArray[i].charAt(0).toUpperCase()));
		convertedStr = temp.join('');
			}
		}else if(conversionType === 'snakecase'){
			converterdStr = stringArray.join('-');
		}else{
			return 'Please enter a valid string and case option';
		}
		return convertedStr; 
	}


// OPTIONAL: If you want a second challenge together, create a function convertPhone that validates a str and 
// converts it to a valid phone number. You MUST use .match and pass a regular expression. Whatever string is 
// passed in, the function must format it into format: 555-555-5555. Extra numbers are assumed a mistake and 
// dropped. If not enough numbers are provided in the string, return an error message. It is a good idea to 
// make use of join, split, and other array functions as you are likely to hop back and forth.
// BONUS: if not enough numbers are provided, check to see if there are any letters that can be converted to 
// numbers via the number pad mapping.

// Consider the possible inputs:
// 555-555-5555
// (555)555-5555
// 555 555 5555
// 555 555-555
// 1-555-555-5555
// (1)555-555-5555
// 5555555555
// 555-five-55-aebdgtxi;;3tt4greqr6seven
// 5-trumprules-555-5-5-5-5-5-5
// 2798504trumpforprez23587928579428795458792
// 1-800-ninjas-are-cool
// 1900-acdc4life.


function convertPhone(phoneStr){
    //Write some awesome code here!
 	var nums = phoneStr.match(/\d/g).join('').substring(0,10);
 	if(nums.length == 10){
 		// get 3, 3, and 4
 		return nums.replace(/(\d{3})(\d{3})(\d{4})/g, '($1) $2-$3');
 	}else{
 		return 'not enough characters';
 	}
}