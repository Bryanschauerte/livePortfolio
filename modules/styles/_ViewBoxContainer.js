import Radium from 'radium';
import {cColors} from './globalStyles';


export const VBContainer={
  base:{
    margin:                  0,
    backgroundColor:         cColors.black,
    color:                   cColors.darkText,
    height:                  "100%",
    width:                   "50%",
    top:                     0,
    verticalAlign:           "top",
    position:                "relative",
    display:                 "inline-block",
    padding:                 "2%",

  },
  inner:{
    container:{
      backgroundColor:         cColors.paper,
      height:                  "100%",
      width:                   "100%",
      borderRadius:            ".5em",
      boxShadow:               "4px 4px 4px "+ cColors.paper,

    }
  }

}
