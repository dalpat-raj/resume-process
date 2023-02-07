import React from 'react'
import dalpat from "../assets/dalpat.png";
import Footer from "../components/Footer"
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='container__fluid'>
        <div className="about__main">
            <div className="about__row">
                <div className="about__col">
                    <img src={dalpat} alt="resumebuildin.com" />
                </div>
                <div className="about__col">
                    <div className="about__text">
                        <h1>Dalpat Raj</h1>
                        <h2>Devloper <span>& Designer</span></h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eaque distinctio molestiae magnam rerum totam corrupti culpa soluta atque, illum iste, fugit sunt amet vero, explicabo ratione fugiat eos quasi saepe deleniti aliquid  reprehenderit impedit! Unde iusto incidunt vel? Rerum autem sapiente eos.</p>
                        <button className='main_red_button'>Let's Talk</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About