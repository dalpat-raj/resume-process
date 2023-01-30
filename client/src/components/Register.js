import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import banner2 from '../assets/banner2.png'
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import Navbar from './Navbar';
import Footer from './Footer';


const Register = () => {
    const navigate = useNavigate();
    const [showpass, setShowpass] = useState(false)
    const [showcpass, setShowcpass] = useState(false)
    const [inputValue, setInputValue] = useState({
        name:'',
        email:'',
        password:'',
        cpassword:''
    })

    const handleChang = ({ target: { value, name } }) => {
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }


    const registerUser = () => {
        const {name, email, password, cpassword} = inputValue;

        if(!name){
            alert("insert name")
        }else if(!email){
            alert("insert email")
        }else if(!email.includes('@')){
            alert('invailed Email')
        }else if(!password){
            alert('insert password')
        }else if(password.length < 6){
            alert('minimum 6 word require')
        }else if(!cpassword){
            alert('insert confirm password')
        }else if(password !== cpassword){
            alert('password Not Match')
        }else{
            
            // axios.post('api/register', {
            //     name: name,
            //     email: email,
            //     password: password,
            //     cpassword: cpassword
            // }).then((res)=>{
            //     if(res.status === 200){
            //         navigate('/')
            //     }else{
            //         navigate('/register')
            //     }
            // }) 
        }

    }


  return (
    <>
    <Navbar />
    <div className='container__fluid'>
        <div className="register__container">
            <div className="register__row">
                <div className="register__col section_heading">
                    <div className="register__form">
                    <h2><span>Regis</span><span>ter</span></h2>
                        <div className="col">
                            <label>Name</label>
                            <input type="text" onChange={handleChang} value={inputValue.name} name="name" placeholder='name' />
                        </div>
                        <div className="col">
                            <label>Email</label>
                            <input type="email" onChange={handleChang} value={inputValue.email} name="email" placeholder='email'/>
                        </div>
                        <div className="col">
                            <label>Password</label>
                            <input type={showpass ? "text" : "password"} onChange={handleChang} value={inputValue.password} name="password" placeholder='password'/>
                            <small onClick={()=>setShowpass(!showpass)}>{showpass ? <AiFillEyeInvisible/> : <AiFillEye/>}</small>
                        </div>
                        <div className="col">
                            <label>Re-Enter Password</label>
                            <input type={showcpass ? "text" : "password"} onChange={handleChang} value={inputValue.cpassword} name="cpassword" placeholder='confirm password'/>
                            <small onClick={()=>setShowcpass(!showcpass)}>{showcpass ? <AiFillEyeInvisible/> : <AiFillEye/>}</small>
                        </div>
                        <div className="button">
                            <button onClick={registerUser} className='main_blue_button register__button'>Register</button>
                            <button className='login__button' onClick={()=>navigate('/login')}>Login</button>
                        </div>
                    </div>
                </div>
                <div className="register__col register__col__img">
                    <img src={banner2} alt="resumebuildin.com"/>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Register