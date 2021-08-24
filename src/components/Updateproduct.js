import Header from "./Header";
import {withRouter, useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';

function Updateproduct(props) 
{
    const [state, setstate] = useState([]);
    const [name, setName] = useState("");
    const [details, setDetail] = useState("");
    const [links, setLinks] = useState("");
    const [image, setImage] = useState();
    const history = useHistory();
    let editId = props.match.params.id;

    useEffect( async () => {
        let result = await fetch(`https://travel4college.herokuapp.com/api/getschool/${editId}`);
        result = await result.json();
        setstate(result);
    }, [])

   async function updateSchools () {
    let formdata = new FormData();
    formdata.append('name', name); 
    formdata.append('details', details); 
    formdata.append('links', links); 
    formdata.append('image', image); 
      let  editschool = await fetch(`https://travel4college.herokuapp.com/api/edit/${editId}`, {
        method: "POST",
        body: formdata
    });
        editschool = await editschool.json();
        console.log(editschool);
        
        history.push("/allschools");
    }

    return (
        <>
            <Header/>
            <h1>Updateproduct page</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        
                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-envelope" id="basic-addon1"></span>
                            <input type="text" placeholder={state.name} defaultValue={state.name} onChange={(e) => setName(e.target.value)} className="form-control"/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-unlock-alt" id="basic-addon1"></span>
                            <textarea className="form-control" placeholder={state.details} defaultValue={state.details} onChange={(e) => setDetail(e.target.value)}>
                            </textarea>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-link" id="basic-addon1"></span>
                            <input type="text" placeholder={state.links} defaultValue={state.links} onChange={(e) => setLinks(e.target.value)} className="form-control"/>
                        </div>

                        <div className="input-group mb-5">
                            <img src={state.image} style={{width: 100}}/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-file" id="basic-addon1"></span>
                            <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control" placeholder=""/>
                        </div>
                        
                        <Button onClick={updateSchools} className="btn btn-primary col-md-12">Update School</Button>
                    
                    </div>
                </div>
            </div>

        </>
    )
}

export default withRouter(Updateproduct);