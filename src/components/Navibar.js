import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import '../App.css'

export default function Navibar(props) {
  
    let history=useHistory();
    let dispatch=useDispatch();
    let user=useSelector(state=>state.user)
    let logout=()=>{
        // user.authenticate===false;
        dispatch({type:'LOGOUT'})
        history.push('./')
    }
    let userdetail=()=>{
        
    if(user.authenticate===true){return (
    <div className="d-flex" style={{paddingRight:"5px"}}>
 <NavDropdown className="userstyle" title={user.username} bsPrefix >
     <NavDropdown.Item href="#action/3.1">user:{user.username}</NavDropdown.Item>
   <NavDropdown.Divider />
     <NavDropdown.Item href="#action/3.4">mail: {user.email}</NavDropdown.Item>
     </NavDropdown>  
{/* <div style={{paddingRight:"10px"}}>user:{user.username}</div>
<div style={{paddingRight:"10px"}}> mail: {user.email}</div> */}
        
       <div>    <button className="loginbutton" onClick={()=>logout()}>Log out</button>
</div>


    
    </div>)} 
    else{return(
        <div className="d-flex"> 
        <div><button className="loginbutton" onClick={()=>history.push('./login')}>Login</button></div>
        {/* <div style={{backgroundColor:"yellow"}}><button onClick={()=>history.push('./login')}>Login</button></div> */}

{/* <Link className="nav-link" to='/login'>Login</Link> */}
</div> 
        )}  
   

}

    return (    
        <Navbar className="navibar" bg="" expand="lg">
            <div className="logo">                 
            <a href=""> <img className="logoimg" src="https://lh3.googleusercontent.com/T-vD9tvlcPBf_1lY-3m8hQ6J-lqBROMkMut-CN5vohyJhk-kfVjfPpb18Uk3aiGPG9_5-fbunw=w128-h128-e365"></img></a>
            </div>

            <Navbar.Brand href="#home">It's nice indeed</Navbar.Brand>
            
            {/* <Link className="nav-link" to='/login'>Login</Link> */}

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to='/'>Home</Link>
                    <Link className="nav-link" to='/candidates'>Candidates</Link>
                    <Link className="nav-link" to='/company'>Company</Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>           
                    
                    {/* <button onClick={()=>history.push('./login')}>Login</button>       */}
    {/* <Link className="nav-link" to=''>{userdetail()}</Link> */}

                </Nav>
                
                <Form inline>    {userdetail()}
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
