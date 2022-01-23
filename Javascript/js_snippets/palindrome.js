function checker(word) {
	let reversed = word.split('').reverse().join('');
  if (word === reversed) {
  	console.log('true');
  } else {
  console.log('false');
  }
}

checker('level');
