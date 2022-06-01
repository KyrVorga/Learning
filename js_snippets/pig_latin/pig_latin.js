// ANCHOR Pig Latin
/*

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  if (str.search(/[aeiou]/i) == 0) {
    return str.concat("way");
  } else {
    const pattern = /[^aeiou]+/i;
    let first = str.slice(0, str.match(pattern)[0].length);
    let last = str.slice(str.match(pattern)[0].length);
    return last.concat(first, "ay");
  }
}

console.log(translatePigLatin("consonant"));

console.log(translatePigLatin("california")); //should return the string aliforniacay.

console.log(translatePigLatin("paragraphs")); //should return the string aragraphspay.

console.log(translatePigLatin("glove")); //should return the string oveglay.

console.log(translatePigLatin("algorithm")); //should return the string algorithmway.

console.log(translatePigLatin("eight")); // should return the string eightway.

console.log(translatePigLatin("schwartz")); //Should handle words where the first vowel comes in the middle of the word. should return the string artzschway.

console.log(translatePigLatin("rhythm")); //Should handle words without vowels. should return the string rhythmay.
