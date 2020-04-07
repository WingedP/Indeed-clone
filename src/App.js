import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch, Link, Redirect, useHistory} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CandidatesPage from "./pages/CandidatesPage";
import CompanyPage from "./pages/CompanyPage";
import CandidateProfile from "./pages/CandidateProfile";
import Navibar from "./components/Navibar";
import LoginPage from "./pages/LoginPage";
import {useSelector} from 'react-redux';

// import CreateCandidate from "./pages/CreateCandidate";

function App() {
  // let history=useHistory();

  // let [user,setUser]=useState({authenticate:true})
  let user=useSelector(state=>state.user)

  const ProtectedRoute=(props)=>{
    if(user.authenticate==true){
      return (
        <Route {...props} /> // <Route path="/editcandidate" exact render={(props)=><CandidatePage {...props}/>
      );    
    }
    else {
      return <Redirect to="/login" />;
    }
  }


  return (
    <div>
      <Navibar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/company" exact component={CompanyPage} />
        <Route path="/candidates" exact component={CandidatesPage} />
        <Route path="/login" exact component={LoginPage} />
        {/* <Route path="/createcandidate" exact component={CreateCandidate} />
        <Route path="/login" exact component={LoginPage} /> */}
        {/* <Route path="/candidates/:id" component={CandidateProfile} /> */}
        <ProtectedRoute path="/candidates/:id" exact render={props => <CandidateProfile {...props} />}
        /> 
        <Route path="/" exact component={HomePage} />
     

      </Switch>
    </div>
  );
}

export default App;
