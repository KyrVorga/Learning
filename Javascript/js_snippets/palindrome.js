function checker(word) {
	let reversed = word.split('').reverse().join('');
  if (word === reversed) {
  	console.log('true');
  } else {
  console.log('false');
  }
}

checker('level');

function palindrome(word) {
	let reversed = word.split('').reverse().join('');
  if (word === reversed) {
  	return true;
  } else {
  return false;
  }
}

palindrome('level');

function palindrome(str) {
  // let reversed = str.split('').reverse().join('');
  // if (str == reversed) {

  // }
  let cleaned = str.trim().toLowerCase().split(/\W/g).join('').replace(/_/g, '')
  let reversed = cleaned.split('').reverse().join(''); 
  console.log(cleaned, reversed)
  return reversed === cleaned;
}

palindrome("race car");



function palindrome(str) {
  // let reversed = str.split('').reverse().join('');
  // if (str == reversed) {

  // }
  str.repla
  let cleaned = str.trim().toLowerCase().split(/\W/g).join('').replace(/_/g, '')
  let reversed = cleaned.split('').reverse().join(''); 
  console.log(cleaned, reversed)
  return reversed === cleaned;
}

palindrome("race car");



function palindrome(str) {
  let cleaned = str.replace(/[_/ ,.:()-]/g , '').toLowerCase();
  let reversed = cleaned.split('').reverse().join('');
  return reversed === cleaned;
}

palindrome("A man, a plan, a canal. Panama");
palindrome("_eye");
palindrome("0_0 (: /-\ :) 0-0");