import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protect = (props) => {
  const {Component} = props;
    
  const navigate = useNavigate();
  
  
  useEffect(()=>{
      let UserValid = localStorage.getItem("userdatatoken")
      if(!UserValid){
        navigate('/login')
      }
      
  }, [navigate])


  return (
    <div><Component/></div>
  )
}

export default Protect