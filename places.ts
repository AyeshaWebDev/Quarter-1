let places:string[] = ["India","NewLand","Murry","Jaddah","Turkey"];
// Original Array
console.log("Original order:");
console.log(places);

// Arranged in Alphabetical order
console.log("\nAlphabetical order (without modifying the original list):");
console.log([...places].sort());

console.log("\nArray is still in its original order:");
console.log(places);

// Reverse Alphabetical Array without changing original one

console.log("\nReverse alphabetical order (without modifying the original list):");
console.log([...places].sort().reverse());

console.log("\nArray is still in its original order:");
console.log(places);


// Reverse the original Array
console.log("\nReversed order:");
console.log(places.reverse());

console.log("\nArray is back to its original order:");
console.log(places);
// to back the array in its original order 

console.log("\nAlphabetical order (modified the original list):");
console.log(places.sort());

// original modified in reverse alphabetical order

console.log("\nReverse alphabetical order (modified the original list):");
console.log(places.sort().reverse());
