import React, { Component } from 'react';
import TitleBar from './Components/Title_Bar'
import Test from './Components/Test'
import Finals from './Components/Final'
import Categories from './Components/Categories'
import logo from './logo.svg';
import './Loader.css';
import { Dropdown, Button } from 'semantic-ui-react'
import { Grid, Image ,Menu,Input} from 'semantic-ui-react'
import './css/nav.css'
class App extends Component {
  render() {
    function myFunction() {
      console.log("hiii")
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    } 
    return (
      <div className="ui container" style={{marginTop:'10px'}} >
        
  {/* <Dropdown text='File'>
    <Dropdown.Menu>
    <Grid columns='equal'>
    <Grid.Row stretched>
      <Grid.Column>
        <a>1</a>
        <a>2</a>
      </Grid.Column>
      <Grid.Column width={6}>
        <a>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </a>
      </Grid.Column>
      <Grid.Column>
        <a>1</a>
        <a>2</a>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <a>1</a>
        <a>2</a>
      </Grid.Column>
      <Grid.Column width={6}>
        <a>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </a>
      </Grid.Column>
      <Grid.Column>
        <a>1</a>
        <a>2</a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
      
    </Dropdown.Menu>
  </Dropdown>
  <div className="borderless">
  <Menu  style={{backgroundColor:" white"}} className="borderless">
    <Menu.Item  >
      <img src="./logo.png"></img>
    </Menu.Item>
    <Menu.Item position='right' >
      Dropdown
    </Menu.Item>
    
    <Menu.Item position='right' >
      <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>
    <Menu.Item position='right'>
      Donate
    </Menu.Item>
    <Menu.Item position='right'>
      Sign In </Menu.Item>
    <Menu.Item position='right'>
      Sign Out </Menu.Item>

    
  </Menu>
  </div> */}
  {/* <Grid  className="topnav" id="myTopnav">
  <Grid.Column align='center' floated='left' width={1}>
  <img src="./logo.png" style={{height: "30px",
  width: "50px"}} ></img>
    </Grid.Column>
    <Grid.Column align='left' floated='left' width={1} style={{ padding: "20px 5px 5px 5px",color:"blue"}}>
     Dropdown 
    </Grid.Column>
    <Grid.Column floated='left' width={5}>
     
    </Grid.Column>
    <Grid.Column align='right'  floated='left' width={4} style={{ padding: "12px 5px 5px 5px",color:"blue"}}>
    <Input className='icon' icon='search' placeholder='Search...'  />
    </Grid.Column>
    <Grid.Column align='right' floated='right' width={1} style={{ padding: "20px 5px 5px 5px",color:"blue"}}>
    Donate
    </Grid.Column>
    <Grid.Column align='right' floated='right' width={1} style={{ padding: "20px 5px 5px 5px",color:"blue"}}>
    Sign In    </Grid.Column>
    <Grid.Column  align='right' floated='right' width={1} style={{ padding: "20px 5px 5px 1px",color:"blue"}}>
      Sign Out </Grid.Column>
    <Grid.Column className="icons"  align='right' floated='right' width={1} style={{ padding: "20px 5px 5px 1px",color:"blue"}}>
    <a href="javascript:void(0)" className="icons" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a></Grid.Column>
  </Grid> */}


{/* <div className="topnav" id="myTopnav">
<a  href="www.google.com" className="active" style={{padding: "15px 5px 5px 5px",width:"5%"}}>
  <img src="./logo.png" style={{height: "30px",
  width: "50px"}} ></img>
    </a>
    <a   style={{float:"right", padding: "20px 5px 5px 5px",color:"blue",width:"15%"}}>
     MBW Institute
    </a>
    <a  style={{float:"right", padding: "20px 5px 5px 5px",color:"blue",width:"10%"}}>
     Categories
    </a>
    
    <a   style={{float:"right", padding: "10px 5px 5px 5px",color:"blue",width:"25%"}}>
    <div style={{float:"right",padding: "5px 10px 5px 10px",border:'1px solid blue',width:"200px",height:"40px",borderRadius: "25px"}}>
 <input type="text" id="search" placeholder="Search..." style={{color:"blue",border:"none",margin: "1px 1px 1px 1px",color:"#838383",display:"inline",width:"140px"
}}/> <img src="./search.png"  style={{ margin: "1px 1px 10px 1px",padding: "1px 1px 1px 1px",float: "right",height: "30px",
  width: "30px",backgroundColor:'white'}}></img>
    </div>
    </a>
    <a   style={{  textAlign:"right",padding: "20px 5px 5px 5px",color:"blue",width:"8%"}}>
    Donate
    </a>
    <a  style={{  textAlign:"right",padding: "20px 5px 5px 5px",color:"blue",width:"8%"}}>Login</a>
    <a   style={{ textAlign:"right",padding: "20px 5px 5px 1px",color:"blue",width:"9%"}}>Sign Up</a>
 
  <a  className="icons" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>

     <TitleBar></TitleBar>
     <Test></Test> */}
<Finals></Finals>
{/* <Categories></Categories> */}

      </div>
    );
  }
}

export default App;
