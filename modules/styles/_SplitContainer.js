import Radium from 'radium';
import {cColors} from './globalStyles';


export const SplitContStyles={
  base:{
      margin:                  0,
      height:                  "86%",
      width:                   "50%",
      display:                 "inline-block",
      verticalAlign:           "top",
      margin:                  0,
      padding:                 "0 1% 0 1%"
      // backgroundImage:        "linear-gradient(to top, #ffffff, #000000 90%)"

    },
  topBox:{

    base:{
      height:                 "50%",
      display:                "inline-block",
      marginBottom:           "2%",
      border:                 "1em solid " + cColors.ink,
      borderRadius:           ".4em"

    },
    innerCon:{
      backgroundImage:        "url('/images/Seoul.jpg')",
      backgroundSize:         "cover",
      backgroundRepeat:       "no-repeat",
      backgroundPosition:     "top center",
      padding:                "1em 2em 2em 2em",
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
      width:                "100%",
      height:               "20%",
      padding:              ".1em"

    }
  },
  btmBox:{

      base:{
        height:                 "50%",
        width:                  "100%",
        border:                 "1em solid " + cColors.ink,
        borderRadius:           ".4em"
      },
      innerCon:{
        backgroundImage:        "linear-gradient(to top, #cacaca, #062f4f 100%)",
        padding:                "1em 2em 2em 2em",
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
        // backgroundColor:       cColors.ink,
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
