function spinalCase(str) {
  const pattern = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
  let newStr = str.slice();
  let index = newStr.search(pattern);
  while (index != -1) {
    let firstHalf = newStr.slice(0, index);
    let middle = newStr.slice(index, index + 1);
    let secondHalf = newStr.slice(index + 1);
    newStr = firstHalf.concat(" ", middle.toLowerCase(), secondHalf);
    index = newStr.search(pattern);
  }
  return newStr.trim().replace(/[^abcdefghijklmnopqrstuvwxyz]+/g, "-");
}

// spinalCase("This Is Spinal Tap"); //should return the string this-is-spinal-tap.
// spinalCase("thisIsSpinalTap"); //should return the string this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show"); //should return the string the-andy-griffith-show.
// spinalCase("Teletubbies say Eh-oh"); //should return the string teletubbies-say-eh-oh.
// spinalCase("AllThe-small Things"); // should return the string all-the-small-things.
