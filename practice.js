/* <div id="parent">
    <div id="child">
        <h1>
            i am h1 tag
        </h1>
        <h2>
            i am h2 tag
        </h2>
    </div>
    <div id="child2">
        <h1>
            i am h1 tag
        </h1>
        <h2>
            i am h2 tag
        </h2>

    </div>

</div> */

// using react with cdn link. npm not used.

// const parent = React.createElement("div", { id: "Parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "This is Namaste React"), React.createElement("h2", {}, "I am an h2 tag")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")])]);

// // const heading = React.createElement("h1", { id: "heading" }, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// using npm

import React from "react";
import ReactDOM from "react-dom/client";
// jsx - is not html in javaScript
//react element
const jsxHeading = <h1 id="heading">namaste react using jsx</h1>;
//react components

// class based components - OLD
// functional components - NEW

// React functional Component

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     this is second component
//   </h1>
// );

const elem=<span> React element</span>
const Title =  (
  <h1 className="head" tabIndex="5">
    {/* element inside element */}
    {elem}
    this is element
    {/* component inside element */}
    {/* <HeadingComponent/> */}
  </h1>
);




const number = 10000;

const HeadingComponent = () => (
  <div id="container">
    {/* component composition */}
    {/* 1. <Title/>     */}
     {/* 2. <Title/> <Title/> <Title/> <Title/> can go an number of times */}
     {/* 3. {Title()} */}
     {/* above 1.  2. and  3. is same */}

     {/* we can inject any javaScript inside jsx */}
    {/* <h2>{number}</h2>  */}

    {/* react element inside jsx */}

    {/* {Title}  */}

    <h1>Namaste React functional Component</h1>
  </div>
);

// another way without return
// const headingComponent=()=>(
//      <h1>Namaste React functional Component</h1>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent/>); // syntax to render react functional component