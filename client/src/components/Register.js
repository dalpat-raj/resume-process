import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import banner2 from '../assets/banner2.png'
import { signUpSchema } from "./schemas/RegisterSchema";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import Navbar from './Navbar';
import Footer from './Footer';


const Register = () => {
    const navigate = useNavigate();
    const [showpass, setShowpass] = useState(false)
    const [showcpass, setShowcpass] = useState(false)


    const initialValues = {
        name: "",
        email: "",
        password: "",
        cpassword: "",
      };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        
        // post request
         axios.post('api/register', {
                name: values.name,
                email: values.email,
                password: values.password,
                cpassword: values.cpassword
            }).then((res)=>{
                if(res.status === 200){
                    navigate(-1)
                }else{
                    navigate('/register')
                }
            }) 
        
        action.resetForm();
      },
    });


  


  return (
    <>
    <Navbar />
    <div className='container__fluid'>
        <div className="register__container">
            <div className="register__row">
                <div className="register__col section_heading">
                    <form onSubmit={handleSubmit} className="register__form">
                    <h2><span>Regis</span><span>ter</span></h2>
                        <div className="col">
                            <label>Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                            />
                            {errors.name && touched.name ? (
                            <span className="form-error">{errors.name}</span>
                            ) : null}
                        </div>
                        <div className="col">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={values.email}
                                placeholder='email'
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
                                name="password" 
                                value={values.password}
                                placeholder='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? (
                            <span className="form-error">{errors.password}</span>
                            ) : null}
                            <small onClick={()=>setShowpass(!showpass)}>{showpass ? <AiFillEyeInvisible/> : <AiFillEye/>}</small>
                        </div>
                        <div className="col">
                            <label>Re-Enter Password</label>
                            <input 
                                type={showcpass ? "text" : "password"}  
                                name="cpassword" 
                                value={values.cpassword}
                                placeholder='confirm password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.cpassword && touched.cpassword ? (
                            <span className="form-error">{errors.cpassword}</span>
                            ) : null}
                            <small onClick={()=>setShowcpass(!showcpass)}>{showcpass ? <AiFillEyeInvisible/> : <AiFillEye/>}</small>
                        </div>
                        <div className="button">
                            <button type='submit' className='main_blue_button register__button'>Register</button>
                            <button type='button' className='login__button' onClick={()=>navigate('/login')}>Login</button>
                        </div>
                    </form>
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