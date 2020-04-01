// import React,{useState} from 'react'
// import {useHistory} from 'react-router-dom';

// export default function CreateCandidate() {



//     let [dataSubmit, setDataSubmit] = useState({
//         first_name: '',
//         last_name: '',
//         email: '',
//         gender: '',
//         company: '',
//         job_title: '',
//         city: '',
//         country: '',
//         photo_url: ''
//       })

//     const createCandidate = async (el) => {
//         el.preventDefault();
//         const item = dataSubmit
//         const url = 'http://localhost:3020/candidates';
//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(item)
//         })
//         if (response.status===200) {
//           alert('Created Successfully!');
//           setDataSubmit({ first_name: '', last_name: '', email: '', gender: '', company: '', job_title: '', city: '', country: '', photo_url: '' });
//           history.push('/candidates')
//         }
//         else { alert('Create Failure!'); }
//       }

//       let history = useHistory();

//       const onInputChange = (el) => {
//         const name = el.target.name;
//         const value = el.target.value
//         setDataSubmit({
//           ...dataSubmit,
//           [name]: value
//         })
//       }

//     return (
//         <div>
//             <form onSubmit={createCandidate}>
//       <div className="form-row">
//         <div className="form-group col-md-4">
//           <label>First Name</label>
//           <input type="text" className="form-control" placeholder="First Name" name='first_name' value={dataSubmit.first_name} onChange={onInputChange} />
//         </div>
//         <div className="form-group col-md-4">
//           <label>Last Name</label>
//           <input type="text" className="form-control" placeholder="Last Name" name='last_name' value={dataSubmit.last_name} onChange={onInputChange} />
//         </div>
//         <div className="form-group col-md-4">
//           <label>Gender</label>
//           <input type="text" className="form-control" placeholder="Gender" name='gender' value={dataSubmit.gender} onChange={onInputChange} />
//         </div>
//         <div className="form-row">
//           <div className="form-group col-md-6">
//             <label>Company</label>
//             <input type="text" className="form-control" placeholder="Company" name='company' value={dataSubmit.company} onChange={onInputChange} />
//           </div>
//           <div className="form-group col-md-6">
//             <label>Job Title</label>
//             <input type="text" className="form-control" placeholder="Job title" name='job_title' value={dataSubmit.job_title} onChange={onInputChange} />
//           </div>
//         </div>
//       </div>
//       <div className="form-group">
//         <label>Email</label>
//         <input type="email" className="form-control" name='email' placeholder="Email" value={dataSubmit.email} onChange={onInputChange} />
//       </div>
//       <div className="form-group">
//         <label>Photo Link</label>
//         <input type="text" className="form-control" name='photo_url' placeholder="Link" value={dataSubmit.photo_url} onChange={onInputChange} />
//       </div>
//       <div className="form-row">
//         <div className="form-group col-md-6">
//           <label>City</label>
//           <input type="text" className="form-control" name='city' placeholder="City" value={dataSubmit.city} onChange={onInputChange} />
//         </div>
//         <div className="form-group col-md-6">
//           <label>Country</label>
//           <input type="text" className="form-control" name='country' placeholder="Country" value={dataSubmit.country} onChange={onInputChange} />
//         </div>
//       </div>
//       <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//         </div>
//     )
// }
