import React, { useState } from 'react'
import Navbar from './Navbar'
import { Card,Button ,Form,FormText, Toast} from 'react-bootstrap'
import './Details.css'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import axios from 'axios'

const Reports = () => {


    // const [udate,setuDate]=useState("");
    // const [ufirstname,setuFirstName]=useState("");
    // const [umiddleName,setuMiddleName]=useState("");
    // const [ulastname,setuLastName]=useState("");
    // const [umobilenumber,setuMobileNumber]=useState("");
    // const [uemail,setuEmail]=useState("");
    // const [ualternatemobilenumber,setuAlternateMobileNumber]=useState("");
    // const [ufathername,setuFatherName]=useState("");
    // const [ufathermobilenumber,setuFatherMobileNumber]=useState("");
    // const [umothername,setuMotherName]=useState("");
    // const [umothermobilenumber,setuMotherMobileNumber]=useState("");
    // const [uad1,setuad1]=useState("");
    // const [uad2,setuad2]=useState("");
    // const [upincode,setuPincode]=useState();

    const initialValue = {
                  'firstname':'',
                  'lastname':'',
                  'middlename':'',
                  'pincode':'',
                  'mobilenumber':'',
                  'alternatemobilenumber':'',
                  'fathername':'',
                  'mothername':'',
                  'fathermobilenumber':'',
                  'mothermobilenumber':'',
                  'addressone':'',
                  'addresstwo':'',
                  'dateofbirth':'',
                  'personalemail':''
 }


   const [details,setDetails]=useState(initialValue);

   const onValueChange=(e)=>
 {
       setDetails({...details,[e.target.name]:e.target.value})
 }



    const handleSubmit=()=>
    {

      // if(!details.ad1||!details.dob||!details.fathermobilenumber||!details.mothermobilenumber
      // ||!details.fathername||!details.mothername||!details.pincode||!details.firstname||!details.lastname
      // ||!details.mobilenumber||!details.personalemail)
      // {
      //    toast.error("fill all the details");
      // }

      //   else
        {

          console.log(details);

          axios({
            method:'POST',
            url:`http://localhost:8017/details/${localStorage.getItem('username')}`,
            headers:{
              'Authorization':'Bearer '+localStorage.getItem('USER_KEY'),
              'Content-Type': 'application/json'
          },
           data:details
          }).then(()=>{
            console.log(details);
            toast.success("details saved successfully");
          }).catch(res=>{
            console.log(res);
            toast.error("try again");
          })


           

        }

     

         
    }



  return (
    <div ><Navbar/>
      <div   className='details' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h1>Personal Details</h1>
        <Card  className="card-details">
    <Card.Body>
    
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>First Name <FormText className="req">*</FormText></Form.Label>
        <Form.Control  required={true}  name="firstname"  type="text" placeholder="Enter First Name"  onChange={e=>{onValueChange(e)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Middle Name </Form.Label>
        <Form.Control  name="middlename"  type="text" placeholder="Enter Middle Name"  onChange={e=>{onValueChange(e)}}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Last Name <FormText className="req">*</FormText></Form.Label>
        <Form.Control name="lastname" required={true}   type="text" placeholder="Enter Last Name"   onChange={e=>{onValueChange(e)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Personal Email <FormText className="req">*</FormText></Form.Label>
        <Form.Control  name="personalemail" required={true}   type="email" placeholder="Enter email address"    onChange={e=>{onValueChange(e)}}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile Number <FormText className="req">*</FormText></Form.Label>
        <Form.Control  name="mobilenumber" required={true}   type="number" placeholder="Enter Mobile Number"    onChange={e=>{onValueChange(e)}}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Alternate Mobile Number <FormText className="req">*</FormText></Form.Label>
        <Form.Control name="alternatemobilenumber" required={true}   type="number" placeholder="Enter Mobile Number"   onChange={e=>{onValueChange(e)}}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Date Of Birth <FormText className="req">*</FormText></Form.Label>
        <Form.Control    required={true} name="dateofbirth"  type="date" placeholder="Enter Mobile Number" value={details.dob}   onChange={e=>
          {onValueChange(e);
          }} />
      </Form.Group>




      <Form.Group className="mb-3" >
        <Form.Label>Father's Name <FormText className="req">*</FormText></Form.Label>
        <Form.Control name="fathername" required={true}   type="text" placeholder="Enter Father Name"  onChange={e=>{onValueChange(e)}}   />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label >Father's Mobile Number <FormText className="req">*</FormText></Form.Label>
        <Form.Control name="fathermobilenumber"  type="number" placeholder="Enter Father Mobile Number"   onChange={e=>{onValueChange(e)}}   />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mother's Name <FormText className="req">*</FormText></Form.Label>
        <Form.Control name="mothername"  required={true}   type="text" placeholder="Enter Mother Name"  onChange={e=>{onValueChange(e)}}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mother's Mobile Number <FormText className="req">*</FormText></Form.Label>
        <Form.Control name="mothermobilenumber"  type="number" placeholder="Enter Mother Mobile Number"   onChange={e=>{onValueChange(e)}}   />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address Line 1 <FormText className="req">*</FormText></Form.Label>
        <Form.Control name="addressone"  required={true}  type="text" placeholder="Enter address line 1"  onChange={e=>{onValueChange(e)}}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control  name="addresstwo"  type="text" placeholder="Enter address line 2"   onChange={e=>{onValueChange(e)}}   />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Pincode <FormText className="req">*</FormText></Form.Label>
        <Form.Control name="pincode"  required={true}  type="number" placeholder="Enter pincode"   onChange={e=>{onValueChange(e)}}   />
      </Form.Group>

      
      </Form>

      <span className='btt'>
       <Button style={{width:'5rem'}}  type="submit"  onClick={handleSubmit} >
            SAVE
       </Button>
       </span>
   
    </Card.Body>
  </Card>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Reports;