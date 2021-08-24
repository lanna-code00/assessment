import Header from "./Header"
import React, {useState, useEffect} from "react";
import {Table} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Allschools = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       getSchools()
    }, []);

    async function handleDelete (deleteId) {
         let  deleteschool = await fetch(`https://travel4college.herokuapp.com/api/delete/${deleteId}`, {
             method: "DELETE",
         });
         deleteschool = await deleteschool.json();
         getSchools();
    }

    async function getSchools () {
        let myschools = await fetch("https://travel4college.herokuapp.com/api/allschool");
        myschools = await myschools.json();
        setData(myschools);
        console.log(data)
    }

    return (
        <>
            <Header/>
            <h3>ALL SCHOOLS</h3>
             <div className="container-fluid">
                 <div className="row">
                        <div className="col-md-12">

                <table class="table table-striped table-bordered border-primary">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Website</th>
                    <th scope="col">Images</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((school, i) => {
                        return (
                            <tr key={school.id}>
                                <th scope="row">{i + 1}</th>
                                <td>{school.name}</td>
                                <td>{school.details}</td>
                                <td><a href={school.links} target="_blank">{school.links}</a> </td>
                                <td><img src={school.image} style={{ width: '40px', height: '40px' }}/></td>
                                <td>
                                    <Link to={`/update/${school.id}`}>
                                    <span className="fa fa-edit p-2 text-primary" style={{ cursor: 'pointer' }}></span> 
                                    </Link>
                                    
                                    <span onClick={() => handleDelete(school.id)} style={{ cursor: 'pointer' }} className="fa fa-trash text-danger"></span>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
                </table>
                
                        </div>
                 </div>
             </div>
        </>
    )
}

export default Allschools;