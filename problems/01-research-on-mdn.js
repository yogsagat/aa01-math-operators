/*
Research how to turn a number into a string on MDN. Then change the
`turnNumIntoStr` function to convert the `num` parameter into a string and
return the string.

Optional: Research what the `typeof` keyword does on MDN.
*/

/*
code from W3 Academy
let num = 15;
let text = num.toString();

*/

//I'll impliment that code into the function below.

function turnNumIntoStr(num) {
  return num.toString();

}

let hundred = turnNumIntoStr(100);
console.log(hundred);       //=> '100'
console.log(typeof hundred) //=> 'string


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = turnNumIntoStr;
