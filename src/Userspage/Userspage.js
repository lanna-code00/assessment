import React, {useState, useEffect} from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Userspage.css';


function Userspage()
{
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["name"]);
    const [change, setchange] = useState(true)
    document.body.style = 'background: azure;';
    // let change = true;

    useEffect( async () => {
       let myschools = await fetch("https://travel4college.herokuapp.com/api/allschool");
       myschools = await myschools.json();
       console.log(myschools);
       setData(myschools);
       if (myschools) {
           setchange(false)
       }
    }, []);

    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    return (

        <>

        <Navbar style={{ backgroundColor: 'none !important' }}>
            <Container>
            <Navbar.Brand href="#home">
                    <div className="col-md-3">
                       <b>Explore Colleges and <br/>Universities</b> 
                    </div>
            </Navbar.Brand>
            <Nav className="ms-auto">
            <div className="form-group has-search me-3 col-md-12">
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text" onChange={(e) => setQ(e.target.value)} value={q} className="form-controls col-md-12" placeholder="Search" />
  </div>
            </Nav>

            </Container>
        </Navbar>

        {
            change ? 
        <div className="spinner-grow spinner" id="spin" style={{ width: '90px', height: '90px' }} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
            :
            <>
        <div className="container">
                <div className="row">
                    {search(data).map((school) => {
                        return (
                            <div className="col-md-3 px-1">
                                <div className="card mb-2">
                                <img className="card-img" height="330" style={{ maxWidth:'600px' }} src={school.image} alt="Schools" />
                                  <div className="card-img-overlay text-white position-absolute bottom-0 start-0">
                        <h4 className="card-title position-absolute m-5 bottom-0 px-2" style={{ textAlign: "left",
  textAlignLast: "left"}}>{school.name}</h4>
                        {/* <Link to={`/learnmore/${school.id}`} style={{ textDecoration:'none', fontSize: "20px"}} color="secondary" className="position-absolute bottom-0 start-1 m-2">
                           <button className="btn btn-danger btn-sm">learn more...</button>  
                        </Link> */}
                                  </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
          </div>
            </>
        }
        </>

    )
}

export default Userspage;