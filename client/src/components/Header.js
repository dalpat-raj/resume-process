import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner1 from "../assets/banner11.png"

const Header = () => {
    const navigate = useNavigate()
  return (
    <header className="header__main container__fluid">
        <div className="header__row">
            <div className="header__col  animate__animated animate__fadeInLeft">
                <div className="Header__text">
                    <p>FREE RESUME MAKER AND CV BUILDER ONLINE</p>
                    <h2>Create <em>Professional</em> <span>Resume</span> In Just Minutes</h2>
                    <small>
                        Create your resume easily with our free builder and professional
                        templates and Build your brand-new resume in as little as 5 minutes
                    </small>
                    <h5>Try For Free</h5>
                    <button className='main_red_button' onClick={()=>navigate('/resume')}>Create Resume</button>
                </div>
            </div>

            <div className="header__col animate__animated animate__fadeInRight">
                <img src={banner1} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header