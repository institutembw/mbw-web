import React from 'react';
import '../css/basic.css'
import '../css/nav.css'
import { Grid, Image ,Menu,Input,Segment} from 'semantic-ui-react'
import { Table } from 'reactstrap';

class StateBoard extends React.Component{
   
    
    render(){
        return(
            <div>
                 <Table className="table1">
      <thead>
        <tr>
          <th><div><a href="/">Assam</a></div></th>
          <th><div><a href="/">Bihar</a></div></th>
          <th><div><a href="/">CHATTISGARH</a></div></th>
          <th><div><a href="/">DELHI</a></div></th>
          <th><div><a href="/">GOA</a></div></th>
          <th><div><a href="/">GUJARAT</a></div></th>
          
        </tr>
      </thead>
      <tbody>
      <tr>
      <th><div><a href="/">HARYANA</a></div></th>
      <th><div><a href="/">HIMACHAL PARDESH</a></div></th>
      <th><div><a href="/">JAMMU KASHMIR</a></div></th>
      <th><div><a href="/">JHARKHAND</a></div></th>
      <th><div><a href="/">KARNATAKA</a></div></th>
      <th><div><a href="/">KERALA</a></div></th>
        </tr>
        <tr>
        <th><div><a href="/">MAHARASHTRA</a></div></th>
        <th><div><a href="/">MADHYA PARDESH</a></div></th>
        <th><div><a href="/">MANIPUR</a></div></th>
        <th><div><a href="/">MAGAALAYA</a></div></th>
        <th><div><a href="/">MIZORAM</a></div></th>
        <th><div><a href="/">NAGALAND</a></div></th>         
        </tr>
        <tr>
        <th><div><a href="/">ORISSA</a></div></th> 
        <th><div><a href="/">PUNJAB</a></div></th> 
        <th><div><a href="/">RAJASTHAN</a></div></th> 
        <th><div><a href="/">TAMIL NADU</a></div></th> 
        <th><div><a href="/">TRIPURA</a></div></th> 
        <th><div><a href="/">UTTAR PARDESH</a></div></th> 
        </tr>
        <tr>
        <th><div><a href="/">UTTARAKHAND</a></div></th> 
        <th><div><a href="/">WEST BENGAL</a></div></th> 
        <th><div><a href="/"></a></div></th> 
        <th><div><a href="/"></a></div></th> 
        <th><div><a href="/"></a></div></th> 
        <th><div><a href="/"></a></div></th> 

        </tr>
      </tbody>
    </Table>

    <Table className="table2">
      <thead>
        <tr>
          <th><div><a href="/">Assam</a></div></th>
          <th><div><a href="/">Bihar</a></div></th>
          <th><div><a href="/">CHATTISGARH</a></div></th>
          <th><div><a href="/">DELHI</a></div></th>
          <th><div><a href="/">GOA</a></div></th>
          
        </tr>
      </thead>
      <tbody>
      <tr>
      <th><div><a href="/">GUJARAT</a></div></th>
      <th><div><a href="/">HARYANA</a></div></th>
      <th><div><a href="/">HIMACHAL PARDESH</a></div></th>
      <th><div><a href="/">JAMMU KASHMIR</a></div></th>
      <th><div><a href="/">JHARKHAND</a></div></th>
        </tr>
        <tr>
      <th><div><a href="/">KARNATAKA</a></div></th>
      <th><div><a href="/">KERALA</a></div></th>
        <th><div><a href="/">MAHARASHTRA</a></div></th>
        <th><div><a href="/">MADHYA PARDESH</a></div></th>
        <th><div><a href="/">MANIPUR</a></div></th>
        </tr>
        <tr>
        <th><div><a href="/">MAGAALAYA</a></div></th>
        <th><div><a href="/">MIZORAM</a></div></th>
        <th><div><a href="/">NAGALAND</a></div></th>         
        <th><div><a href="/">ORISSA</a></div></th> 
        <th><div><a href="/">PUNJAB</a></div></th> 
        </tr>
        <tr>
        <th><div><a href="/">RAJASTHAN</a></div></th> 
        <th><div><a href="/">TAMIL NADU</a></div></th> 
        <th><div><a href="/">TRIPURA</a></div></th> 
        <th><div><a href="/">UTTAR PARDESH</a></div></th> 
        <th><div><a href="/">UTTARAKHAND</a></div></th> 
        </tr>
        <tr>
        <th><div><a href="/">WEST BENGAL</a></div></th> 
        <th><div><a href="/"></a></div></th> 
        <th><div><a href="/"></a></div></th> 
        <th><div><a href="/"></a></div></th> 
        <th><div><a href="/"></a></div></th> 

        </tr>
      </tbody>
    </Table>
                {/* <div className='state'>ASSAM </div>
                <div className='state'>BIHAR </div>
                <div className='state'>CHATTISGARH </div>
                <div className='state'>DELHI </div>
                <div className='state'>GOA </div>
                <div className='state'>GUJARAT </div>
                <div className='state'>HARYANA </div>
                <div className='state'>HIMACHAL PARDESH</div>
                <div className='state'>JAMMU AND KASHMIR</div>
                <div className='state'>JHARKHAND</div>
                <div className='state'>KARNATAKA</div>

                <div className='state'>KERALA</div>
                <div className='state'>MAHARASHTRA</div>
                <div className='state'>MADHYA PRADESH</div>
                <div className='state'>MANIPUR</div>
                <div className='state'>MAGAALAYA</div>
                <div className='state'>MIZORAM</div>
                <div className='state'>NAGALAND</div>
                <div className='state'>ORISSA</div>
                <div className='state'>PUNJAB</div>
                <div className='state'>RAJASTHAN</div>
                <div className='state'>TAMIL NADU</div>
                <div className='state'>TRIPURA</div>
                <div className='state'>UTTAR PRADESH</div>
                <div className='state'>UTTARAKHAND</div>
                <div className='state'>WEST BENGAL</div> */}
               
            </div>
        )
    }
}

export default StateBoard;