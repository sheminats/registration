import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import study1 from '../assets/study1.png'


function Home() {
  return (
<>
<Header/>
<div  style={{ height: "90vh", backgroundColor: "#f5c400" ,marginTop:"80px",}} className="w-100 d-flex justify-content-center align-items-center
rounded back">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "50px", color: "white" }} className='fw-bolder  ms-3 j1'>
                      Education
              </h1>
<p className='text-white p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nam debitis voluptatem dolor molestias eligendi et pariatur odio aspernatur, saepe adipisci voluptatum ex modi id eius reiciendis nostrum amet facilis!</p>
    <p className='ms-3 text-white fs-3'>New student?</p><Link className='btn btn-danger mt-2 ms-3' to={'/registration'}> Click here to Register <i class="fa-solid fa-right-long fa-beat-fade ms-2"></i></Link> :
              
            </div>
            <div className="col-lg-6">
              <img height={"350px"}  src={study1} alt="" />
            </div>
          </div>
        </div>
      </div>

</>    
  )
}

export default Home