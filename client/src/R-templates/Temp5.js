import React, { useEffect, useState } from "react";
import { StoreState } from "../context/Context";
import { ImMobile } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { TbWorld } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import "../styles/t-scss/temp5.scss"

const Temp5 = () => {
  const {
    state: { input_data },
    dispatch,
  } = StoreState();

  const [inputObject] = useState({
    //personal-information

    firstname: "",
    lastname: "",
    position: "",
    address: "",
    phone: "",
    email: "",
    website: "",

    //expertise

    exprtise1: "",
    exprtise2: "",
    exprtise3: "",
    exprtise4: "",
    exprtise5: "",

    //references
    refname1: "",
    ref1email: "",
    ref1phone: "",

    refname2: "",
    ref2email: "",
    ref2phone: "",

    //institute1

    institute1: "",
    position1: "",

    companydescription1: "",
    companydescription11: "",
    companydescription111: "",

    //institute2

    institute2: "",
    position2: "",
    companydescription2: "",
    companydescription22: "",
    companydescription222: "",
    companydescription2222:"",


    // institute3

    institute3: "",
    position3: "",
    companydescription3: "",
    companydescription33: "",
    companydescription333: "",
    companydescription3333: "",
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
    website,

    //expertise

    exprtise1,
    exprtise2,
    exprtise3,
    exprtise4,
    exprtise5,

    //references
    refname1,
    ref1email,
    ref1phone,

    refname2,
    ref2email,
    ref2phone,

    //institute1

    institute1,
    position1,

    companydescription1,
    companydescription11,
    companydescription111,

    //institute2

    institute2,
    position2,
    companydescription2,
    companydescription22,
    companydescription222,
    companydescription2222,


    // institute3

    institute3,
    position3,
    companydescription3,
    companydescription33,
    companydescription333,
    companydescription3333,
  } = input_data ? input_data : "";


  return (
    <>
      <div className="temp5__container">
        <div className="temp4-info">
          <p className="tem4-name">
            {firstname} {lastname}
          </p>
          <p className="temp4-title">{position}</p>
        </div>
        <hr />

        <div className="temp4-row-1">
          <div className="temp4-row-1-col-1">
            {
              //contact
            }
            <div className="temp4-contact">
              <h4 className="temp4-heading">CONTACT</h4>
              <p>
                <ImMobile className="sign" />
                <span className="temp4-phone-num">{phone}</span>
              </p>
              <p>
                <TfiEmail className="sign" />
                <span className="temp4-phone-num">{email}</span>
              </p>
              <p className="">
                <TbWorld className="sign" />
                <span className="temp4-phone-web">{website}</span>
              </p>
              <p className="">
                <GrLocation className="sign" />
                <span className="temp4-phone-add">{address}</span>
              </p>

              <hr className="small-hr" />
            </div>

            {
              //expertise
            }

            <div className="temp4-expertise">
              <h4 className="temp4-heading">EXPERTISE</h4>
              <ul className="temp4-exppertise-all">
                <li>{exprtise1}</li>
                <li>{exprtise2}</li>
                <li>{exprtise3}</li>
                <li>{exprtise4}.</li>
                <li> {exprtise5}</li>
              </ul>
              <hr className="small-hr" />
            </div>

            {
              //redference
            }

            <div className="temp4-reference">
              <h4 className="temp4-heading">REFERENCES</h4>

              <div className="temp4-ref-1">
                <p className="ref-name">{refname1}</p>
                <p>
                  <ImMobile className="sign" />
                  <span className="temp4-ref-phone">{ref1phone}</span>
                </p>

                <p className="">
                  <TfiEmail className="sign" />
                  <span className="temp4-ref-email">{ref1email}</span>
                </p>
              </div>
              <br />

              <div className="temp4-ref-2">
                <p className="ref-name">{refname2}</p>
                <p>
                  <ImMobile className="sign" />
                  <span className="temp4-ref-phone">{ref2phone}</span>
                </p>

                <p className="">
                  <TfiEmail className="sign" />
                  <span className="temp4-ref-email">{ref2email}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="temp4-row-1-col-2">
            <h4 className="temp4-heading">WORK EXPERIENCE</h4>

            <div className="temp4-job-exp-container">
              <div>
                <p className="temp4-job-position-1">{position1}</p>
                <p className="temp4-company-1">{institute1}</p>
                <ul className="temp4-job-desc">
                  <li>{companydescription1} </li>
                  <li>{companydescription11} </li>
                  <li>{companydescription111} </li>
                </ul>
              </div>

              <div>
                <p className="temp4-job-position-1">{position2}</p>
                <p className="temp4-company-1">{institute2}</p>
                <ul className="temp4-job-desc">
                  <li>{companydescription2} </li>
                  <li>{companydescription22} </li>
                  <li>{companydescription222} </li>
                  <li>{companydescription2222} </li>
                </ul>
              </div>

              <div>
                <p className="temp4-job-position-1">{position3}</p>
                <p className="temp4-company-1">{institute3}</p>
                <ul className="temp4-job-desc">
                  <li>{companydescription3} </li>
                  <li>{companydescription33} </li>
                  <li>{companydescription333} </li>
                  <li>{companydescription3333} </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp5;