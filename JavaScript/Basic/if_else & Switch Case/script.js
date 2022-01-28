// Scenario: Suppose a User wants to check the Stars based on his/her Ratings in Competition.

const readLineSync = require("readline-sync");
const ratings = readLineSync.question("Enter your Rating: ");

// --------------------- if/else statements --------------------------
function starsCount(ratings) {
  if (ratings <= 1399) {
    oneStar();
  } else if (ratings > 1399 && ratings < 1600) {
    twoStar();
  } else if (ratings >= 1600 && ratings < 1800) {
    threeStar();
  } else if (ratings >= 1800 && ratings < 2000) {
    fourStar();
  } else if (ratings >= 2000 && ratings < 2200) {
    fiveStar();
  } else if (ratings >= 2200 && ratings < 2450) {
    sixStar();
  } else if (ratings >= 2500) {
    sevenStar();
  } else {
    console.log("Enter Valid Input");
  }
}

const oneStar = () => console.log("1*");
const twoStar = () => console.log("2*");
const threeStar = () => console.log("3*");
const fourStar = () => console.log("4*");
const fiveStar = () => console.log("5*");
const sixStar = () => console.log("6*");
const sevenStar = () => console.log("7*");

// --------------------- Switch Case ---------------------
function starsCount(ratings) {
  switch (true) {
    case ratings <= 1300:
      oneStar();
      break;

    case ratings > 1399 && ratings < 1600:
      twoStar();
      break;

    case ratings >= 1600 && ratings < 1800:
      threeStar();
      break;

    case ratings >= 1800 && ratings < 2000:
      fourStar();
      break;

    case ratings >= 2000 && ratings < 2200:
      fiveStar();
      break;

    case ratings >= 2200 && ratings < 2450:
      sixStar();
      break;

    case ratings >= 2500:
      sevenStar();
      break;

    default:
      console.log("Enter valid input");
  }
}

starsCount(ratings);

// // ***********************************************************************************

const travel = () => console.log("Travel...");
const shopping = () => console.log("Shopping...");
const watchTv = () => console.log("Watch Tv...");
const review = () => console.log("Watch TV...");

// ----------------------- Key-Value ----------------------
let output = {
  A: travel,
  B: shopping,
  C: watchTv,
  D: review,
};

function action(ranking) {
  let strategy = output[ranking];
  strategy();
}

action("B");

// ----------------------- Map ------------------------
let outcome = new Map([
  ["A", travel],
  ["B", shopping],
  ["C", watchTv],
  ["D", review],
]);

function action(ranking) {
  let result = outcome.get(ranking);
  result();
}

action("C");
