import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import banner2 from '../assets/banner2.png';
import axios from 'axios';
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import Navbar from './Navbar';
import Footer from './Footer';
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/LoginSchema";



const Login = () => {
    const navigate = useNavigate()

    const [showpass, setShowpass] = useState(false)
    // const [inputValue, setInputValue] = useState({
    //     email:'',
    //     password:'',
    // })

    // const handleChang = ({ target: { value, name } }) => {
    //     setInputValue({
    //         ...inputValue,
    //         [name]: value
    //     })
    // }


    // const loginUser = () => {
    //     const {email, password} = inputValue;

    //     if(!email){
    //         alert("insert email")
    //     }else if(!email.includes('@')){
    //         alert('invailed Email')
    //     }else if(!password){
    //         alert('insert password')
    //     }else{
            
          
    //     }
    // }

    const initialValues = {
        email: "",
        password: "",
      };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        
        // post login 
        axios.post('api/login', {
            email: values.email,
            password: values.password,
        }).then((res)=>{
            if(res.status === 200){
                localStorage.setItem("userdatatoken", res.data.results.token)
                navigate(-1)
            }else{
                alert("login Filed")
            }
        }) 
        action.resetForm();
        },
    });


  return (
    <>
    <Navbar/>
    <div className='container__fluid'>
    <div className="login__container">
        <div className="login__row">
            <div className="login__col section_heading">
                <form onSubmit={handleSubmit} className="login__form">
                <h2><span>Log</span><span>In</span></h2>
                    <div className="col">
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder='email' 
                            name="email" 
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                        />
                        {errors.email && touched.email ? (
                        <span className="form-error">{errors.email}</span>
                        ) : null}
                    </div>
                    <div className="col">
                        <label>Password</label>
                        <input 
                            type={showpass ? "text" : "password"}  
                            placeholder='password' 
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}  
                        />
                        {errors.password && touched.password ? (
                        <span className="form-error">{errors.password}</span>
                        ) : null}
                        <small onClick={()=>setShowpass(!showpass)}>{showpass ? <AiFillEyeInvisible/> : <AiFillEye/>}</small>
                    </div>
                    <div className="button">
                        <button type='submit'  className='main_blue_button login__button'>Login</button>
                        <button className='register__button' onClick={()=>navigate('/register')}>Register</button>
                        <button className='forgate__button' onClick={()=>navigate('/forgatepass')}>forgate password</button>
                    </div>
                </form>
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