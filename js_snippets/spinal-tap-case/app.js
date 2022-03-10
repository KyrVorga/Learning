function spinalCase(str) {
  const regex = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
  let index;
  while (str.search(regex) != -1) {
    index = str.search(regex);
    str = [str.slice(0, index).toLowerCase(), str.slice(index)].join("");
    str = [str.slice(0, index), " ", str.slice(index)].join("");
    console.log(index, str);
  }
  // get index of cap, replace with (' ', str.at(index))
  return console.log(str);
}

spinalCase("This Is Spinal Tap"); //should return the string this-is-spinal-tap.
spinalCase("thisIsSpinalTap"); //should return the string this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show"); //should return the string the-andy-griffith-show.
spinalCase("Teletubbies say Eh-oh"); //should return the string teletubbies-say-eh-oh.
spinalCase("AllThe-small Things"); // should return the string all-the-small-things.
