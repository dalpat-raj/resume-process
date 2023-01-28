import React, { useEffect, useState } from "react";
import { StoreState } from "../context/Context";
import "../styles/t-scss/temp7.scss";
import { FcOk } from "react-icons/fc";

const Template7 = () => {
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
    website:"",

    summary:"",

    skill1:"",
    skill2:"",
    skill3:"",
    skill4:"",
    skill5:"",
    skill6:"",
    company1:"",
    position1:"",
     workfrom1:"",
     tofrom1:"",
    companydescription1:"",
    companydescription11:"",
    companydescription111:"",
    position2:"",
    company2:"",
    workfrom2:"",
    tofrom2:"",
    companydescription2:"",
    companydescription22:"",
    companydescription222:"",

    projectname:"",
    projectinfo1:"",
    projectinfo2:"",
    projectname2:"",
    projectinfo3:"",
    projectinfo4:"",
    studyfrom:"",
    studyto:"",

    univercity1:"",
    diploma:"",
  });

  useEffect(() => {
    dispatch({ type: "SET_INPUT", payload: inputObject });
  }, [ inputObject, dispatch ]);

  const {
    firstname,
    lastname,
    position,
    address,
    phone,
    email,
    website,

    summary,

    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    company1,
    position1,
    workfrom1,
    tofrom1,
    companydescription1,
    companydescription11,
    companydescription111,
    position2,
    company2,
    workfrom2,
    tofrom2,
    companydescription2,
    companydescription22,
    companydescription222,

    projectname,
    projectinfo1,
    projectinfo2,
    projectname2,
    projectinfo3,
    projectinfo4,

    univercity1,
    studyfrom,
    studyto,
    diploma,
  } = input_data ? input_data : "";



  return (
    <div className="temp7__container">
      <div className="info-section">
        <p className="names">
          {firstname} {lastname} | {position}
        </p>

        <div className="ph-info">
          <span>{address}</span>
          <span>{phone} </span> | <span>{email}</span> | <span>{website}</span>
        </div>
      </div>
      <br />

      <div className="tem7-maindiv">
        <div className="temp7-summary">
          <div className="heading-section">
            <p>PROFESSIONAL SUMMARY</p>{" "}

            </div>
          <p className="temp7-summary">{summary}</p>
        </div>

        <div className="heading-section">
          <p>CORE COMPETENCIES</p>
        </div>
        <div className="conecpts row">
          <div className=" col-1">
            <p>
              <FcOk />
              {skill1}
            </p>
            <p>
              <FcOk />
              {skill2}
            </p>

            <p>
              <FcOk />
              {skill3}
            </p>
          </div>
          <div className="col-2">
            <p>
              <FcOk />
              {skill4}
            </p>
            <p>
              <FcOk />
              {skill5}
            </p>

            <p>
              <FcOk />
              {skill6}
            </p>
          </div>
        </div>

        <div className="">
          {" "}
          <div className="heading-section">
            <p>PROFESSIONAL EXPERIENCE</p>
          </div>
          <div className="temp7-exp">
            <p className="compnyname">{company1}</p>
            <p>
              {position1} | {workfrom1}- {tofrom1}
            </p>
            <ul>
              <li>{companydescription1}</li>
              <li>{companydescription11}</li>
              <li>{companydescription111}</li>
            </ul>
          </div>
          <br />
          <div className="temp7-exp">
            <p className="compnyname">{company2}</p>
            <p>
              {position2} | {workfrom2} - {tofrom2}
            </p>
            <ul>
              <li>{companydescription2}</li>
              <li>{companydescription22}</li>
              <li>{companydescription222}</li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="heading-section">
            <p>RELEVENT PROJECT</p>
          </div>
          <div className="temp7-project">
            <p className="projectname">{projectname}</p>
            <ul>
              <li>{projectinfo1}</li>
              <li>{projectinfo2}</li>
            </ul>
          </div>
          <br />
          <div className="temp7-project">
            <p className="projectname">{projectname2}</p>
            <ul>
              <li>{projectinfo3}</li>
              <li>{projectinfo4}</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="heading-section">
            <p>EDUCATION</p>
          </div>
          <br />
          <div className="temp7-project">
            <p>
              <span>
                {studyfrom}- {studyto}
              </span>{" "}
              | {univercity1}
            </p>
            <p>{diploma} -</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template7;