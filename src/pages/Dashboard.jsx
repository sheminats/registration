import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import { getallDetailAPI } from '../services/allAPI';




function Dashboard() {

    const [alldetails,setAlldetails]=useState("")
  const navigate=useNavigate()
  const getallDetails=async()=>{
    try{
  const result=await getallDetailAPI()
  if(result.status===200){
    setAlldetails(result.data)
  }
    }catch(err){
 console.log(err);
    }
  }
  useEffect(()=>{
 getallDetails()
  },[])
  return (
   <>
   <Header/>
   <div style={{marginTop:"100px"}} className='container '>
<h1 style={{color:"blue"}}className='text-center fw-bolder'>Student Details</h1>


               <Table className='  mb-5' striped bordered hover variant="light">
      <thead style={{backgroundColor:"blue"}} className='text-center'>
        <tr >
          <th className='text-danger '>First Name</th>
          <th className='text-danger'>Last Name</th>
          <th className='text-danger'>Address</th>
          <th className='text-danger'>Email</th>
          <th className='text-danger'>Mobile</th>
          <th className='text-danger'>DOB</th>
          <th className='text-danger'>Gender</th>
          <th className='text-danger'>Course</th>

        </tr>
      </thead>
      {alldetails.length>0 && alldetails.map((details,index)=>(
    <tbody  details={details}>
  
      <tr key={index}>
       
      <td>{details?.firstname}</td>
      <td>{details?.lastname}</td>
      <td>{details?.address}</td>
<td>{details?.email}</td>
<td>{details?.mobile}</td>
<td>{details?.dateofbirth}</td>
<td>{details?.gender}</td>
<td>{details?.course}</td>
    </tr>
     
   
    </tbody> )) }

    </Table>
 
    <Link to={'/registration'} className='btn btn-danger text-white'>Back <i class="fa-solid fa-right-long fa-beat-fade ms-2"></i> </Link>
</div>


   </>
  )
}

export default Dashboard