import React from 'react'
import error from "../assets/error.png"

const Error = () => {
  return (
    <div className='container__fluid'>
        <div className="error">
        <img src={error} alt="" />
        <button className='main_blue_button'>Go To Home</button>
        </div>
    </div>
  )
}

export default Error