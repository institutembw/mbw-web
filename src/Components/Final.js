import 'bootstrap/dist/css/bootstrap.css';
import Categories from './Categories'

import React, { useState } from 'react';
import  { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  
} from 'reactstrap';
class  Finals extends Component {
  state = {
    isActive:false  }

 handleShow = ()=>{
   
     var x = document.getElementById("myDIV");
     x.style.display = "none";
     var x = document.getElementById("myDIV1");
     x.style.display = "none";
   
     this.setState({
         isActive:!this.state.isActive      })
         
 }
 handleHide = () =>{
  this.setState({
      isActive: false      })
}
 

 myFunction=()=> {
  
  var x = document.getElementById("myDIV");
  this.setState({isActive:false})
  console.log(x.style.display)
  if (x.style.display === "none") {
    console.log("hii1")
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
  if(x.style.display === "block"){
    x = document.getElementById("myDIV1");
    x.style.display = "block"
  }
  else{
     x = document.getElementById("myDIV1");
    x.style.display = "none"
  }
  
 
}
 myFunction1 =()=> {
  this.setState({isActive:false})
  var x = document.getElementById("myDIV1");
  var y=document.getElementById("myDIV");
  console.log(x.style.display)
  if (x.style.display === "none"  ) {
    console.log("hii2")
    x.style.display = "block";
    // myFunction()
  } else {
    x.style.display = "none";
  }
  if(x.style.display === "block"){
     x = document.getElementById("myDIV");
    x.style.display = "block"
  }
  else{
     x = document.getElementById("myDIV");
    x.style.display = "none"
  }
}

render(){
     
    return (<div className="ui container">


<div class="examples " style={{fontSize:"12px"}} ><div class="ui grid ">

  <div class="one wide column"><a  href="www.google.com" className="active" style={{padding: "20px 0px 0px 0px"}}>
  <img src="./logo.png" style={{height: "30px",
  width: "50px"}} ></img>
    </a></div>

  <div class="two wide column"> <a   style={{float:"left", padding:"10px 0px 0px 0px",color:"blue"}}>
     MBW Institute
    </a></div>

  <div class="one wide column" onClick={this.handleShow}> <a  style={{float:"right", padding: "10px 0px 0px 0px",color:"blue"}}>
     Categories
    </a></div>

    <div class="two wide column"><a  style={{float:"right", padding: "10px 0px 0px 0px",color:"blue"}}>Teach on MBWI</a></div>

  <div class="five wide column" style={{margin:"0px 0px 0px 0px"}}><a   style={{position:"relative",left:"50%", color:"blue"}}>
    <div style={{float:"right",border:'1px solid blue',padding:"5px 10px 5px 5px",width:"100%",height:"40px",borderRadius: "25px"}}>
 <input type="text" id="search" placeholder="Search..." style={{padding:"5px 10px 5px 5px",color:"blue",border:"none",color:"#838383",display:"inline",width:"140px"
}}/> <img src="./search.png"  style={{ float: "right",height: "30px",
  width: "30px",backgroundColor:'white'}}></img>
    </div>
    </a></div>


    <div class="one wide column" style={{padding:"5px 0px 0px 0px"}}><a  href="www.google.com" className="active" >
  <img src="./cart.png" style={{height: "50px",
  width: "50px"}} ></img>
    </a></div>

  <div class="one wide column vis"><a   style={{float:"right", padding: "10px 0px 0px 0px",color:"blue"}}>
    Support
    </a></div>

  <div class="one wide column vis"><a  style={{float:"right", padding: "10px 0px 0px 0px",color:"blue"}}>Login</a></div>

  <div class="two wide column  vis"><a   style={{position: "relative",
 top:"10px", padding: "10px 0px 0px 0px",color:"blue"}}>Sign Up</a></div>

</div></div>


<div class="between " id="between" style={{fontSize:"12px"}} ><div class="ui grid ">
<div class="two wide column"><a  href="www.google.com" className="active" style={{padding: "15px 0px 0px 0px"}}>
  <img src="./logo.png" style={{height: "30px",
  width: "50px"}} ></img>
    </a></div>
    <div class="three wide column"> <a   style={{float:"left", padding:"5px 0px 0px 0px",color:"blue"}}>
     MBW Institute
    </a></div>
    <div class="nine wide column"  ><a   style={{ color:"blue"}}>
    <div style={{border:'1px solid blue',width:"100%",height:"40px",borderRadius: "25px"}}>
 <input type="text" id="search" placeholder="Search..." style={{color:"blue",border:"none",color:"#838383",display:"inline",width:"70%",position:"absolute",top:"23px",left:"25px"
}}/> <img src="./search.png"  style={{position:"absolute",right:"25px",top:"18px",height: "30px",
  width: "30px",backgroundColor:'white'}}></img>
    </div>
    </a></div>
    
    <div class=" dropdown"  id="dropdown" style={{padding:"17px 0px 0px 0px",float:"right"}}>
<button onClick={this.myFunction} style={{borderRadius: "5px"}}><img src="./dropdown.png" style={{height: "30px",
  width: "30px",}} ></img></button>

<div id="myDIV" style={{display:"none"}}>

<a href="/" style={{color:"blue"}}>Login</a>
  <hr></hr>
  <a   style={{color:"blue"}}>Sign Up</a>
  <hr></hr>
<a   style={{color:"blue"}}>
    Support
    </a>
<hr></hr>
<a  style={{color:"blue"}}>Teach on MBWI</a>
<hr></hr>
<a  onClick={this.handleShow} style={{color:"blue"}}>
     Categories
    </a>
    <hr></hr>
    <a  href="www.google.com" className="active" >
  <img src="./cart.png" style={{height: "50px",
  width: "50px"}} ></img>
    </a>

</div>
</div>

  </div>
</div>








<div class="small " style={{fontSize:"12px"}} ><div class="ui grid ">
<div class="three wide column"><a  href="www.google.com" className="active" style={{padding: "15px 0px 0px 0px"}}>
  <img src="./logo.png" style={{height: "30px",
  width: "50px"}} ></img>
    </a></div>

    <div class="ten wide column"  ><a   style={{ color:"blue"}}>
    <div style={{border:'1px solid blue',width:"100%",height:"40px",borderRadius: "25px"}}>
 <input type="text" id="search" placeholder="Search..." style={{color:"blue",border:"none",color:"#838383",display:"inline",width:"70%",position:"absolute",top:"23px",left:"25px"
}}/> <img src="./search.png"  style={{position:"absolute",right:"25px",top:"18px",height: "30px",
  width: "30px",backgroundColor:'white'}}></img>
    </div>
    </a></div>
   <div class=" dropdown"  id="dropdown" style={{padding:"17px 0px 0px 0px",float:"right"}}>
<button onClick={this.myFunction1} style={{borderRadius: "5px"}}><img src="./dropdown.png" style={{height: "30px",
  width: "30px",}} ></img></button>

<div id="myDIV1" style={{display:"none"}}>

<a href="/" style={{color:"blue"}}>Login</a>
  <hr></hr>
  <a   style={{color:"blue"}}>Sign Up</a>
  <hr></hr>
<a   style={{color:"blue"}}>
    Support
    </a>
<hr></hr>
<a  style={{color:"blue"}}>Teach on MBWI</a>
<hr></hr>
<a onClick={this.handleShow}  style={{color:"blue"}}>
     Categories
    </a>
    <hr></hr>
    <a  href="www.google.com" className="active" >
  <img src="./cart.png" style={{height: "50px",
  width: "50px"}} ></img>
    </a>

</div>
</div>

</div>
</div>

{this.state.isActive ? <Categories>Hello React</Categories> : null }

    </div>)
}}

export default Finals;
