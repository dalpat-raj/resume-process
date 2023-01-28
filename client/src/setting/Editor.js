import React,{useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import { StoreState } from '../context/Context'
import InputLoder from './InputLoder';
import TempLoder from './TempLoder';


const Editor = () => {
  const {state:{skin_code, input_fields}} = StoreState() 

  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 


  return (
    <div className="editor">
      <div className="editor__row">
        <div className="editor__col editor__input__heading">
          <h2>Fill Your Details</h2>
        <div className="editor__input__fields">
            <InputLoder input_fields={input_fields} />
        </div>
        </div>

        <button onClick={handlePrint} className="main_blue_button editor__download__button">Download</button>

        <div className="editor__col editor_preview_parent">
        <div className=" editor__temp__loader">
          <div ref={componentRef} className="temp">
          <TempLoder skin_code={skin_code} />
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Editor