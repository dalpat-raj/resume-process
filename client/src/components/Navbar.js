import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import {CgMenuLeftAlt, CgClose} from 'react-icons/cg';
import  logo from "../assets/logo.png"
// import axios from 'axios';


const Navbar = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState('')
  const [mobile, setMobile] = useState(false)
  

  // useEffect(()=>{
  //   const validUser = localStorage.getItem("userdatatoken")
  //   setUser(validUser)
  // },[])


  // const logoutUser = () => {
  //   axios.get('api/logout', {
  //     headers: {
  //       token: user,
  //       Accept: "application/json"
  //     },
  //     credentials: "include"
  //   }).then((res)=>{
  //     if(res.status === 200){
  //       console.log("user logout",res);
  //       localStorage.removeItem("userdatatoken")
  //       setUser(false)
  //       navigate('/')
  //     }

  //   })

  // }


  return (
    <nav>
      <div className="container__fluid ">
      <div className="row">
        <div className="col logo">
        <NavLink to={"/"}><img src={logo} alt="resumebuildin" /></NavLink>
        </div>
        <div className="col menu__list">
          <ul className={mobile ? 'show' : 'hide'} onClick={()=>setMobile(false)}>
            <li><NavLink to={"/resume"}>Resume</NavLink></li>
            <li><NavLink to={"/coverletter"}>Cover Letter</NavLink></li>
            <li><NavLink to={"/guid"}>Resume Guids</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            {
              // user ? <li><button onClick={logoutUser} className='main_border_button'>Logout</button></li> : 
              <>
              <li><button onClick={()=>navigate('/register')} className='main_red_button'>Register</button></li>
              </>
            }
            
          </ul>
        </div>

        <div className="menu__trigger active">
          <span onClick={()=>setMobile(!mobile)}>{mobile ? <CgClose/> : <CgMenuLeftAlt/>}</span>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar