//Doing the examples for Eloquent JavaScript
console.log("You are a rockstar.");
function findSolution(target) {
  function find(start, history) {
    if (start == target) {
      console.log("IF: start: " + start + " history: " + history + " target: " + target);
      return history;
    }
    else if (start > target) {
      console.log("ELSE IF: start: " + start + " history:" + history + " target:" + target);
      return null;
    }
    else {
      console.log(find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)"));
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
      }
  }
  return find(1, "1");
}

console.log(findSolution(24));


// function find(start, history)
//
//
// function findSolution(target) {
//   function find(1, "1") {
//     if (start == target)
//       return history;
//     else if (start > target)
//       return null;
//     else
//       return find(1 + 5, "(" + "1" + " + 5)") ||
//              find(1 * 3, "(" + "1" + " * 3)");
//   }
//   return find(1, "1");
// }
//
// console.log(findSolution(24));
// // → (((1 * 3) + 5) * 3)


// Exercise 1
// var ampersand = "#"
// for (var i="#"; i.length<=7; i+="#") {
//   console.log(i);
// }

// Exercise 2
// var word = ""
// for(i=0; i<100; i++) {
//   var word = "";
//   if ((i+1) % 3 == 0) {
//     word += "Fizz";
//   }
//   if ((i+1) % 5 == 0) {
//     word += "Buzz";
//   }
//   console.log(word || i+1);
// }

// Exercise 3
// var word = "";
// var size = 8
// for(i=0; i<size; i++) {
//   for(j=0; j<size; j++) {
//     if((i+j) % 2 == 0) {
//       word += "#"
//     }
//     else {
//       word += " "
//     }
//   }
//   word += "\n"
// }
// console.log(word);
