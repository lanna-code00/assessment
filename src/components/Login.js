import Header from './Header.js'
import React, {useState, useEffect} from 'react';
import {Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function Login() 
{
    let history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
       if (localStorage.getItem('UserInfo')) {
           history.push('/add');
       }
    }, [])

    async function handleLogin ()
    {
        let user = {email, password};
        
        let result = await fetch("http://localhost:8000/api/login", {
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
            <h1>Login page</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">

                        <div className="card rounded m-2 p-5">

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-envelope" id="basic-addon1"></span>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="E-mail"/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-unlock-alt" id="basic-addon1"></span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password"/>
                        </div>
                        
                        <Button onClick={handleLogin} className="btn btn-primary col-md-12">Submit</Button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;