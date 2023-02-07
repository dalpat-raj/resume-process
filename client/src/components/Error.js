import React from 'react'
import { useNavigate } from 'react-router-dom'
import error from "../assets/error.png"

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className='container__fluid'>
        <div className="error">
        <img src={error} alt="" />
        <button onClick={()=>navigate(-1)} className='main_blue_button'>Go Back</button>
        </div>
    </div>
  )
}

export default Error