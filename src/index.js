/*
  On line 5 we are importing the React library. By importing this library we declaring that this is file that is using React JS
  On line 6 we are importing the ReactDOM library. This library allows us to create our VirtualDOM for the application and gives us the render method
*/
import React from "react";
import ReactDOM from "react-dom";

/*
  This is a plain javascript object that contains all the styles
  We will use it for our inline styles and can re-use as often as we like because it's assigned to a variable 
*/
const mainStyles = {
  color: "#BF211E", // notice that the values are in a string
  fontFamily: "Comic Sans MS", // notice that we are using camelCase for the property names
  fontSize: "x-large",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

/*
  Here we are creating a functional component
  Unlike normal javascript functions, the name of it must begin with a capital letter
  With React components we can create custom properties that belong to our component called props
  By default props is an object and can contain as many key/value pairings as we want
  The props object for this example will have 3 properties: name, age and likes
*/
function Biography(props) {
  return (
    <main style={mainStyles}>
      {/* 
        <main> will be the container for our Biography component and we are passing our mainStyles object from line 12 to the attribute style
        The value of the style attribute must be an object
      */}
      <p>Hi, my name is {props.name}</p>
      {/* 
        Because props is an object, we can access each property using dot notation
        In JSX, an expression must be wrapped with curly braces
      */}
      <p>I am {props.age} years old</p>
      <p>{props.likes} is my favourite food in the whole world</p>
    </main>
  );
}

/* 
  This is the main function for our app where we will be returning our Biography component
  Instead of calling our functional component like we do with a traditional javascript function (i.e Biography()) we can use like an element
  We can also pass values to our custom properties (props) similarly to how we would pass a value to an attribute on a HTML element
  The properties name, age and likes will automatically be added to our props object and then passed as the parameter to Biography
  The shape of the object will be:

  const props = {
    name: "Tanya",
    age: 19,
    likes: "Pizza"
  }

  So each property becomes a key/value pair
  */
 function App() {
  // Notice that when we pass a number as the value we wrap it with curly braces
  return <Biography name="Tanya" age={19} likes="Pizza" />;
}

/* 
  Using the ReactDOM we imported on line 6 we are calling the render method that belongs to it
  We will be rendering our functional component App using strict mode
  In simple terms we are saying "display our App inside of the div with the id root that is inside of the index.html"
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
