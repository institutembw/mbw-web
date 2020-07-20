import React from 'react';
import '../css/basic.css'
import { Table } from 'reactstrap';
import { Grid, Image ,Menu,Input,Segment} from 'semantic-ui-react'

class CBSEBoard extends React.Component{
   
    
    render(){
        return(
            <div>
                 <Table>
      <thead>
        <tr>
          <th><div><a href="/">CLASS 1</a></div></th>
          <th><div><a href="/">CLASS 2</a></div></th>
          <th><div><a href="/">CLASS 3</a></div></th>
          <th><div><a href="/">CLASS 4</a></div></th>
          <th><div><a href="/">CLASS 5</a></div></th>
          <th><div><a href="/">CLASS 6</a></div></th>

          
        </tr>
      </thead>
      <tbody>
      <tr>
      <th><div><a href="/">CLASS 7</a></div></th>
          <th><div><a href="/">CLASS 8</a></div></th>
          <th><div><a href="/">CLASS 9</a></div></th>
          <th><div><a href="/">CLASS 10</a></div></th>
          <th><div><a href="/">CLASS 11</a></div></th>
          <th><div><a href="/">CLASS 12</a></div></th>
        </tr>
        </tbody>
        </Table>
            </div>
        )}
}

export default CBSEBoard