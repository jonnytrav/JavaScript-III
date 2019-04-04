/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window binding principle means that if you refer to "this" within the global scope it will return the window,
which is a huge object referring to all of the elements making up the window.
* 2. Whenever a function is called after an object using dot notation, the variables which have "this" before the dot will
be replaced by the object beind passed through the function. This is called implicit binding.
* 3. New binding is when you create a JS class which creates objects when you call it. It acts and looks like a function
and creates objects, assigning the "this" properties as the value is passed through the class.
* 4. Explicit binding allows you to choose the object to be passed into a function. Using .apply .bind and .call, the 
function call now allows for a new parameter, the first parameter, to be an object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(window);

// Principle 2
// code example for Implicit Binding
const objectOne = {
    intro: `Hi!`,
    fullGreeting: function(name) {
        console.log(`${this.intro} My name is ${name}`)
    }
}
objectOne.fullGreeting("Jonathan");


// Principle 3
// code example for New Binding
const Person = function(name, age, coder) {
    this.name = name,
    this.age = age,
    this.coder = coder
}
const jonathan = new Person("Jonathan", 21, true);
console.log(jonathan);

// Principle 4
// code example for Explicit Binding
