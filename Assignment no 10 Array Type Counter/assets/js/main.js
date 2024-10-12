var array = [
  "2",
  2,
  "a",
  3,
  6,
  true,
  false,
  [1, "2", [1, "a", "b", true, false], "a"],
  false,
  true,
];

alert("Nested Arrays:-" + " \n" +array);

var stringCount = 0;
var numberCount = 0;
var booleanCount = 0;

function countTypes(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      stringCount++;
    } else if (typeof arr[i] === "number") {
      numberCount++;
    } else if (typeof arr[i] === "boolean") {
      booleanCount++;
    } else if (Array.isArray(arr[i])) {
      countTypes(arr[i]);
    }
  }
}

countTypes(array);

alert(
  "Result:-" + "\n" +
  "String: " +
    stringCount +
    "\n" +
    "Number: " +
    numberCount +
    "\n" +
    "Boolean: " +
    booleanCount
);
