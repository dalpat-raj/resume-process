import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import banner2 from '../assets/banner2.png';
import axios from 'axios';
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import Navbar from './Navbar';
import Footer from './Footer';



const Login = () => {
    const navigate = useNavigate()

    const [showpass, setShowpass] = useState(false)
    const [inputValue, setInputValue] = useState({
        email:'',
        password:'',
    })

    const handleChang = ({ target: { value, name } }) => {
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }


    const loginUser = () => {
        const {email, password} = inputValue;

        if(!email){
            alert("insert email")
        }else if(!email.includes('@')){
            alert('invailed Email')
        }else if(!password){
            alert('insert password')
        }else{
            
            axios.post('api/login', {
                email: email,
                password: password,
            }).then((res)=>{
                if(res.status === 200){
                    localStorage.setItem("userdatatoken", res.data.results.token)
                    navigate('/')
                }else{
                    alert("login Filed")
                }
            }) 
        }
    }

  return (
    <>
    <Navbar/>
    <div className='container__fluid'>
    <div className="login__container">
        <div className="login__row">
            <div className="login__col section_heading">
                <div className="login__form">
                <h2><span>Log</span><span>In</span></h2>
                    <div className="col">
                        <label>Email</label>
                        <input type="text" onChange={handleChang} value={inputValue.email} name="email" placeholder='email' />
                    </div>
                    <div className="col">
                        <label>Password</label>
                        <input type={showpass ? "text" : "password"} onChange={handleChang} value={inputValue.password} name="password" placeholder='password' />
                        <small onClick={()=>setShowpass(!showpass)}>{showpass ? <AiFillEyeInvisible/> : <AiFillEye/>}</small>
                    </div>
                    <div className="button">
                        <button onClick={loginUser}  className='main_blue_button login__button'>Login</button>
                        <button className='register__button' onClick={()=>navigate('/register')}>Register</button>
                    </div>
                </div>
            </div>
            <div className="login__col login__col__img">
                <img src={banner2} alt="resumebuildin.com"/>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
   
  
  )

}

export default Login