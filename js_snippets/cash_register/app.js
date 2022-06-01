/* ANCHOR cash register
Description:
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

*/

/* NOTE Planning Area / Psuedo-code / Description / Explanation

get the quotient of change and the prices
truncate the quotient
  minus (prices[i][1] * 2) from change
  push (prices[i][1] * 2) to obj.change
repeat for next item
*/

/* NOTE Realizations / Mistakes / Corrections / Concepts Learnt


  WORKING COPY
  prices.forEach((elem, i) => {
    let quotient = +(change / elem[1]).toFixed(2);
    if (quotient >= 1) {
      change -= elem[1] * Math.trunc(quotient);
      obj.change.push([elem[0], (elem[1] * Math.trunc(quotient))]);
    }
  });


  checks if (the quotient is larger than the amount in the cid)
  quotient < reversed[i][1] / prices[i][1]



    NOTE COMMENTED VERSION
  prices.forEach((elem, i) => {
    // quotient is how many times elem goes into change e.g. 0.25 into 0.6 = 2.4 , it then gets the decimal removed since its irrelevant.
    let quotient = +(change / elem[1]).toFixed(2);
    console.log(quotient);
    //if elem goes into change at least once ^ 2 is greater than 1, meaning elem went into change twice.
    if (quotient >= 1) {
      // minus elem times quotient, which is equal to the amount that went into elem, the remainder gets calulated on next iteration.
      change -= elem[1] * Math.trunc(quotient);
      // add the price times the quotient to the obg.change array, which is how much of that coin is being given as change/
      obj.change.push([elem[0], (elem[1] * Math.trunc(quotient))]);
    }
  });






[
  [ 'PENNY', 0.01 ],
  [ 'NICKEL', 0.05 ],
  [ 'DIME', 0.1 ],
  [ 'QUARTER', 0.25 ],
  [ 'ONE', 1 ],
  [ 'FIVE', 5 ],
  [ 'TEN', 10 ],
  [ 'TWENTY', 20 ],
  [ 'ONE HUNDRED', 100 ]
]
  cid.reverse().forEach((elem, i) => {
    if (elem[1] % change != 0) {
      console.log(elem[0]);
      console.log(+(change / prices[i][1]).toFixed(2));
    }
  });
*/

function checkCashRegister(price, cash, cid) {
  const prices = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  let obj = {
    status: "",
    change: [],
  };

  let change = cash - price;
  // make a deep copy of cid
  let reversed = JSON.parse(JSON.stringify(cid)).reverse();
  prices.forEach((elem, i) => {
    // quotient is how many times elem goes into change e.g. 0.25 into 0.6 = 2.4 , it then gets the decimal removed since its irrelevant.
    let quotient = +(change / elem[1]).toFixed(2);
    //if elem goes into change at least once ^ 2 is greater than 1, meaning elem went into change twice.
    if (quotient >= reversed[i][1] / prices[i][1]) {
      quotient = reversed[i][1] / prices[i][1];
    }
    if (quotient >= 1) {
      // minus elem times quotient, which is equal to the amount that went into elem, the remainder gets calulated on next iteration.
      change -= elem[1] * Math.trunc(quotient);
      // add the price times the quotient to the obg.change array, which is how much of that coin is being given as change/

      //
      if (elem[1] * Math.trunc(quotient) < change) {
        obj.status = "INSUFFICIENT_FUNDS";
        return obj;
      } else {
        reversed[i][1] = 0;
        if (reversed.every((val) => val[1] === 0)) {
          obj.status = "CLOSED";
          obj.change = cid;
          return obj;
        }
        obj.status = "OPEN";
        obj.change.push([elem[0], elem[1] * Math.trunc(quotient)]);
      }
    }
  });
  return obj;
}
// console.log(
//   checkCashRegister(19.4, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// ); // should return an object.

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// ); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// ); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // should return {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // should return {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
