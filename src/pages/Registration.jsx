import React from 'react'
import Header from '../Components/Header'
import Register from '../Components/Register';
import gif from '../assets/gif.gif'
import { Link } from 'react-router-dom';



function Registration() {
  return (
   <>
   <Header/>

   <div className="w-100 d-flex justify-content-center align-items-center rounded bb s1" style={{height:'800px'}}>
                        <div className="container">
                            <div className="row align-items-center ">
                                <div className="col-lg-4 fw-bolder text-dark mb-3">
                                <img className='img-fluid'  src={gif} alt="landing" />
                                    <h1 style={{fontSize:'80px',marginTop:'-100px'}} className='fw-bolder   text-danger ' >    Welcome     </h1>
                                    <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facere reiciendis officiis obcaecati, dolore cumque asperiores earum aliquam sint nam omnis, accusantium nulla voluptates, quas illum. Incidunt eum deleniti aliquid?</p>
                                    <Link to={'/'} className='btn btn-danger text-white'>Back <i class="fa-solid fa-right-long fa-beat-fade ms-2"></i> </Link>
                                </div>
                                <div className="col-lg-8">
<Register></Register>
                                </div>
                            </div>
                        </div>
                    </div>


   </>
  )
}

export default Registration