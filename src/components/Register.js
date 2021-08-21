import {Button} from 'react-bootstrap';

function Register() 
{
    return (
        <>
            <h5>Register page</h5>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">

                        <div className="card rounded m-2 p-5">

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-user" id="basic-addon1"></span>
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-envelope" id="basic-addon1"></span>
                            <input type="text" className="form-control" placeholder="E-mail"/>
                        </div>

                        <div className="input-group mb-5">
                            <span className="input-group-text fa fa-unlock-alt" id="basic-addon1"></span>
                            <input type="text" className="form-control" placeholder="password"/>
                        </div>
                        
                        <Button className="btn btn-primary col-md-12">Submit</Button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;