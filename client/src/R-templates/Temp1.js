import React, { useEffect, useState} from "react";
import { StoreState } from "../context/Context";

const Temp1 =(props) => {
  const {state: { input_data }, dispatch} = StoreState();



  const [inputObject] = useState({
    firstname: "",
    lastname: "",
    position: "",
    address: "",
    phone: "",
    email: "",
    qualification1: "",
    univercity1: "",
    fromyear1: "",
    toyear1: "",
    qualification2: "",
    univercity2: "",
    fromyear2: "",
    toyear2: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    summary: "",
    position1: "",
    company1: "",
    fromyear3: "",
    toyear3: "",
    companydescription1: "",
    companydescription11: "",
    companydescription111: "",
    position2: "",
    company2: "",
    fromyear4: "",
    toyear4: "",
    companydescription2: "",
    companydescription22: "",
    companydescription222: "",
  });


  useEffect(() => {
    dispatch({ type: "SET_INPUT", payload: inputObject });
  },[inputObject, dispatch]);

  const {
    firstname,
    lastname,
    position,
    address,
    phone,
    email,
    qualification1,
    univercity1,
    fromyear1,
    toyear1,
    qualification2,
    univercity2,
    fromyear2,
    toyear2,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    summary,
    position1,
    company1,
    fromyear3,
    toyear3,
    companydescription1,
    companydescription11,
    companydescription111,
    position2,
    company2,
    fromyear4,
    toyear4,
    companydescription2,
    companydescription22,
    companydescription222,
  } = input_data ? input_data : '';


  return (
    <div className="temp__main">
     <div className="Template2-container">
        <div className="temp2-info">
          <h2>
            <span className="fname">{input_data?firstname:''}</span> <span>{input_data?lastname:''}</span>
          </h2>
          <p>{input_data?position:''}</p>
          <p>
            <span className="temp20address">{input_data?address:''}</span> |&nbsp;
            <span className="temp2-phone">{input_data?phone:''}</span> |&nbsp;
            <span className="temp2-email">{input_data?email:''}</span>
          </p>
        </div>
        <hr className="line" />
  
        <div className="temp2-summary">
          <p className="temp2-haeding">PROFESSIONAL SUMMARY</p>
          <p className="summary" dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <hr />
  
        <div className="temp2-skill">
          <div className="temp-2-pro-skill">
            <p className="temp2-haeding">PROFESSIONAL SKILL</p>
  
            <div className="all-pro-skill">
              <span className="skill">{input_data?skill1:''}</span>{" "}
              <span className="skill">{input_data?skill2:''}</span>
              <span className="skill">{input_data?skill3:''}</span>{" "}
            </div>
          </div>
          <div className="temp-2-tech-skill">
            <p className="temp2-haeding">TECHNICAL SKILL</p>
  
            <div className="all-tech-skill">
              <span className="skill">{input_data?skill4:''}</span>{" "}
              <span className="skill">{input_data?skill5:''}</span>
              <span className="skill">{input_data?skill6:''}</span>{" "}
            </div>
          </div>
        </div>
        <hr />
  
        <div className="temp2-education">
          <p className="temp2-haeding">EDUCATION</p>
          <div className="temp2-inner-education">
            <div className="temp2-education1">
              <div className="temp2-education-details ">
                <h3>{input_data?qualification1:''}</h3>
                <span>
                  {input_data?fromyear1:''} - {input_data?toyear1:''}
                </span>
              </div>
              <div className="education-details">
                <p>{input_data?univercity1:''}</p>
              </div>
              <p>description1</p>
            </div>
            <div className="temp2-education1">
              <div className="temp2-education-details ">
                <h3>{input_data?qualification2:''}</h3>
                <span>
                  {input_data?fromyear2:''} - {input_data?toyear2:''}
                </span>
              </div>
              <div className="education-details">
                <p>{input_data?univercity2:''}</p>
              </div>
              <p>description2</p>
            </div>
          </div>
        </div>
  
        <div className="temp2-work-exp">
          <p className="temp2-haeding">WORK-EXPRIENCE</p>
          <div className="temp2-exp1">
            <div className="temp2-exp-details ">
              <h3>{input_data?company1:''}</h3>
              <span>
                {input_data?fromyear3:''} - {input_data?toyear3:''}
              </span>
            </div>
            <div className="temp2-exp-details">
              <p>{input_data?position1:''}</p>
            </div>
  
            <div className="temp2-exp-points">
              <ul>
                <li>{input_data?companydescription1:''}</li>
                <li>{input_data?companydescription11:''}</li>
                <li>{input_data?companydescription111:''}</li>
              </ul>
            </div>
          </div>
          <br />
  
          <div className="temp2-exp1">
            <div className="temp2-exp-details ">
              <h3>{input_data?company2:''}</h3>
              <span>
                {input_data?fromyear4:''} - {input_data?toyear4:''}
              </span>
            </div>
            <div className="temp2-exp-details">
              <p>{input_data?position2:''}</p>
            </div>
  
            <div className="temp2-exp-points">
              <ul>
                <li>{input_data?companydescription2:''}</li>
                <li>{input_data?companydescription22:''}</li>
                <li>{input_data?companydescription222:''}</li>
              </ul>
            </div>
          </div>
          <br />
  
        </div>
      </div>
    </div>
   
  )
  
};

export default Temp1;
