// ANCHOR Pig Latin
/*

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");

translatePigLatin("california"); //should return the string aliforniacay.

translatePigLatin("paragraphs"); //should return the string aragraphspay.

translatePigLatin("glove"); //should return the string oveglay.

translatePigLatin("algorithm"); //should return the string algorithmway.

translatePigLatin("eight"); // should return the string eightway.

translatePigLatin("schwartz"); //Should handle words where the first vowel comes in the middle of the word. should return the string artzschway.

translatePigLatin("rhythm"); //Should handle words without vowels. should return the string rhythmay.
