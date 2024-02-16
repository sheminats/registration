import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';



function Header() {
  return (
    <div className='q1'>
    <Navbar style={{zIndex:1}} expand="lg" className="q1 w-100 position-fixed top-0">
<Container>
<Navbar.Brand className='r1'> <Link to={'/'} className='text-white fw-bolder ' style={{textDecoration:'none'}} href="#home"><i class="fa-solid fa-graduation-cap " style={{color: "red"}}></i> Education</Link></Navbar.Brand>

<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                  
       <Nav.Link ><Link to={'/'} style={{textDecoration:"none",color:"white"}}>   Home </Link></Nav.Link>
                   <Nav.Link> <Link to={'/'} style={{textDecoration:"none",color:"white",}}>Services</Link></Nav.Link>
                   <Nav.Link ><Link to={'/'} style={{textDecoration:"none",color:"white"}}> About Us</Link></Nav.Link>
                   <Nav.Link ><Link to={'/registration'} style={{textDecoration:"none",color:"white"}}>Login</Link></Nav.Link>

                 </Nav>

                   
</Navbar.Collapse>
</Container>
</Navbar>

</div>

  )
}

export default Header