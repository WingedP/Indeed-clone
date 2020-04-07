// import React, {useState} from 'react'
// import { Form, Button } from 'react-bootstrap';
// import {useHistory} from 'react-router-dom';

// import ReactDOM from 'react-dom';
// // import FacebookLogin from 'react-facebook-login';

// export default function Login(props) {
//     const responseFacebook = response => {
//         props.setLogged(true);
//         props.setUser(response.name);
//         localStorage.setItem('user', response.name);
//       };

//       let [username, setUsername] = useState(null);
//       let history=useHistory();
//       const onInputChange = (el) => {
//         const name = el.target.value
//         setUsername(name)
//       }

//     //   const regSubmit = (e) => {
//     //     e.preventDefault();
//     //     if(username) {
//     //     props.setLogged(true);
//     //     props.setUser(username);
//     //     localStorage.setItem('user', username);
//     // } else alert('Not leave username box blank!!')
//     //   }
//     let [user,setUser]=useState({authenticate:false})
//     const regSubmit=()=>{
//         setUser({authenticate:true})
//         history.push('/candidates/:id')

//     }

//     return (
//         <div className='container' style={{maxWidth: '50%'}}>
//             <Form onSubmit={regSubmit}>
//                 <Form.Group>
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control type="text" placeholder="Enter username" value={username} onChange={onInputChange}/>
//                     <Form.Text className="text-muted">
//                     </Form.Text>
//                 </Form.Group>
//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" disabled/>
//                 </Form.Group>
//                 <Form.Group controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Agree with Term Of Services"/>
//                 </Form.Group>
//                 <span className='d-flex justify-content-center my-5'><Button variant="primary" type="submit">
//                     Submit
//                 </Button></span>
//             </Form>
//                 <h2><span>Or</span></h2>
//                 <div className='d-flex justify-content-center mt-3'>
//                 {/* <FacebookLogin
//                 autoLoad={false}
//                 appId="665599237556622"
//                 fields="name,email,picture"
//                 callback={resp => {responseFacebook(resp)}}
//               /> */}
//               </div>
//         </div>
//     )
// }

import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';



export default function LoginPage() {
let history=useHistory();
let dispatch=useDispatch();
let email=''; 
let password=''; 
let username='';

let login=(e)=>{e.preventDefault();
    let user={email:email,password:password,username:username}
    dispatch({type:'LOGIN',payload:user})
    history.push('/')}

    
    return (
<Form onSubmit={e=>login(e)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
    onChange={(e)=>email=e.target.value}
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="username" 
    onChange={(e)=>username=e.target.value}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    onChange={(e)=>password=e.target.value}/>
  </Form.Group> 
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}
