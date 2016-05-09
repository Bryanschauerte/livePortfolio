import Radium from 'radium';
import {cColors} from './globalStyles';


export const SplitContStyles={
  base:{
      margin:                  0,
      height:                  "100%",
      width:                   "50%",
      display:                 "inline-block",
      verticalAlign:           "top",
      margin:                  0,
      padding:                 0,


  },
  topBox:{
    img:{
      backgroundImage:        "url('/images/Seoul.jpg')",
      backgroundSize:         "cover",
      backgroundRepeat:       "no-repeat",
      backgroundPosition:     "top center",
      boxShadow:              "2px 4px 8px "+ cColors.ink,
      borderRadius:           ".2em",
      padding:                "1em 2em 2em 2em",
      height:                 "100%"
    },
    base:{
      backgroundColor:        cColors.ink,
      height:                 "50%",
      display:                "inline-block",
      width:                  "100%"
    },
    innerCon:{
      padding:                "1em 1em 2em 1em",
      height:                 "100%",
      width:                  "100%"
    },
    innerText:{

      color:                 "white"
    },
    titleCont:{
      width:                "100%",
      height:               "20%",
      backgroundColor:      cColors.ink,
      padding:              ".1em"

    },
    titleText:{
      fontSize:            "3vw",
      position:            "relative",
      transform:           "translate(0%, 40%)",
      padding:             ".4em .2em .2em .2em",
      textAlign:           "center",
      fontWeight:          "200",
      textTransform:       "uppercase",
      fontFamily:          "neouthin, contra",
      textRendering:       "optimizeLegibility",
      color:               "rgba(0,0,0,0.6)",
      textShadow:          "2px 2px 3px rgba(202,202,202,0.3)"

    }
  },
  btmBox:{

      base:{
        backgroundColor:        cColors.embers,
        height:                 "50%",
        display:                "inline-block",
        width:                  "100%",
        color:                  cColors.darkText
      },
      innerCon:{
        backgroundImage:        "linear-gradient(to top, #b82601, #062f4f 100%)",
        padding:                "1em 2em 2em 2em",
        border:                 "1em solid " + cColors.ink,
        height:                 "100%",
        width:                  "100%"
      },
      innerText:{

        color:                 "white",
        borderRadius:          ".5em",
        height:                "100%",
        width:                 "100%",
        padding:               "1em"
      },
      titleCont:{
        width:                 "100%",
        height:                "20%",
        backgroundColor:       cColors.ink,
        padding:               ".1em"

      },
      titleText:{
        fontSize:             "2vw",
        position:             "relative",
        textAlign:            "left",
        fontWeight:           "200",
        textTransform:        "uppercase",
        fontFamily:           "neouthin, contra",
        color:                cColors.sky,
        textShadow:           "6px 6px 0px rgba(0,0,0,0.2)"

      },
      btnHolder:{
        padding:             "1em"
      }
    }
}
