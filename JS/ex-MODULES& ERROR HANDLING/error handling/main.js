//JavaScript errors and error handling
//try,catch = run time errors
/*  in this case it give a result.
variable = "dave";
console.log(variable);*/

// referenceError = variable is not defined
/*"use strict";
variable = "dave";
console.log(variable);*/

try {
  console.log("Start of try runs");

  unicycle;

  console.log("End of try runs -- never reached");
} catch (err) {
  console.log("Error has occured: " + err);
} finally {
  console.log("This is always run");
}

console.log("...Then the execution continues");

//("use strict");
//const variable = "dave";
//console.log(variable);

//syntaxError
//Object. . create()

//TypeError = assignment to the same constant variable/ use function that is not for this type of data.
/*const name = "dave";
name = "Joe";*/

const name = "Dave";
const makeError = () => {
  try {
    const name = "Joe";
    throw new Error("This is an error!");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("... finally");
  }
};

//RangError:A number "out of range" has occurred
//URIError:An error in encodeURI() has occurred
//EvalError:An error has occurred in the eval() function
