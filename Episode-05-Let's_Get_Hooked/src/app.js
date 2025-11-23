import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body'


//Types of Import/Export
// 1. Default export
// A file can have no more than one default export. This type of export is commonly used when a file exports only one component.

// import React from 'react';

// const Message = () => {
//   return <div>Hello React!</div>;   
// }

// export default Message;

// You can import the Message component in another file like this:

// import Message from "./Message";
// Note that the name Message is arbitrary and can be changed to anything you like

// import HelloMessage from "./Message";


// 2. Named Exports
// A file can have as many named exports as you like. Named exports are used when a file exports multiple components or values

// export function add(a, b) {
//   return a + b;
// }

// export function subtract(a, b) {
//   return a - b;
// }
// To use these functions in another file, we need to import them using the same names and curly braces:

// import React from 'react';
// import { add, subtract } from './utils'; // import the utility functions

// function App() {
//   return (
//     <div>
//       <p>{add(2, 3)}</p>
//       <p>{subtract(5, 2)}</p>
//     </div>
//   );
// }

// export default App;
// Alternatively, we can use the * symbol to import all the named exports from a file as an object, which is very similar to other languages like python and java

// import React from 'react';
// import * as utils from './utils'; // import all the named exports as an object

// function App() {
//   return (
//     <div>
//       <p>{utils.add(2, 3)}</p>
//       <p>{utils.subtract(5, 2)}</p>
//     </div>
//   );
// }

// export default App;

const AppLayout = () =>{
    return(
        <div className='main-container'>
         <Header/>
         <Body/>
        </div>

    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);