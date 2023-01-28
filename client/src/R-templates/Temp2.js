import React, { useEffect, useState } from "react";
import { StoreState } from "../context/Context";

const Temp2 = () => {
  const {state: { input_data }, dispatch} = StoreState();

  const [inputObject] = useState({
    firstname: "",
    lastname: "",
    position: "",
    phone: "",
    email: "",
    website: "",
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
    reference: "",
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
    position3: "",
    company3: "",
    fromyear5: "",
    toyear5: "",
    companydescription3: "",
    companydescription33: "",
    companydescription333: "",
  });
    
  useEffect(() => {
    dispatch({ type: "SET_INPUT", payload: inputObject });
  },[inputObject, dispatch]);

  const {
    firstname,
    lastname,
    position,
    phone,
    email,
    website,
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
    reference,
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
    position3,
    company3,
    fromyear5,
    toyear5,
    companydescription3,
    companydescription33,
    companydescription333,
  } = input_data ? input_data : ''
    
  return (
    <div className="template4__container">
      <div className="temp4__main">
        <div className="name">
          <h2>{firstname} {lastname}</h2>
          <p>{position}</p>
        </div>
        <div className="details">
          <h2>CONTACT</h2>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{website}</p>
        </div>
        <div className="education">
          <h2>EDUCATION</h2>
          <div className="qualification__1">
            <h6>{qualification1}</h6>
            <p>{univercity1}</p>
            <p>{fromyear1} - {toyear1}</p>
          </div>
          <div className="qualification__2">
            <h6>{qualification2}</h6>
            <p>{univercity2}</p>
            <p>{fromyear2} - {toyear2}</p>
          </div>
        </div>
        <div className="skill">
          <h2>SKILL</h2>
          <p>{skill1}</p>
          <p>{skill2}</p>
          <p>{skill3}</p>
          <p>{skill4}</p>
        </div>
        <div className="references">
          <h2>REFERENCES</h2>
          <p>{reference}</p>
        </div>
      </div>
      <div className="temp4__main temp__main__2">
        <div className="summary">
          <h2>SUMMARY</h2>
          <p>{summary}</p>
        </div>
        <div className="experience">
          <div className="experience__1">
            <h2>WORK EXPERIENCE</h2>
            <h6>{position1}</h6>
            <p>{company1}</p>
            <h5>{fromyear3} - {toyear3}</h5>
            <ul>
              <li>{companydescription1}</li>
              <li>{companydescription11}</li>
              <li>{companydescription111}</li>
            </ul>
          </div>
          <div className="experience__2">
            <h6>{position2}</h6>
            <p>{company2}</p>
            <h5>{fromyear4} - {toyear4}</h5>
            <ul>
              <li>{companydescription2}</li>
              <li>{companydescription22}</li>
              <li>{companydescription222}</li>
            </ul>
          </div>
          <div className="experience__3">
            <h6>{position3}</h6>
            <p>{company3}</p>
            <h5>{fromyear5} - {toyear5}</h5>
            <ul>
              <li>{companydescription3}</li>
              <li>{companydescription33}</li>
              <li>{companydescription333}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
    
  }


export default Temp2;