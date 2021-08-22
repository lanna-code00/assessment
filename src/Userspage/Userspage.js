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

    document.body.style = 'background: azure;';

    useEffect( async () => {
       let myschools = await fetch("http://localhost:8000/api/allschool");
       myschools = await myschools.json();
       setData(myschools);
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
            <Navbar.Brand href="#home"><b>Explore College and<br/> Universities</b></Navbar.Brand>
            <Nav className="ms-auto">
            <div className="form-group has-search">
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text"  onChange={(e) => setQ(e.target.value)} value={q} className="form-control" placeholder="Search" />
  </div>
            </Nav>

            </Container>
        </Navbar>

        <div className="container">
                <div className="row">
                    {search(data).map((school) => {
                        return (
                            <div className="col-md-3">
                                <div className="card mb-2">
                                <img className="card-img" height="330" src={`http://localhost:8000/${school.image}`} alt="Schools" />
                                  <div className="card-img-overlay text-white position-absolute bottom-0 start-0">
                        <h5 className="card-title position-absolute m-5 bottom-0 start-0">{school.name}</h5>
                        <Link to={`/learnmore/${school.id}`} style={{ textDecoration:'none', fontSize: "20px", color: 'red' }} color="secondary" className="position-absolute bottom-0 start-0 m-2">
                            learn more...
                        </Link>
                                  </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
          </div>

        </>

    )
}

export default Userspage;