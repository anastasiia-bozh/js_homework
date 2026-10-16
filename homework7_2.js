const re = /^[^aA]{6,}$/;

console.log(re.test("Wonderful")); // true 
console.log(re.test("Joyful")); // true 

console.log(re.test("Happiness")); // false 
console.log(re.test("Time")); // false 
console.log(re.test("Task")); // false 
console.log(re.test("Apple")); // false