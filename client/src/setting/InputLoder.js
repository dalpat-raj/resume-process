import React, { useEffect, useState } from 'react';
import { StoreState } from '../context/Context';

const InputLoder = (props) => {
  const {dispatch} = StoreState()
  const {input_fields} = props;
  const [input_fields_name, setInput_Fields_Name] = useState('')
  const obj = {};
  
  useEffect(()=>{
    input_fields.forEach((i)=>{
      setInput_Fields_Name(Object.keys(i))
    }) 
  },[input_fields])
  
  const handleChange = ({ target: { value, name } }) => {
    obj[name] = value;
    dispatch({type: 'SET_INPUT_DATA', payload: obj})
  }



  return (
    <div className="input__loader container__fluid">
      <div className="input__row">
      {





        input_fields_name ? 
        input_fields_name.map((inp, i)=>{

          

          switch (inp) {
            case "firstname":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "lastname":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "position":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "address":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "phone":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "email":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "qualification1":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "univercity1":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "fromyear1":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "toyear1":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "qualification2":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "univercity2":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "fromyear2":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "toyear2":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill1":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill2":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill3":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill4":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill5":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "skill6":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "summary":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "position1":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "company1":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "fromyear3":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "toyear3":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription1":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription11":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription111":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
              
            case "position2":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "company2":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "fromyear4":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "toyear4":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription2":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription22":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
            case "companydescription222":
              return (
                <div className="input__col">
                  <label>name</label>
                  <input type="text" 
                    name={'firstname'}
                    onChange={handleChange}
                  />
                </div> 
              )
              
              
          
            default:
              break;
          }
          



      //     return (
      //       <div className="input__col" key={i}>
      //         <label>{inp}</label>
      //         <textarea style={{resize: 'none'}}
      //           placeholder={inp} 
      //           onChange={handleChange}
      //           name={inp}
      //         />
      //       </div>
      //     )
        })
      : '' 
      }
      </div>
    </div>
  )


 
}

export default InputLoder