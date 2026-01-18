import User from './User'
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component{
constructor(props){
    super(props);
    // console.log("Parent constructor");
}

componentDidMount(){
    // console.log("Parent did mount");
    this.timer = setInterval(()=>{
        console.log("hello");
    },1000);//This will run even if we are not on about page even if we go to Home page, contact page
    //and when we come back to about from another page it will increase the times(twice,thrice and so on)
    //so we need cleanup it in componentWillUnmount, so it will go away when we visit another page
}

componentWillUnmount(){
    clearInterval(this.timer);
}

//same thing goes for useEffect
// useEffect(()=>{
    // const timer = setInterval(()=>{
    //     console.log("hello");
    // },1000);//This will run even if we are not on about page even if we go to Home page, contact page
    //and when we come back to about from another page it will increase the times(twice,thrice and so on)
    //so we need cleanup it in return(), so it will go away when we visit another page

    //return()=>clearInterval(timer)

// },[])

render(){
    // console.log("Parent render");
    return(
       <div>
         <h1>About</h1>             
         <h2>This is About Page</h2>
          {/* <User name={"John(function)"} location={"Faridabad"}/> */}
         <UserClass name={"First"} location={"Faridabad"}/>
         {/* <UserClass name={"Second"} location={"Faridabad"}/> */}
        </div> 
    )
}

}

/*
Why? Reason in notes
    In console
    Render Phase
    Parent Constructor
    Parent render
    First Child Constructor
    First Child Render
    Second Child Constructor
    Second Child Render
    Commit Phase
    First Child did Mount
    Second Child did Mount
    Parent Did Mount
 */


// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is About Page</h2>
//             {/* <User name={"John(function)"} location={"Faridabad"}/> */}
//             <UserClass name={"John(Class)"} location={"Faridabad"}/>
//         </div>
//     ) 
// }

export default About;