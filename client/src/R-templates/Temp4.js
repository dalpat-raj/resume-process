import React, { useEffect, useState } from "react";
import { StoreState } from "../context/Context";
import "../styles/t-scss/temp4.scss"


const Temp4 = () => {
  const {
    state: { input_data },
    dispatch,
  } = StoreState();

  const [inputObject] = useState({
    firstname:"",
    lastname:"",
    position:"",
    address:"",
    phone:"",
    email:"",


    skill1:"",
    skill2:"",
    skill3:"",
    skill4:"",
    skill5:"",
    skill6:"",

    title1:"",
    Link1:"",
    projectDescription1:"",
    projectDescription11:"",

//project2

    title2:"",
    Link2:"",
    projectDescription2:"",
    projectDescription22:"",
    projectDescription222:"",
   




//education1

    univercity1:"",
    description1:"",
    description11:"",
    description111:"",
    qualification1:"",
    fromyear1:"",
    toyear1:"",

//education2

univercity2:"",
description2:"",
description22:"",
description222:"",
qualification2:"",
fromyear2:"",
toyear2:"",
    

//institute1

    institute1:"",
    position1:"",
    expyearfrom1:"",
    toyearfrom1:"",
    companydescription1:"",
    companydescription11:"",
    companydescription111:"",


//institute2


    institute2:"",
    position2:"",
    expyearfrom2:"",
    toyearfrom22:"",
    companydescription2:"",
    companydescription22:"",
    companydescription222:"",

    //award

    Award1:"",
    Award2:"",
    Award3:""

  });

  useEffect(() => {
    dispatch({ type: "SET_INPUT", payload: inputObject });
  }, [inputObject, dispatch]);

  const {

//personal-information

    firstname,
    lastname,
    position,
    address,
    phone,
    email,


//skills

    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,

//project1

    title1,
    Link1,
    projectDescription1,
    projectDescription11,

//project2

    title2,
    Link2,
    projectDescription2,
    projectDescription22,
    projectDescription222,
   




//education1

    univercity1,
    description1,
    description11,
    description111,
    qualification1,
    fromyear1,
    toyear1,

//education2

univercity2,
description2,
description22,
description222,
qualification2,
fromyear2,
toyear2,
    

//institute1

    institute1,
    position1,
    expyearfrom1,
    toyearfrom1,
    companydescription1,
    companydescription11,
    companydescription111,


//institute2


    institute2,
    position2,
    expyearfrom2,
    toyearfrom22,
    companydescription2,
    companydescription22,
    companydescription222,

    // award
     Award1,
     Award2,
     Award3

   
  } = input_data ? input_data : "";



  return (
    <div>
      <div className="Template4__container">
        {
          // information
        }
        <div className="name-info">
          <h2>
            {firstname} {lastname}
          </h2>
          <span>{address}</span> | <span>{email}</span> | {phone}
          <span>{position}</span>
        </div>

        {
          // techincal skill
        }

        <div className="Tech-skill">
          <h4 className="heading">TECHNICAL SKILL</h4>
          <div className="inner-tech-skill">
            <ul>
              <li>{skill1}</li>
              <li>{skill2}</li>
              <li>{skill3}</li>
              <li>{skill4}</li>
              <li>{skill5}</li>
              <li>{skill6}</li>
            </ul>
          </div>
        </div>

        {
          //PROJECT
        }

        <div className="project">
          <h4 className="heading">PROJECT</h4>
          <div className="inner-project">
            <h4 className="project-name">
              {title1} | <span>{Link1}</span>
            </h4>
            <ul className="project-details">
              <li>{projectDescription1}</li>
              <li>{projectDescription11}</li>
            </ul>
          </div>

          <div className="inner-project">
            <h4 className="project-name">
              {title2} | <span>{Link2}</span>
            </h4>
            <ul className="project-details">
              <li>{projectDescription2}</li>
              <li>{projectDescription22}</li>
              <li>{projectDescription222}</li>
            </ul>
          </div>
        </div>

        {
          //education
        }

        <div className="education">
          <h4 className="heading">EDUCATION</h4>
          <div className="temp1-inner-education">
            <div>
              <div className="college-container">
                <h4 className="college-name">{univercity1}</h4>{" "}
                <span>
                  {fromyear1} to {toyear1}
                </span>
              </div>

              <strong>{qualification1}</strong>
            </div>
            <ul className="education-details">
              <li>{description1}</li>
              <li>{description11}</li>
              <li>{description111}</li>
            </ul>
          </div>

          <div className="temp1-inner-education">
            <div>
              <div className="college-container">
                <h4 className="college-name">{univercity2}</h4>{" "}
                <span>
                  {fromyear2} to {toyear2}
                </span>
              </div>
              <strong>{qualification2}</strong>

            </div>
            <ul className="education-details">
              <li>{description2}</li>
              <li>{description22}</li>
              <li>{description222}</li>

            </ul>
          </div>
        </div>

        {
          //work-exprience
        }
        <div>
          <h4 className="heading">WORK-EXPRIENCE</h4>

          <div className="inner-workexp">
            <div className="workexp-container">
              <h4 className="company-name">{institute1}</h4>{" "}
            <div> <span>{expyearfrom1}</span> to   <span>{toyearfrom1}</span> </div> 
            </div>

            <strong>{position1}</strong>
            <ul className="education-details">
              <li>{companydescription1}</li>
              <li>{companydescription11}</li>
              <li>{companydescription111}</li>

            </ul>
          </div>

          <div className="inner-workexp">
            <div className="workexp-container">
              <h4 className="company-name">{institute2}</h4>{" "}
            <div> <span>{expyearfrom2}</span> to   <span>{toyearfrom22}</span> </div> 
            </div>

            <strong>{position2}</strong>
            <ul className="education-details">
              <li>{companydescription2}</li>
              <li>{companydescription22}</li>
              <li>{companydescription222}</li>

            </ul>
          </div>
        </div>

        {
          // award-achivement
        }

        <div>
          <h4 className="heading">AWARD & ACHIVEMENTS</h4>

          <div className="inner-award">
            <ul className="award-details">
              <li>{Award1}</li>
              <li>{Award2}</li>
              <li> {Award3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp4;