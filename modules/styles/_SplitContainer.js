import Radium from 'radium';
import {cColors} from './globalStyles';
export const SplitContStyles={
  base:{
      margin:                  0,
      backgroundColor:        "blue",
      height:                  "100%",
      width:                   "50%",
      display:                 "inline-block",
      verticalAlign:          "top",
      margin:                 0,
      padding:                0,


  },
  topBox:{
    backgroundColor:         cColors.ink,
    height:                  "50%",
    display:                 "inline-block",
    width:                   "100%",
    color:                  cColors.lightText
  },
  btmBox:{
    backgroundColor:        cColors.embers,
    height:                  "50%",
    display:                 "inline-block",
    width:                   "100%",
    color:                  cColors.darkText
  }
}
