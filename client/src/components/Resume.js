import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreState } from '../context/Context';


const Resume = () => {
    const {dispatch} = StoreState();
    const navigate = useNavigate();

    const [Temp_Data] = useState([
    {
        img: "./images/T1.jpg",
        id: 1,
        category: "creative",
      },
      {
        img: "./images/T2.jpg",
        id: 2,
        category: "simple",
      },
      {
        img: "./images/T3.jpg",
        id: 3,
        category: "modern",
      },
      {
        img: "./images/T4.jpg",
        id: 4,
        category: "professional",
      },
      {
        img: "./images/T5.jpg",
        id: 5,
        category: "modern",
      },
      {
        img: "./images/T6.jpg",
        id: 6,
        category: "simple",
      },
      {
        img: "./images/T7.jpg",
        id: 7,
        category: "simple",
      },
    ]);

    const setTemplates = (code) => {
        dispatch({type: 'SET_SKIN_CODE', payload: code});
        navigate('/edit')
    }

    return (
        <div className="resume container__fluid">
          <div className="resume__heading">
            <h2>Choose <span>Resume</span> Template</h2>
          </div>
          <div className="row">
            {
                Temp_Data ? Temp_Data.map(item=>{
                    return (
                        <div className="col" key={item ? item.id : ''}>
                            <img src={item ? item.img : ''} alt="resumebuildin" />
                            <button className='main_blue_button' onClick={()=>setTemplates(item ? item.id : '')}>Use Templates</button>
                        </div>
                    )
                }) : ''
            }

          </div>
        </div>
    )
}

export default Resume