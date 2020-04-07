import React, { useEffect, useState } from "react";
import{Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

import './CandidatesPage.css';


export default function CandidatesPage() {

  let user=useSelector(state=>state.user)

//that's it
  let changeProfile=(el)=>{// thats why its siad email of undefine error
    console.log("user email here:", user.email)
    console.log("candidate email here:", el.email)
    if(user.email===el.email){return (
      <div className="container buttonCandidate">      
      <Link to={`/candidates/${el.id}`}><Button variant="primary">Edit</Button></Link>
    <Button variant="danger" onClick={()=>removeCandidate(el.id)}>Remove</Button> 
    </div>
      )} 
  }


    const [candidates, setCandidates] = useState([]);
            const getCandidates = async () => {
          const response = await fetch("http://localhost:3020/candidates");
          const data = await response.json();
          console.log({ data });
          setCandidates(data);
        };
        useEffect(() => {
        getCandidates();
      }, []);
    
    console.log({candidates:candidates})
    
   //FUNCTION REMOVE CANDIDATE here's where i remove so problem was tht the id you pass was object, not the id number 
    const removeCandidate=async(id)=>{
        const response=await fetch(`http://localhost:3020/candidates/${id}`,{
            headers:{"content-type":"application/json"},
            method:"DELETE",
        })
        console.log("object",id)
        console.log("another object",response)
        if(response.status===200){
            const clone=[...candidates];
            const newstate=clone.filter(({id:candidatesId})=>candidatesId!==id);//i mean you will rename the id as a candidate 
            // khoa always like to do it as simple as possible 
            // if we do that line with my i way it wil be look like this
            // const newstate=clone.filter((item)=>item.id!==id)    
            setCandidates(newstate);
        }
    };

   

    const renderCards=()=>{
        console.log("candidate",candidates)
        return candidates.map((el)=>{
            return <div style={{padding:'0px 10px 0px 0px' }}>            
            <Card  className="cardstyle">
            <Card.Img className="candidateavatar" variant="top" src={el.photo_url} />
            <Card.Body>

            <div className="d-flex justify-content-center align-items-center">   
              <Card.Title className="canId">#{el.id} </Card.Title>
              <Card.Title className="d-flex">{el.first_name} {el.last_name}</Card.Title>
            </div>

          
              <Card.Text className="container carddetail">              
                <i class="fas fa-transgender-alt"></i>    {el.gender}
                <div> <i class="fas fa-globe-europe"></i>    {el.country}</div>
                <div>   <i class="fas fa-map-marker-alt"></i>    {el.city}</div>
                <div><i class="fas fa-envelope-square"></i> {el.email}</div>
              </Card.Text>
              <Card.Text>
              {el.job_title} at {el.company}
              </Card.Text> 
              {changeProfile(el)} 


              {/* {user.email === el.email? <div className="container buttonCandidate">      
              <Link to={`/candidates/${el.id}`}><Button variant="primary">Edit</Button></Link>
              <Button variant="danger" onClick={()=>removeCandidate(el.id)}>Remove</Button> 
              </div>:<></>} */}


            </Card.Body>
          </Card></div>
        })
    };


    return (
        <div className="bigolwrapper">
            
            <div className="fluid-container candidateListTitle">Candidates' List:</div>

            {/* <Link to="/createcandidate"><button>Create Candidate</button></Link> */}
            <div className="fluid-container d-flex justify-content-center" style={{margin:'0px 0px 0px 85px', 
            // border:"1px solid black"
            }}>
                <div className="row">      
                      {renderCards()}
</div>
            </div>
        </div>
    )
}
