let string1:string = "apple";
let string2:string = "banana";

console.log(`Is string1 == string2? I predict false`)
console.log(string1 == string2);

console.log(`Is string1 != string2? I predict true`)
console.log(string1 != string2);

console.log(`Is string1 lowercase 'apple'? I predict true`)
console.log(string1.toLowerCase() == 'apple');

console.log(`Is string2 lowercase 'banana'? I predict true`)
console.log(string2.toLowerCase() == 'banana');

let number1 = 10;
let number2 = 5;
console.log(`Is number1 == number2? I predict false`) 
console.log(number1 == number2);

console.log(`Is number1 != number2? I predict true`) ;
console.log(number1 != number2);

console.log(`Is number1 > number2? I predict true`) 
console.log(number1 > number2);

console.log(`Is number1 < number2? I predict false`) 
console.log(number1 < number2);

console.log(`Is number1 <= number2? I predict false`) 
console.log(number1 <= number2);

console.log(`Is number1 >= number2? I predict true`) 
console.log(number1 >= number2);

console.log(`Is number1 > number2 and string1 == 'apple'? I predict true`) 
console.log(number1 > number2 && string1 == 'apple');

console.log(`Is number1 < number2 or string2 == 'banana'? I predict true`) 
console.log(number1 < number2 || string2 == 'banana');
 
 let array1 = ["apple","banana","orange"]


 console.log(`Is 'banana' is  in the array? I predict true`)
 console.log(array1.indexOf('banana') !== -1);


 console.log(`Is 'grape' is not  in the array? I predict true`)
 console.log(array1.indexOf('grape') === -1);

