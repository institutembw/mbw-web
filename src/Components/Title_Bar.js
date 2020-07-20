import React from 'react';
import StateBoard from './StateBoard'
import CBSEBoard from './CBSEBoard'
import { Grid, Image ,Menu,Input,Segment} from 'semantic-ui-react'

class TitleBar extends React.Component{
  showModal=()=>{
    this.refs.modal.open()
}
    
    render(){
      const cons=()=>{
        console.log("dskjfbhdsbfhdsvhjfdshjfhjdsvj")
        alert("sdfhdk")
    }
        return(
            <div ref={"modal"}
            position='center'
            backdrop={true} >
              <Grid columns='equal'>
                <Grid.Row>
                <Grid.Column>
                  <div  onClick={()=>{console.log("hdsidfbjhsbjhbjh")}}>State Boards</div>
                  {/* <StateBoard></StateBoard> */}
                </Grid.Column>
                <Grid.Column >
                  <div>CBSE Boards</div>
                  {/* <CBSEBoard></CBSEBoard> */}
                  <div>ICSE Boards</div>
                  {/* <CBSEBoard></CBSEBoard> */}
                </Grid.Column>
               
                <Grid.Column>
                  <div>JEE</div>
                </Grid.Column>
                <Grid.Column >
                  <div>NEET</div>
                </Grid.Column>
                <Grid.Column>
                  <div>JNVST</div>
                </Grid.Column>
                <Grid.Column>
                  <div>KVPY</div>
                </Grid.Column>
                
                </Grid.Row>
                
              </Grid>
              
        </div>
        )
    }
}

export default TitleBar;