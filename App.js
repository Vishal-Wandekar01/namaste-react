/**
 *
 * <div id="parent">
 *    <div id="child">
 *       <h1>I am h1</h1>
 *       <h1>I am h2</h1>
 *    </div>
 *
 *    <div id="child2">
 *       <h1>I am h1</h1>
 *       <h1>I am h2</h1>
 *    </div>
 * </div>
 *
 *
 *
 */

//only one children
/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "xyz" }, "This is the nested HTML Element")
  )
);
*/

// more then one children...convert it into the array

const parent2 = React.createElement("div", { id: "parent2" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is the nested HTML Sibling 1"),
    React.createElement("h2", {}, "This is the nested HTML Sibling 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is the nested HTML Sibling 1"),
    React.createElement("h2", {}, "This is the nested HTML Sibling 2"),
  ]),
]);

//but this is very complex...the solution is the JSX...This is the last time we are using the react.createElement...This above is all core React
/*
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React! Heyyyyy"
); // we have created the react element it's nothing but the normal javascript object

*/

// console.log(heading); //object
//console.log(parent);
//console.log(parent2);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//root.render(parent);
root.render(parent2);// render the parent2 object and put it in to the root which is available in index.html

