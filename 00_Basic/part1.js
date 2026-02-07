import React from "react";
import ReactDOM from "react-dom/client";

//react.createElement == > object ==> html element(render)
//this is using a core react
const heading = React.createElement("h1",
    {id:"heading"},
    "Namaste React"
)
// jsx ==> babel transpiles it to react.createElement ==> react Element - js object => HtmlElement (render)
//  creating element using jsx
const  jsxHeading = <h1 id= "heading">Namaste react using jsx</h1> 
//jsxHeading is a react element
//jsx is traspiled before reaching to the java script done by parcel inside parcel done by babel

//react element
const  jsxHeading2 = (<h1 className = "head" tabIndex={5}>
    Namaste react using jsx
    </h1> )


//functional component
const HeadingComponent = () => {
    return <h1>This is a functional component</h1> // we can use return or we cannot use it both are same 
}

//compontnt inside component => functional composition----

const Title = () => (
  <h1 id="title">Namaste React 🚀</h1>
);

const HeaderComponent1 = () => (
  <div id="container">
    <Title />  {/* This is Component Composition */}
    <h2>Learning Chapter 03</h2>
  </div>
);

//creating js code inside jsx

const number = 10000;

const HeadingComponent2 = () => (
  <div id="container">
    {/* This is a JS expression inside JSX */}
    <h2>{number}</h2> 
    <h2>{10 + 20}</h2>
    {console.log("I am a JS code inside JSX!")}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("roott"));

root.render(<HeaderComponent1/>)
