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
