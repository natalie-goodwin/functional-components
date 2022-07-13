import React from "react";

function FunctionalComponents() {
    return (
        <div className="App">
            <Person name= "Tom" age= "32"/>
            <Person name= "Alice" age= "27"/>
        </div>
    );
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
are functional components, but if you need a state component
you can use react.component, and extend a class */ 
export default FunctionalComponents;

/*extending React.Component is good when we need to store
state, but sometimes, we don't need to set and store state and
lifecycle methods; they don't store state - they only use props;
functional or stateless components - aka functional components - 
are functions that return some JSX and we can use it just like other components
we created so far */