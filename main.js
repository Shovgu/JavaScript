// First exercise
console.log("First Exercise:");
const sentence = ["sense.", "make", "all", "will", "This"];
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray(sentence));
// Second exercise
console.log("Second Exercise:");
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
function greetAliens(arr) {
  arr.forEach((item) => {
    console.log(
      "Oh powerful " + item + ", we humans offer our unconditional surrender!"
    );
  });
}
greetAliens(aliens);
// Third exercise
console.log("Third Exercise:");
const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "my room",
  "temporary tattoos",
];
const myStuff = ["sweaters", "skateboards", "family-night", "my room"];
function justCoolStuff(arr1, arr2) {
  let arr = [];
  arr1.forEach((item, index) => {
    if (item == arr2[index]) {
      arr.push(item);
    }
  });
  console.log(arr);
}
justCoolStuff(coolStuff, myStuff);
// Fourth exercise
console.log("Fourth Exercise:");
const meal = [
  { name: "arugula", source: "plant" },
  { name: "tomatoes", source: "plant" },
  { name: "lemon", source: "plant" },
  { name: "olive oil", source: "plant" },
];
const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
];
function isTheDinnerVegan(arr) {
  for(let i=0;i<arr.length;i++){
    if (arr[i].source == "plant") {
      return true;
    } else {
      return false;
    }
  };
}
console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));