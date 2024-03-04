
import './App.css';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
function App() {
 
 

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [mobile,setMobile]=useState('');
const [password,setPassword]=useState('');  
const [items,setItem]=useState([]); 
console.log(items)
const submiting=(e)=>{  
  e.preventDefault() 
  setItem(([{name,email,mobile,password}]))
   setName('') 
   setEmail('')  
   setMobile('')
   setPassword('')
}

  return (<div className='box'>
    <Form> 
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>  

      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group> 

      
      <Button variant="primary" type="submit" onClick={(e)=>submiting(e)}>
        Submit
      </Button> 

      
    </Form>  

    <div>   

      

    </div> 

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody> 
      {items.length>0?items.map((item)=>
   
    
   
        <tr>
          <td>   {item.name}</td>
          <td>     {item.email}</td>
          <td>   {item.mobile}</td>
          <td>    {item.password}</td>
        </tr> ):""}
        
      </tbody>
    </Table>
    
     </div>
  );
}



export default App;
