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

    async function handleSchools () {
 
      let formdata = {name, details, links, image}

       let submission = await fetch("https://travel4college.herokuapp.com/api/schools", {
           method: "POST",
           body: formdata
       });
       console.log("Data has been saved");
    }

    function previewFile() {
        // const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
      
        reader.addEventListener("load", function () {
          // convert image file to base64 string
          setImage(reader.result);
          
        //   preview.src = reader.result;
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
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
                            <input type="file" onChange={previewFile} className="form-control" placeholder=""/>
                        </div>
                        
                        <Button onClick={handleSchools} className="btn btn-primary col-md-12">Add School</Button>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addproduct;