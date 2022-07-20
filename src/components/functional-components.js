import React from "react";

function FunctionalComponents() {
    return (
        <div className="App">
            <Person name= "Tom" age= "32"/> 
            <Person name= "Alice" age= "27"/>
        </div>
    ); /*values below are being passed here */
}
const Person = (props) => {
    const {name, age} = props;
    return (
        <div>
            <h1>{name}</h1>
            <h2>Person Age: {age}</h2>
        </div>
    );    
} /*this is the functional component; Person Name is a 
function that returns some JSX; you can still have JS
logic, but you get rid of state and lifecycle methods
so it's more trimmed down; the majority of components
are functional components, but if you need a state 
component
you can use react.component, and extend a class */ 
export default FunctionalComponents;

/*extending React.Component is good when we need to store
state, but sometimes, we don't need to set and store state 
and lifecycle methods; they don't store state - they only 
use props; functional or stateless components - aka 
functional components - are functions that return some 
JSX and we can use it just like other components we created
so far */

/*spread operator allows us to take an iterable object and 
spread it out over anything that would accept multiple 
values; if it's an object literal or array and anywhere 
that multiple values are expected we can pass in the spread
operator and it counts as those multiple values;  */
function doSomething(a, b, c) {
    console.log (a, b, c); 
}

let array = [5, 6, 7];
doSomething(...array);

let obj1 = {
    name: "o1",
    value1: 1,
    value2: 2
};
let clone = {...obj1, name: "o2"}
console.log(clone);

/*if there are a bunch of values you needed to copy, and 
you want to change a few of them, you can use the spread 
operator inside of another object literal, and explicitly 
state all of the properties you want to update yourself; 
spread operators are used frequently in React, especially 
with state and props*/

/*destructuring allows us to take an array or object and 
break the values apart and assign them to distinct variables;
used often with imports; a module may export multipl classes 
and functions and we need to import specific ones and 
assign them to variables all in one line  */

 let array2 = [3, 5, 8, 9];

 let object = { 
    propertyOne: "p-one",
    propertyTwo: "p-two",
    propertyThree: "p-three"
 };

 /*destructure the above with the below */
 let  [a, b, c] = array2 /*this will, by position, assign the 
 values in the array to "a" and "b" -- "a" will be 3 and 
 "b" will be 5 */
 console.log(b); 
 console.log(c); /*we can destructure the array and assign 
 them to the distinct variables; same works with objects,
 but we need to use the names*/

 let {propertyOne, propertyThree} = object;

 console.log(propertyThree); /*p-three is assigned to the 
 destructured value of the object */

 import {Component} from 'react'; /*here we can use the component
  */
 import React, {Component} from 'react';

 