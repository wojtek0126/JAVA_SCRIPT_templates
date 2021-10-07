// 1. What is the difference btw let and var?
// var and let are both used for variable declaration in javascript
// but the difference between them is that var is function scoped and let is block scoped.
// The main difference is scoping rules. Variables declared by var keyword are scoped to the immediate 
// function body (hence the function scope) 
// while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).
// The reason why let keyword was introduced to the language was
// function scope is confusing and was one of the main sources of bugs in JavaScript.
// While variables declared with var keyword are hoisted (initialized with undefined before the code is run) 
// which means they are accessible in their enclosing scope even before they are declared:
// let variables are not initialized until their definition is evaluated. 
// Accessing them before the initialization results in a ReferenceError. 
// Variable said to be in "temporal dead zone" from the start of the block until the initialization is processed.
// At the top level, let, unlike var, does not create a property on the global object:
// In strict mode, var will let you re-declare the same variable in the same scope while let raises a SyntaxError.
// let can also be used to avoid problems with closures.
//  It binds fresh value rather than keeping an old reference as shown in examples below.
// There are still some browsers that don't support let at all :
// https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

// calling x after definition
var x = 5;
document.write(x, "\n");

// calling y after definition 
let y = 10;
document.write(y, "\n");

// calling var z before definition will return undefined
document.write(z, "\n");
var z = 2;

// calling let a before definition will give error
document.write(a);
let a = 3;


// 2. What is prototype in javascript?
// 3. What is a closure?
// 4. Explain the event loop in node.js?
// 5. What is the meaning of the keyword this in javascript?
// 6. What is node.js?  ----for node interview
// 7. What is the difference btw null and undefined?
// 8.  Explain settimeout in javascript?
// 9. What is the difference btw javascript and node.js?  ----for node interview
// 10. Explain what is promise and what is a callback?