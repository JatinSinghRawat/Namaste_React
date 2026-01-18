import React from "react";
import {Component} from "react";//import via destructuring

//class UserClass extends Component{}
class UserClass extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     count:0,
        //     count2:2
        // }
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default"
            }
        }
        
        console.log(this.props.name +"Child constructor");
    }//We can do this without the constructor as javascript create it automatically

    async componentDidMount(){
    // console.log(this.props.name +"Child did mount");
    //We make API call in this method
    const data = await fetch('https://api.github.com/users/JATINSINGHRAWAT')
    const json = await data.json();
    this.setState({
        userInfo:json
    })
    console.log(this.state.userInfo.name+"Child did mount");
    }

    componentDidUpdate(){
        console.log("component updated with api data");
    }

    componentWillUnmount(){
        //called when page is removed from UI or unmounted
        console.log("component will unmount called");
    }

    render(){
        console.log(this.props.name + "Child render")
        // const {name,location}=this.props;
        // const {count,count2} = this.state;
        const {name,location,avatar_url}=this.state.userInfo;
        return(
        <div className="user-card">
            {/* <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1> */}
            {/* <button onClick={()=>{
                //NEVER UPDATE STATE VARIABLE DIRECTLY
                //this.state.count = this.state.count + 1;never do this.
                this.setState({
                    count:this.state.count + 1,
                    // count2: this.state.count2 +1
                })
            }}>Count Increase</button> */}
            <img src={avatar_url}/>
            <h3>Name:{name}</h3>
            <h3>Location:{location}</h3>
            <h3>Age:46</h3>
        </div>
        );
    }
}

// class UserClass extends React.Component{
//     render(){
//         const {name,location}=this.props;
//         return(
//         <div className="user-card">
//             <h3>Name:{name}</h3>
//             <h3>Location:{location}</h3>
//             <h3>Age:46</h3>
//         </div>
//         );
//     }
// }

export default UserClass


/*
------MOUNTING-----
constructor(with dummy data) called
render(with dummy data) called
<HTML Dummy>
component Did Mount called
<API CALL>
----UPDATING-----
<this.setState>-> State variable is updated
render(with Api data) called
<HTML with api data>
component Did update called
*/