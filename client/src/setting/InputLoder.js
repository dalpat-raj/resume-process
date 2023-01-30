import React, { useEffect, useState} from 'react';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { StoreState } from '../context/Context';


const InputLoder = (props) => {
  const {dispatch} = StoreState()
  const {input_fields} = props;
  const [input_fields_name, setInput_Fields_Name] = useState('');
  const [html, setHtml] = React.useState('');
  const obj = {};

  useEffect(()=>{
    input_fields.forEach((i)=>{
      setInput_Fields_Name(Object.keys(i))
    }) 
  },[input_fields])
  
  const handleChange = ({ target: { value, name } }) => {
    obj[name] = value;
    dispatch({type: 'SET_INPUT_DATA', payload: obj})
    if(name === "summary"){
      setHtml(value)
    }
  }

  return (
    <div className="input__loader container__fluid">
      <div className="input__row">
      {
        input_fields_name ? input_fields_name.map((input__Name, i)=>{

          switch (input__Name) {
            case "firstname":
              return (
                <>
                <div className="input__new__section" key={i}>
                  <h3>Personal Details</h3>
                </div>
                <div className="input__col">
                  <label>First Name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
                </>
              )
            case "lastname":
              return (
                <div className="input__col">
                  <label>Last Name</label>
                  <input type="text" 
                    name={'lastname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "position":
              return (
                <div className="input__col">
                  <label>Wanted Job Title</label>
                  <input type="text" 
                    name={'position'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "address":
              return (
                <div className="input__col">
                  <label>Address</label>
                  <input type="text" 
                    name={'position'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "phone":
              return (
                <div className="input__col">
                  <label>Phone no.</label>
                  <input type="text" 
                    name={'phone'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "email":
              return (
                <div className="input__col">
                  <label>Email</label>
                  <input type="text" 
                    name={'email'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "qualification1":
              return (
                <>
                <div className="input__new__section">
                  <h3>Education</h3>
                </div>
                <div className="input__col">
                  <label>Qualification</label>
                  <input type="text" 
                    name={'qualification1'}
                    onChange={handleChange}
                  />
                </div> 
                </>
              )
            case "univercity1":
              return (
                <div className="input__col">
                  <label>Univer City</label>
                  <input type="text" 
                    name={'univercity1'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "fromyear1" || "toyear1":
              return (
                <div className="input__col input__date">
                  <label>Start & End Date</label>
                  <input type="date" 
                    name={'fromyear1'}
                    onChange={handleChange}
                  />
                  <input type="date" 
                    name={'toyear1'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "qualification2":
              return (
                <div className="input__col">
                  <label>Qualification</label>
                  <input type="text" 
                    name={'qualification2'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "univercity2":
              return (
                <div className="input__col">
                  <label>Univer City</label>
                  <input type="text" 
                    name={'univercity2'}
                    onChange={handleChange}
                  />
                </div> 
              )
              case "fromyear2" || "toyear2":
                return (
                  <div className="input__col input__date">
                    <label>Start & End Date</label>
                    <input type="date" 
                      name={'fromyear2'}
                      onChange={handleChange}
                    />
                    <input type="date" 
                      name={'toyear2'}
                      onChange={handleChange}
                    />
                  </div> 
                )
            case "skill1":
              return (
                <>
                <div className="input__new__section">
                  <h3>Skill</h3>
                </div>
                <div className="input__col">
                  <label>Skill 1</label>
                  <input type="text" 
                    name={'skill1'}
                    onChange={handleChange}
                  />
                </div> 
                </>
              )
            case "skill2":
              return (
                <div className="input__col">
                  <label>Skill 2</label>
                  <input type="text" 
                    name={'skill2'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill3":
              return (
                <div className="input__col">
                  <label>Skill 3</label>
                  <input type="text" 
                    name={'skill3'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill4":
              return (
                <div className="input__col">
                  <label>Skill 4</label>
                  <input type="text" 
                    name={'skill4'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill5":
              return (
                <div className="input__col">
                  <label>Skill 5</label>
                  <input type="text" 
                    name={'skill5'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill6":
              return (
                <div className="input__col">
                  <label>Skill 6</label>
                  <input type="text" 
                    name={'skill6'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "summary":
              return (
                <>
                <div className="input__new__section">
                  <h3>Professional Summary</h3>
                  <div className="input__summary">
                   <DefaultEditor value={html} onChange={handleChange} name={'summary'}  />
                  </div>
                </div>
      
                </>
              )
            case "position1":
              return (
                <>
                <div className="input__new__section">
                  <h3>Experience</h3>
                </div>
                <div className="input__col">
                  <label>Position</label>
                  <input type="text" 
                    name={'position1'}
                    onChange={handleChange}
                  />
                </div> 
                </>
              )
            case "company1":
              return (
                <div className="input__col">
                  <label>Company Name</label>
                  <input type="text" 
                    name={'company1'}
                    onChange={handleChange}
                  />
                </div> 
              )
              case "fromyear3" || "toyear3":
                return (
                  <div className="input__col input__date">
                    <label>Start & End Date</label>
                    <input type="date" 
                      name={'fromyear3'}
                      onChange={handleChange}
                    />
                    <input type="date" 
                      name={'toyear3'}
                      onChange={handleChange}
                    />
                  </div> 
                )
            case "companydescription1":
              return (
                <div className="input__col">
                  <label>Description</label>
                  <input type="text" 
                    name={'companydescription1'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription11":
              return (
                <div className="input__col">
                  <label>Description</label>
                  <input type="text" 
                    name={'companydescription11'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription111":
              return (
                <div className="input__col">
                  <label>Description</label>
                  <input type="text" 
                    name={'companydescription111'}
                    onChange={handleChange}
                  />
                </div> 
              )
              
            case "position2":
              return (
                <div className="input__col">
                  <label>Position</label>
                  <input type="text" 
                    name={'position2'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "company2":
              return (
                <div className="input__col">
                  <label>Company</label>
                  <input type="text" 
                    name={'company2'}
                    onChange={handleChange}
                  />
                </div> 
              )
              case "fromyear4" || "toyear4":
                return (
                  <div className="input__col input__date">
                    <label>Start & End Date</label>
                    <input type="date" 
                      name={'fromyear4'}
                      onChange={handleChange}
                    />
                    <input type="date" 
                      name={'toyear4'}
                      onChange={handleChange}
                    />
                  </div> 
                )
            case "companydescription2":
              return (
                <div className="input__col">
                  <label>Description</label>
                  <input type="text" 
                    name={'companydescription2'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription22":
              return (
                <div className="input__col">
                  <label>Description</label>
                  <input type="text" 
                    name={'companydescription22'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription222":
              return (
                <div className="input__col">
                  <label>Description</label>
                  <input type="text" 
                    name={'companydescription222'}
                    onChange={handleChange}
                  />
                </div> 
              )
              
            case "reference":
              return (
                <>
                <div className="input__new__section">
                  <h3>Reference</h3>
                </div>
                <div className="input__col">
                  <label>Reference</label>
                  <input type="text" 
                    name={'reference'}
                    onChange={handleChange}
                  />
                </div> 
                </>
              )
              
              
          
            default:
              break;
          }
          

        })
      : '' 
      }
      </div>
    </div>
  )


 
}

export default InputLoder