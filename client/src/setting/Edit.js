import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreState } from '../context/Context';
import TempLoder from './TempLoder';
import edit from '../assets/edit.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Edit = () => {
  const {state: {skin_code}} = StoreState();
  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    <div className='edit__main container__fluid'>
        <div className="edit__col">
          <div className="edit__text__button">
            <h2>Resumes <span>&</span> Cover Letters</h2>
            <button onClick={()=>navigate('/resume')} className='main_blue_button'>+ Create New</button>
          </div>
          <hr className='edit__hr' />

          <div className="edit__row">

            <div className='temp__loading edit__col__width'>
              <img src={`/images/T${skin_code}.jpg`} alt="resumebuildin" />
              <div className="temp__show">
                <TempLoder skin_code={skin_code}  />
              </div>
            </div>

            <div className='edit__button edit__col__width'>
              <h4>Untitled</h4>
              <p>Updated 17 January, 17:02</p>
              <button className='main_red_button' onClick={()=>navigate('/editor')}>Editor</button>
            </div>

            <div className="box edit__col__width">
              <h5>Effortlessly make a job-worthy resume and cover letter that gets you hired faster</h5>
            </div>

            <div className="edit__resume__text edit__col__width">
              <h4>New Resume</h4>
              <p>Create a tailored resume for each job application double your chances of getting hired!</p>
            </div>

          </div>

        </div>

        <div className="edit__col edit__col__right">

        </div>
        
    </div>
    <Footer/>
    </>
    
  )
}

export default Edit