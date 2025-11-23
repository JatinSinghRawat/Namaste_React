import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement => React Element-JS Object => HTML Element(render)

// const heading = React.createElement("h1",{id:"heading"},"I am a h1 tag");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//JSX => React.createElement => React Element-JS Object => HTML Element(render)
//Babel job is to convert JSX into React.createElement

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const jsxHeading = (
// <h1 
// id="heading">I am a h1 tag
// </h1>);
// To write multiple line of jsx we need to use round brackets.
// console.log(jsxHeading);
// root.render(jsxHeading); jsxHeading is a react element as it will got converted to react element later on by babel

//React component
// A React component is an independent, reusable building block in a React application that defines what gets displayed on the user interface (UI). 
// Components are essentially JavaScript functions or classes that return React elements, which describe the UI.
//There are 2 types of components
//1. Class based components = Old way of creating react component.
//2. Functional components = New way of creating react component.

//React Functional Component.
//It is a normal JavaScript function but the function name is always in capital letter and it will return some JSX code or a react element.
// const HeadingComponent = () =>{
//     return <div id='container'>
//         <h1 className = "heading">Namaste React 🚀</h1>
//     </div>
// };

//since this is an arrow function so, we can remove the return statement as this will be considered as a single line.

const Title = () => (
   <h1 className='title'>Namaste React🚀</h1>
);


const HeadingComponent = () =>(
    <div id='container'>
            <Title/>
        <h1 className = "heading">Namaste React Functional Component </h1>
    </div>
);

//The wrapping up of one react component into another react component is called  Component composition.

const root = ReactDOM.createRoot(document.getElementById('root'));
//So react component is different from react element so, we have to render it differently.
root.render(<HeadingComponent/>);


