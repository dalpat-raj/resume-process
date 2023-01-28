import React from 'react'
import Temp1 from '../R-templates/Temp1';
import Temp2 from '../R-templates/Temp2';
import Temp3 from '../R-templates/Temp3';
import Temp4 from '../R-templates/Temp4';
import Temp5 from '../R-templates/Temp5';
import Temp6 from '../R-templates/Temp6';
import Temp7 from '../R-templates/Temp7';

const TempLoder = (props) => {
    const {skin_code} = props;
  
    switch (skin_code) {
        case 1:
            return (
                <Temp1 />
            )
        case 2:
            return (
                <Temp2/>
            )
        case 3:
            return (
                <Temp3/>
            )
        case 4:
            return (
                <Temp4/>
            )
        case 5:
            return (
                <Temp5/>
            )
        case 6:
            return (
                <Temp6/>
            )
        case 7:
            return (
                <Temp7/>
            )
            
            
    
        default:
            break;
    }

};

export default TempLoder