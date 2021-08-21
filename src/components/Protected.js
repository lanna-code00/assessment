import Header from './Header.js'
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

function Protected({Cmp}) 
{
    let history = useHistory();
    useEffect(() => {
      if(!localStorage.getItem('UserInfo')){
        history.push("/login")
      }
    },[])
    return (
        <>
           <Cmp/>
        </>
    )
}

export default Protected;