import Header from "./Header"
import React, {useState, useEffect} from "react";
import {Table} from "react-bootstrap";

const Allschools = () => {
    const [data, setData] = useState([]);

    useEffect( async () => {
       let myschools = await fetch("http://localhost:8000/api/allschool");
       myschools = await myschools.json();
       setData(myschools);
    }, []);

    return (
        <>
            <Header/>
            <h3>ALL SCHOOLS</h3>
            <Table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Website</th>
                    <th>Image</th>
                </tr>

                {
                    data.map((school) => {
                        return (
                            <tr>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </Table>
        </>
    )
}

export default Allschools;