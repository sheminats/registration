import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { registerAPI } from '../services/allAPI';




function Register() {

    const [studentInputdata, setStudentInputdata] = useState({
        firstname: "", lastname: "", address: "",email:"",gender:"",mobile:"",password:"",
        dateofbirth:"",course:""
      })
      const navigate=useNavigate()
      const handleRegister=async(e)=>{
        e.preventDefault()
           console.log(studentInputdata);
        const {firstname,lastname,address,email,gender,mobile,password,dateofbirth,course}=studentInputdata
        if(!firstname||!lastname||!address||!email||!gender||!mobile||!password||!dateofbirth||!course){
          toast.info("Please fill the form completely")
        }else{
          //toast.success("proceed to register api")
         try{
       const result=await registerAPI(studentInputdata)
       console.log(result);
       if(result.status===200){
        toast.success(`Welcome ${result.data.firstname}...`)
        setStudentInputdata({ firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dateofbirth:"",course:""})
        //navigate to login
        setTimeout(()=>{
          navigate("/dashboard")
        },2000)
       }else{
        toast.error(result.response.data)
       }
         }catch(err){
          console.log(err);
         }
        }
  
    }

  return (
    <>
       <div className='text-center justify-content-center align-items-center ' style={{background:'white'}}>
 <h1 className='fw-bolder text-dark pp mt-2'>
           Apply as a Student
          </h1> 
         <div className="row">
         <Form className='d-flex justify-content-between mt-5'>
            <div className="col-lg-6">
         
          
          
            <Form.Group className="mb-3 ms-4" controlId="formBasicName">
         
         <Form.Control type="text" placeholder="First Name" className='nn'value={studentInputdata.firstname} required
         onChange={e=>setStudentInputdata({...studentInputdata,firstname:e.target.value})}
         />
       </Form.Group>

       <Form.Group className="mb-3 ms-4" controlId="formLastName">
        
         <Form.Control type="text" placeholder="Last Name" className='nn'value={studentInputdata.lastname}
                  onChange={e=>setStudentInputdata({...studentInputdata,lastname:e.target.value})}/>
       </Form.Group>
       <Form.Group className="mb-3 ms-4" controlId="formAddress">
        
        <Form.Control type="text"   placeholder="Address" value={studentInputdata.address} onChange={e=>setStudentInputdata({...studentInputdata,address:e.target.value})} required/>
      </Form.Group>           
     <Form.Group className="mb-3 ms-4" controlId="formBasicEmail">
     
       <Form.Control type="email" placeholder="Enter email"className='nn'value={studentInputdata.email} required onChange={e=>setStudentInputdata({...studentInputdata,email:e.target.value})} />
       
     </Form.Group>
     

     <Form.Group className="mb-3 ms-4" controlId="formGender">
     <Form.Select aria-label="Select Gender" value={studentInputdata.gender} onChange={e=>setStudentInputdata({...studentInputdata,gender:e.target.value})} required>
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              
              </Form.Select>
         
            </Form.Group>
            </div>


            <div className="col-lg-6">
   
            <Form.Group className="mb-3 ms-4" controlId="formmobile">
         
         <Form.Control type="number" placeholder="Mobile" className='nn'value={studentInputdata.mobile}   required      onChange={e=>setStudentInputdata({...studentInputdata,mobile:e.target.value})}/>
       </Form.Group>
    
      <Form.Group className="mb-3 ms-4" controlId="formBasicPaswd">

        <Form.Control type="password" placeholder="Enter Password"  className='nn'value={studentInputdata.password}  required       onChange={e=>setStudentInputdata({...studentInputdata,password:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3 ms-4" controlId="formdate">
         
         <Form.Control type="date" placeholder="Date of Birth" className='nn'value={studentInputdata.dateofbirth}   required      onChange={e=>setStudentInputdata({...studentInputdata,dateofbirth:e.target.value})}/>
       </Form.Group>
       <Form.Group className="mb-3 ms-4" controlId="Course">
       <Form.Select aria-label="Select the Course" value={studentInputdata.course} onChange={e=>setStudentInputdata({...studentInputdata,course:e.target.value})} required>
            <option>Select Course</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            
            </Form.Select>
       </Form.Group>
       <Link onClick={handleRegister}  className="btn btn-danger">Register </Link>
            </div>
       
       
            </Form>
         </div>
         
        </div>
        <ToastContainer autoClose={3000} theme='colored' />

    </>
  )
}

export default Register



