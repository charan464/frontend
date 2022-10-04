import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {signUser} from '../Service/api'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {userLogin,fetchUserData} from './api/Authentication'

function Login() {

 

    const navigate= useNavigate();

    const initialValue = {
       userName:'',
       password:''
  }


    const [user,setUser]=useState(initialValue);

    const onValueChange=(e)=>
  {
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
  }

  


    const handleLogin= async()=>{

      if(!user.userName||!user.password)
      {
        toast.error("fill all the details");
      }

      else
      {
            userLogin(user).then(res=>{

              console.log(res);

                if(res.status===200)
                {
                  localStorage.setItem('USER_KEY',res.data.token);
                   navigate("/home");
                   localStorage.setItem('username',user.userName);
                }
              

            }).catch(err=>{
              console.log(err);
                 toast.warning("invaild credentials");
              })
          
      }
    }


  return ( 

    <div>
         

    <div className='login'  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
           <div className="title"><h2 >EMPLOYEE ONBOARDING SYSTEM</h2></div>
           <h4>LOGIN</h4>
            <Card  style={{width:'30rem',height:'20rem'}} className="card-login">
    <Card.Body>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="userName"  required={true}   type="email" placeholder="Enter email" onChange={e=>{onValueChange(e)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={e=>{onValueChange(e)}}   />
      </Form.Group>
      </Form>
     
       <Button className="block"  type="submit" onClick={handleLogin}>
            login
       </Button>
   
    </Card.Body>
  </Card>
    </div>

    <ToastContainer/>
    
    </div>

   
  );
}

export default Login;