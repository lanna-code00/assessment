import {Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Header from './Header.js'

function Register() 
{
    useEffect(() => {
      if (localStorage.getItem('UserInfo')) {
        history.push("/add");
      }
    }, [])
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let history = useHistory();

    async function handleSignUp () {
        let user = {name, email, password};
        
       let result = await fetch("https://travel4college.herokuapp.com/api/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json"
            }
        })

        result = await result.json();
        localStorage.setItem('UserInfo', JSON.stringify(result));
        history.push("/add");
    }

    return (
        <>
        <Header/>

            <h5>Register page</h5>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">

                        <div className="card rounded m-2 p-5">

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-user" id="basic-addon1"></span>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name"/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-envelope" id="basic-addon1"></span>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="E-mail"/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-unlock-alt" id="basic-addon1"></span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password"/>
                        </div>
                        
                        <Button onClick={handleSignUp} className="btn btn-primary col-md-12">Submit</Button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;