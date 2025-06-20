//React is a library developed by facebook developers which is used to build front end application, react is called library because it can be applied
//to a portion of application unlike framework.


//Hello World in react!
// const heading = React.createElement('h1', {id:"heading"}, "Hello World from React!");

// console.log(heading);//It is react element which is an object in javascript with different properties.

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);       

//Nested HTML elements
/*
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
*/

// const parent = React.createElement("div",{id:"parent"},
//                React.createElement("div",{id:"child"},
//                React.createElement("h1",{},"I am h1 tag")
//                )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*
parent will be a javascript object created by react.createElement which will be converted into HTML element that
browser understand with the help of render() function.
Render in React JS is a fundamental part of class components. It is used to display the component on the UI returned as HTML or JSX components. The ReactDOM.render() function takes two arguments, HTML code and an HTML element.

Purpose of render()
React renders HTML to the web page by using a function called render().
The purpose of the function is to display the specified HTML code inside the specified HTML element.
In the render() method, we can read props and state and return our JSX code to the root component of our app.
In the render() method, we cannot change the state, and we cannot cause side effects( such as making an HTTP request to the webserver).
*/

//Nested HTML elements with siblings
/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>   These two(h1,h2) are siblings
    </div>
</div>
We have to create an array of elements in the children.
*/

// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]//array
//     )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
// console.log(parent); 


//Nested HTML elements with siblings
/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>   These two(h1,h2) are siblings
    </div>
    <div id="child2"> (child,child2 are siblings)
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>   These two(h1,h2) are siblings
    </div>
</div>
*/

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]//array
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]//array
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);//React will take control of the root dom and replace everything in the root dom with parent element.
console.log(parent); 
//React root will only work when it is have Id= root if it has class=root it will not work.
//But this look messy and if we have more nested element it will become more and more complex so that's why we use JSX


//Why createRoot not work with className or tagName it only work Idname?
// createRoot expects a direct reference to a single DOM node.                  
// document.getElementById('someId') returns a single HTMLElement object (or null if not found). This is exactly what createRoot needs.
// document.getElementsByClassName('someClass') and document.getElementsByTagName('someTag') 
// return an HTMLCollection (or NodeList), which is an array-like object containing multiple DOM nodes. 
// You can't pass an entire collection to createRoot.

// Suppose I have <div id="root"><h1>I am here!</h1></div> in index.html
// now when I do root.render(parent) it will replace the h1 tag with parent why?
// React works with a "Virtual DOM" – an in-memory representation of your UI. When you call render(), React constructs this virtual tree.
// It then compares this virtual tree with the actual DOM. For the initial render, the actual DOM inside #root is <h1>I am here!</h1>. React sees that its virtual tree (defined by parent) is completely different.
// To make the actual DOM match the virtual DOM, React's "reconciliation" algorithm determines that the most efficient way to achieve this is to remove the existing <h1> and insert the new content represented by parent.

//Why we include script tag in the end of body? not in the head or above in body?
// When the browser encounters a <script> tag in the <head> without defer or async attributes, 
// it pauses HTML parsing and rendering to download, parse, and execute the script. 
// This means your users might see a blank page or an incomplete page for a longer period, negatively impacting perceived loading speed (Time To Interactive).

//  JavaScript often needs to interact with the Document Object Model (DOM) – 
// the structure of your HTML elements. If a script that manipulates the DOM is loaded and executed in the <head>, 
// the DOM elements it's trying to access might not exist yet because the browser hasn't finished parsing the <body>.