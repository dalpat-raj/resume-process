import React, { useEffect, useState } from "react";
import { StoreState } from "../context/Context";
import "../styles/t-scss/temp3.scss"

const Temp3 = () => {
  const {
    state: { input_data },
    dispatch,
  } = StoreState();

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
    skill1info:"",
    skill2info:"",
    skill3info:"",
    summary: "",
    position1: "",
    company1: "",
    fromyear3: "",
    toyear3: "",
    institute1: "",
    companydescription1: "",
    companydescription11: "",
    companydescription111: "",
    companydescription1111: "",

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
  }, [inputObject, dispatch]);

  const {
    firstname,
    lastname,
    position,
    address,
    phone,
    email,

    skill1,
    skill2,
    skill3,

    skill1info,
    skill2info,
    skill3info,

    techskill1,
    techskill2,
    techskill3,
    techskill4,
    techskill5,
    techskill6,
    techskill7,
    techskill8,

    summary,

    univercity1,

    univercity2,

    qualification1,
    fromyear1,
    toyear1,
    qualification2,
    fromyear2,
    toyear2,

    institute1,
    position1,
    duration1,
    companydescription1,
    companydescription11,
    companydescription111,
    companydescription1111,

    institute2,
    position2,
    duration2,
    companydescription2,
    companydescription22,
    companydescription222,
    companydescription2222,

    institute3,
    position3,
    duration3,
    companydescription3,
    companydescription33,
  } = input_data ? input_data : "";

  return (
    <>
      <div id="doc2" className="yui-t7 template3__container">
        <div id="inner">
          <div id="hd">
            <div className="yui-gc">
              <div className="yui-u first">
                <h1>
                  {firstname} {lastname}
                </h1>
                <h2>{position}</h2>
              </div>

              <div className="yui-u">
                <div className="contact-info">
                  <h3>
                    <small>{phone}</small>
                  </h3>
                  <h3>
                    <small>{email}</small>
                  </h3>
                  <h3>{address}</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div id="yui-main">
              <div className="yui-b">
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h4>Profile</h4>
                  </div>
                  <div className="yui-u">
                    <p className="enlarge" dangerouslySetInnerHTML={{ __html: summary }} />
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h4>Skills</h4>
                  </div>
                  <div className="yui-u">
                    <div className="talent">
                      <h2>{skill1}</h2>
                      <p>{skill1info}</p>
                    </div>

                    <div className="talent">
                      <h2>{skill2}</h2>
                      <p>{skill2info}</p>
                    </div>

                    <div className="talent">
                      <h2>{skill3}</h2>
                      <p>{skill3info}</p>
                    </div>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Technical skills</h2>
                  </div>
                  <div className="yui-u">
                    <ul className="talent">
                      <li>{techskill1}</li>
                      <li>{techskill2}</li>
                      <li className="last">{techskill3}</li>
                    </ul>

                    <ul className="talent">
                      <li>{techskill4}</li>
                      <li>{techskill5}</li>
                      <li className="last">{techskill6}</li>
                    </ul>

                    <ul className="talent">
                      <li>{techskill6}</li>
                      <li>{techskill7}</li>
                      <li className="last">{techskill8}</li>
                    </ul>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h4>Experience</h4>
                  </div>

                  <div className="yui-u">
                    <div className="job">
                      <h2>{institute1}</h2>
                      <h3>{position1}</h3>
                      <h3>{duration1}</h3>
                      <li>{companydescription1}</li>
                      <li>{companydescription11}</li>
                      <li>{companydescription111}</li>
                      <li>{companydescription1111}</li>
                    </div>

                    <div className="job">
                      <h2>{institute2}.</h2>
                      <h3>{position2}</h3>
                      <h3>{duration2}</h3>
                      <li>{companydescription2}</li>
                      <li>{companydescription22}</li>
                      <li>{companydescription222}</li>
                      <li>{companydescription2222}</li>
                    </div>

                    <div className="job">
                      <h2>{institute3}</h2>
                      <h3>{position3}</h3>
                      <h3>{duration3}</h3>
                      <li>{companydescription3}</li>
                      <li>{companydescription33}</li>
                      <li>{companydescription33}</li>
                    </div>
                  </div>
                </div>

                <div className="yui-gf last">
                  <div className="yui-u first">
                    <h4>Education</h4>
                  </div>
                  <div className="yui-u">
                    <h2>{qualification1}</h2>
                    <h3>{univercity1} </h3>
                    <span>
                      {fromyear1}- {toyear1}
                    </span>
                  </div>
                </div>

                <div className="yui-gf last">
                  <div className="yui-u first">
                    <h4>Education</h4>
                  </div>
                  <div className="yui-u">
                    <h2>{univercity2}</h2>
                    <h3>
                      {qualification2}
                      <span>
                        {fromyear2}- {toyear2}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp3;