import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";


export default function CandidatePage(props) {
  let { id } = useParams(); 
  let [candidate, setCandidate] = useState(null);
  let history = useHistory();


  const getSingleCandidate = async () => {
    let url = "http://localhost:3020/candidates/" + id;
    let response = await fetch(url);
    let result = await response.json();
    setCandidate(result);
  };

  const postData = async e => {
    e.preventDefault();

    let config = {
      method: "PUT",
      body: JSON.stringify(candidate),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch(
      `http://localhost:3020/candidates/${id}`,
      config
    );
    // go back to previous page after post
        history.goBack();   
    // history.push("/");
  };

  useEffect(() => {
    getSingleCandidate();
  }, []);

  if (candidate == null) {
    return <h1>There is no candidate to show</h1>;
  }

  return (
    <div>
      <Form onSubmit={e => postData(e)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={candidate.first_name}
              onChange={e =>
                setCandidate({ ...candidate, first_name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={candidate.last_name}
              onChange={e =>
                setCandidate({ ...candidate, last_name: e.target.value })
              }
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={candidate.email}
              onChange={e =>
                setCandidate({ ...candidate, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>gender</Form.Label>
            <Form.Control
              type="text"
              value={candidate.gender}
              onChange={e =>
                setCandidate({ ...candidate, gender: e.target.value })
              }
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              value={candidate.company}
              onChange={e =>
                setCandidate({ ...candidate, company: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>job title</Form.Label>
            <Form.Control
              type="text"
              value={candidate.job_title}
              onChange={e =>
                setCandidate({ ...candidate, job_title: e.target.value })
              }
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={candidate.city}
              onChange={e =>
                setCandidate({ ...candidate, city: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              value={candidate.country}
              onChange={e =>
                setCandidate({ ...candidate, country: e.target.value })
              }
            />
          </Form.Group>
                
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Photo </Form.Label>
            <Form.Control
              type="text"
              value={candidate.photo_url}
              onChange={e =>
                setCandidate({ ...candidate, photo_url: e.target.value })
              }
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}




// import React, { useState, useEffect } from 'react'; 
// import {useParams, useHistory} from 'react-router-dom';
// import { Form, Button, Col } from "react-bootstrap";

// export default function CandidateProfile(props) {
//     console.log({ props });
//     let{id}=useParams();
//     let [candidate,setCandidate]=useState(null)
//     let history=useHistory();

//     const getSingleCandidate=async()=>{
//         let url="http://localhost:3020/candidates/"+id;
//         let response=await fetch(url)
//         let result=await response.json();
//         console.log("efwfewf result",result);
//         setCandidate(result);
//     }
//     const postData= async(e)=>{
//         e.preventDefault();
//         console.log("here here")
//         let config={
//             method: "PUT",
//             body: JSON.stringify(candidate),
//             headers: {
//               "Content-Type": "application/json"
//             }
//         }
//         const response=await fetch(`http://localhost:3020/candidates/${id}`,config)
//         // history.push('/')
//         // history.goBack();
//     }

//     useEffect(()=>getSingleCandidate(),[])
//     if(candidate==null){return(<h1>there's no candidate</h1>)}
//     return (
//         <div>

//    <Form onSubmit={(e)=>postData(e)}>
//    <Form.Row>
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>First Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={candidate.first_name}
//               onChange={e =>
//                 setCandidate({ ...candidate, first_name: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={candidate.last_name}
//               onChange={e =>
//                 setCandidate({ ...candidate, last_name: e.target.value })
//               }
//             />
//           </Form.Group>
//         </Form.Row>

//         <Form.Row>
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               value={candidate.email}
//               onChange={e =>
//                 setCandidate({ ...candidate, email: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>gender</Form.Label>
//             <Form.Control
//               type="text"
//               value={candidate.gender}
//               onChange={e =>
//                 setCandidate({ ...candidate, gender: e.target.value })
//               }
//             />
//           </Form.Group>
//         </Form.Row>

//         <Form.Row>
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>Company</Form.Label>
//             <Form.Control
//               type="text"
//               value={candidate.company}
//               onChange={e =>
//                 setCandidate({ ...candidate, company: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>job title</Form.Label>
//             <Form.Control
//               type="text"
//               value={candidate.job_title}
//               onChange={e =>
//                 setCandidate({ ...candidate, job_title: e.target.value })
//               }
//             />
//           </Form.Group>
//         </Form.Row>

//         <Form.Row>
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>City</Form.Label>
//             <Form.Control
//               type="text"
//               value={candidate.city}
//               onChange={e =>
//                 setCandidate({ ...candidate, city: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>Country</Form.Label>
//             <Form.Control
//               type="text"
//               value={candidate.country}
//               onChange={e =>
//                 setCandidate({ ...candidate, country: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>Photo </Form.Label>
//             <Form.Control
//               type="text"
//               value={candidate.photo_url}
//               onChange={e =>
//                 setCandidate({ ...candidate, photo_url: e.target.value })
//               }
//             />
//           </Form.Group>
//         </Form.Row>


//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>




//         </div>
//     )
// }








