import Header from "./Header";
import React, {useState, useEffect} from 'react';
import {Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function Addproduct() 
{
    const [name, setName] = useState()
    const [details, setDetail] = useState()
    const [links, setLinks] = useState()
    const [image, setImage] = useState()
    const history = useHistory();

    async function handleSchools () {
       let formdata = new FormData();
       formdata.append('name', name); 
       formdata.append('details', details); 
       formdata.append('links', links); 
       formdata.append('image', image); 

       let submission = await fetch("https://travel4college.herokuapp.com/api/schools", {
           method: "POST",
           body: formdata
       });
        history.push('/allschools')
    }

    return (
        <>
            <Header/>
            <h5>ADD SCHOOLS</h5>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        
                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-envelope" id="basic-addon1"></span>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="School Name"/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-unlock-alt" id="basic-addon1"></span>
                            <input type="text" value={details} onChange={(e) => setDetail(e.target.value)} className="form-control" placeholder="Details"/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-link" id="basic-addon1"></span>
                            <input type="text" value={links} onChange={(e) => setLinks(e.target.value)} className="form-control" placeholder="Website Link"/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-file" id="basic-addon1"></span>
                            <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control" placeholder=""/>
                        </div>
                        
                        <Button onClick={handleSchools} className="btn btn-primary col-md-12">Add School</Button>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addproduct;