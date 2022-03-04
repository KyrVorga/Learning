function whatIsInAName(collection, source) {
  const arr = [];

  let newArr = collection.filter((item) => item == source);

  return newArr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

whatIsInAName(
  [
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, bat: 2, cookie: 2 },
    { bat: 2 },
  ],
  { apple: 1, bat: 2 }
);
