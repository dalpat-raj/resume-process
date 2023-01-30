import React, { useEffect, useState } from "react";
import { StoreState } from "../context/Context";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import "../styles/t-scss/temp6.scss"

const Temp6 = () => {
  const {
    state: { input_data },
    dispatch,
  } = StoreState();

  const [inputObject] = useState({
    //personal information

    firstname:"",
    lastname:"",
    position:"",
    summary:"",
    email:"",
    phone:"",
    address:"",
    linkedin:"",

    //skills

    skill1:"",
    skill2:"",
    skill3:"",
    skill4:"",
    skill5:"",

    //exprienece1
    position1:"",
    workfrom1:"",
    workto1:"",
    company1:"",
    companydescription1:"",
    companydescription11:"",
    companydescription111:"",

    //exprienece2

    position2:"",
    workfrom2:"",
    workto2:"",
    company2:"",
    companydescription2:"",
    companydescription22:"",
    companydescription222:"",

    //study
    univercity1:"",
    studyfrom1:"",
    studyto1:"",
    studydesc1:"",
    studydesc11:"",
    studydesc111:"",

    //study2
    univercity2:"",
    studyfrom2:"",
    studyto2:"",
    studydesc2:"",
    studydesc22:"",
    studydesc222:"",
  });

  useEffect(() => {
    dispatch({ type: "SET_INPUT", payload: inputObject });
  }, [inputObject, dispatch]);

  const {
    //personal information

    firstname,
    lastname,
    position,
    summary,
    email,
    phone,
    address,
    linkedin,

    //skills

    skill1,
    skill2,
    skill3,
    skill4,
    skill5,

    //exprienece1
    position1,
    workfrom1,
    workto1,
    company1,
    companydescription1,
    companydescription11,
    companydescription111,

    //exprienece2

    position2,
    workfrom2,
    workto2,
    company2,
    companydescription2,
    companydescription22,
    companydescription222,

    //study
    univercity1,
    studyfrom1,
    studyto1,
    studydesc1,
    studydesc11,
    studydesc111,

    //study2
    univercity2,
    studyfrom2,
    studyto2,
    studydesc2,
    studydesc22,
    studydesc222,
  } = input_data ? input_data : "";

  return (
    <>
      <div className="temp6__container">
        {
          //main-info
        }
        <div className="temp2-info">
          <h2 className="temp2-name ">
            {firstname} {lastname}
          </h2>
          <h3 className="temp2-post">{position}</h3>
          <p className="temp2-summary" dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <hr />

        {
          //contact-detail
        }
        <div className="temp2-contact">
          <div className="temp2-contact-contain">
            <p>
              <AiOutlineMail />
              {email}
            </p>
            <p>
              {" "}
              <BsFillPhoneFill />
              {phone}
            </p>
            <p>
              <ImLocation2 />
              {address}
            </p>
            <p>
              <AiFillLinkedin /> {linkedin}
            </p>
          </div>
        </div>

        {
          //skills
        }
        <div className="temp2-skill-new">
          <h2>SKILLS</h2>
          <div className="temp-2-All-skill">
            <p>{skill1}</p>
            <p>{skill2} </p>
            <p>{skill3}</p>
            <p>{skill4}</p>
            <p>{skill5}</p>
          </div>
        </div>

        {
          //work xp
        }

        <div className=" temp2-work-exp">
          <h2>Work-Exprience</h2> <br />
          <h3>{position1}</h3>
          <ul>
            <div className="row-flex">
              <span>
                {workfrom1}- <span>{workto1}</span>
              </span>
              <span>{company1}</span>
            </div>

            <div className="work-exp-detail">
              <li>{companydescription1}</li>
              <li>{companydescription11}</li>

              <li>{companydescription111}</li>

              <li>{companydescription111}</li>
            </div>
          </ul>
        </div>

        {
          //wxp
        }

        <div className="temp2-work-exp">
          <h3>{position2}</h3>
          <ul>
            <div className="row-flex">
              <span>
                {workfrom2}- <span>{workto2}</span>
              </span>

              <span> {company2}</span>
            </div>

            <div className="work-exp-detail">
              <li>{companydescription2}</li>
              <li>{companydescription22}</li>
              <li>{companydescription222}</li>
            </div>
          </ul>
        </div>

        {
          //Education
        }

        <div className="Education temp2-education">
          <h3>Education</h3>
          {
            //education-1
          }
          <div>
            <ul>
              <div className="row-flex">
                <span>{univercity1}</span>

                <span>
                  {studyfrom1} - {studyto1}
                </span>
              </div>
              <li className="work-exp-detail">{studydesc1}</li>
              <li className="work-exp-detail">{studydesc11}</li>{" "}
              <li className="work-exp-detail">{studydesc111}</li>
            </ul>
          </div>

          {
            //education-2
          }
          <div>
            <ul>
              <div className="row-flex">
                <span>{univercity2}</span>
                <span>
                  {studyfrom2} - {studyto2}
                </span>
              </div>

              <li className="work-exp-detail">{studydesc2}</li>
              <li className="work-exp-detail">{studydesc22}</li>
              <li className="work-exp-detail">{studydesc222}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp6;