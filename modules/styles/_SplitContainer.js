import Radium from 'radium';
import {cColors} from './globalStyles';

const newb = {
  snow:         "#F8F8FF",
  fog:        "#E0E0E0",
  midnight:  "#51516B",
  hue:        "#50A888",
  evening:      "#0B1968"
}
export const SplitContainerStyle={
  height:"100%"
}
export let ActiveSlide={


    outerContainer:{
      position:                "relative",
      margin:                  0,
      height:                  "100%",
      // width:                   "7vw",
      display:                 "inline-block",
      verticalAlign:           "top",
      margin:                  0,
      padding:                 "0",
      backgroundColor:         newb.hue,
      border:                  "4px solid pink",
      float:                     "left"
    },
    alwaysVisable:{
      backgroundColor:           newb.fog,
      width:                     "4vw",
      height:                    "10vw",
      position:                  "relative",
      border:                    "2px solid black",
      top:                       "50%"
      // top:                       "60%",
      // transform:                 "translate(0%, 50%)"

    },
    textLabel:{
      "transform":               "rotate(-90deg)",
      // transformOrigin:           "left top 1",
      fontSize:                  "3vw",
      // float:                      "left",
      position:                  "relative",
      top:                       "65%",
      color:                     newb.midnight

    },
    activeExtend:{
      // width:                     "20vw",
      height:                    "100%",
      backgroundColor:           newb.evening,
      float:                     "left",
      overflow:                  "hidden"
    }
  }


  export let InActiveSlide={


      outerContainer:{
        position:                "relative",
        margin:                  0,
        height:                  "100%",
        // width:                   "7vw",
        display:                 "inline-block",
        verticalAlign:           "top",
        margin:                  0,
        padding:                 "0",
        backgroundColor:         newb.hue,
        border:                  "4px solid pink",
        float:                     "left"
      },
      alwaysVisable:{
        backgroundColor:           newb.fog,
        width:                     "4vw",
        height:                    "10vw",
        position:                  "relative",
        border:                    "2px solid black",
        top:                       "50%"
        // top:                       "60%",
        // transform:                 "translate(0%, 50%)"

      },
      textLabel:{
        "transform":               "rotate(-90deg)",
        // transformOrigin:           "left top 1",
        fontSize:                  "3vw",
        // float:                      "left",
        position:                  "relative",
        top:                       "65%",
        color:                     newb.midnight

      },
      activeExtend:{
        // width:                     "20vw",
        height:                    "100%",
        backgroundColor:           newb.evening,
        float:                     "left",
        overflow:                  "hidden",
        display: "none"
      }
    }
//   //
//   export const inactiveSlide = {
//     base:{
//       position:                "relative",
//       margin:                  0,
//       height:                  "100%",
//       width:                   "8vw",
//       display:                 "inline-block",
//       verticalAlign:           "top",
//       margin:                  0,
//       padding:                 "0",
//       backgroundColor:         newb.snow,
//       border:                  "4px solid pink"
//     },
//     sideWay:{
//       "transform":               "rotate(-90deg)",
//       transformOrigin:           "left top 0",
//       backgroundColor:           "red",
//       fontSize:                  "3vw",
//       float:                      "left",
//       position:                  "absolute",
//       top:                       "50%"
//     },
//     innerCon:{
//       backgroundColor:           "blue",
//       width:                     "10%",
//       position:                  "relative",
//       top:                       "60%",
//       transform:                 "translate(0%, 50%)"
//     }
//   },
//   aboutSlide:{
//     base:{
//       margin:                  0,
//       height:                  "86%",
//       width:                   "100%",
//       display:                 "inline-block",
//       verticalAlign:           "top",
//       margin:                  0,
//       padding:                 "0",
//       backgroundColor:         newb.snow
//       // backgroundImage:        "linear-gradient(to top, #ffffff, #000000 90%)"
//       }
//     },
//   blogSlide:{
//
//     base:{
//       height:                 "50%",
//       display:                "inline-block",
//       marginBottom:           "2%",
//       border:                 "1em solid " + cColors.ink,
//       borderRadius:           ".4em"
//
//     }
//   },
//   codeshareSlide:{
//     base:{
//
//     }
//   },
//   futureSlide:{
//     base:{
//
//     }
//   },
//   activeSlide:{
//     base:{
//
//     }
//   }
// }
//
//     innerCon:{
//       backgroundImage:        "url('/images/Seoul.jpg')",
//       backgroundSize:         "cover",
//       backgroundRepeat:       "no-repeat",
//       backgroundPosition:     "top center",
//       padding:                "1em 2em 2em 2em",
//       height:                 "100%",
//       width:                  "100%"
//
//
//     },
//     innerText:{
//
//       color:                 "white",
//       borderRadius:          ".5em",
//       height:                "100%",
//       width:                 "100%",
//       padding:               "1em"
//     },
//   titleCont:{
//       width:                "100%",
//       height:               "20%",
//       padding:              ".1em"
//
//     }
//   },
//   btmBox:{
//
//       base:{
//         height:                 "50%",
//         width:                  "100%",
//         border:                 "1em solid " + cColors.ink,
//         borderRadius:           ".4em"
//       },
//       innerCon:{
//         backgroundImage:        "linear-gradient(to top, #cacaca, #062f4f 100%)",
//         padding:                "1em 2em 2em 2em",
//         height:                 "100%",
//         width:                  "100%"
//       },
//       innerText:{
//
//         color:                 "white",
//         borderRadius:          ".5em",
//         height:                "100%",
//         width:                 "100%",
//         padding:               "1em"
//       },
//       titleCont:{
//         width:                 "100%",
//         height:                "20%",
//         // backgroundColor:       cColors.ink,
//         padding:               ".1em"
//
//       },
//       titleText:{
//         fontSize:             "2vw",
//         position:             "relative",
//         textAlign:            "left",
//         fontWeight:           "200",
//         textTransform:        "uppercase",
//         fontFamily:           "neouthin, contra",
//         color:                cColors.sky,
//         textShadow:           "6px 6px 0px rgba(0,0,0,0.2)"
//
//       },
//       btnHolder:{
//         padding:             "1em"
//       }
//     }
// }
