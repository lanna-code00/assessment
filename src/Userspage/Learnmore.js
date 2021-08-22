import { withRouter } from "react-router-dom";
import React, {useEffect, useState} from 'react';

const Learnmore = (props) => {
    const [state, setstate] = useState([]);

    useEffect( async () => {
        let result = await fetch(`https://travel4college.herokuapp.com/api/getschoolname/${props.match.params.id}`);
        result = await result.json();
        setstate(result);
    }, [])

    return (
        <>
           <div className="container-fluid">
               <div className="row mt-5">
                   <h2>More Enquiries</h2>
                    <div className="card mb-3 mt-5" style={{ border:'none' }}>
                    <div className="row g-0 mt-5">
                        <div className="col-md-4">
                        <img src={`https://travel4college.herokuapp.com/${state.image}`} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title"><b>{state.name}</b></h5>
                        <p className="card-text">{state.details}</p>
                            <a href={state.links} target="_blank"><button className="card-text btn btn-primary text-light">Apply</button> </a>
                        </div>
                        </div>
                    </div>
                    </div>
               </div>
           </div> 
        </>
    )
}

export default withRouter(Learnmore);