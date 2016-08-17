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
	 		convertedStr = str.toLowerCase().replace(/\s\w/g, function(x){return x[1].toUpperCase();});
	 	}else if(conversionType === "snakecase"){
	 		convertedStr = str.replace(/\s/g, '-').toLowerCase();
	 	}
	return convertedStr;
	}

console.log(caseConvert(["Hello my name is paige"], "snakecase"));
console.log(caseConvert("HELLO my name is paige", "snakecase"));