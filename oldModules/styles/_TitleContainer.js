import Radium from 'radium';
import {cColors} from './globalStyles';

export const TitleStyle= {
  base: {

    display:             "inline-block",
    backgroundColor:     cColors.black,
    height:              "12%",
    fontSize:            "2vw",
    padding:             ".4em .2em .2em .2em",
    display:             "flex",
    justifyContent:      "center"
  },
  text:{
      textShadow:          "2px 2px 1px rgba(202,202,202,0.6)",
      fontSize:            "4vw",
      color:               "rgba(6,47,79,0.7)",
      // color:              cColors.paper,
      fontFamily:          "neouthin, contra",
      // transform:           "translate(0%, 50%)",
      position:            "relative",
      fontWeight:          "200",
      marginTop:           "auto",
      marginBottom:        "auto",

 // textShadow: "0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)"



  }
}
