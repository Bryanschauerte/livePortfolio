import Radium from 'radium';
import {cColors} from './globalStyles';
//
// html, body{ background: grey; }
// p{ margin: 0px; }
//
// #clip{
//   /*
//   Ensure background is added first
//   */
//   background: image
//
//    background-attachment: fixed;
//   -webkit-text-fill-color: transparent;
//   -webkit-background-clip: text;
//
//   font-size: 28vw;
//   font-weight: bold;
//   text-align: center;
// }

whites:{"#fff","#f6f6f8", "#ececf1", "#e2e2e9","#d9d9e2", "#cfcfdb", "#c5c5d3"}

const newb = {
  snow:         "#F8F8FF",
  dirtySnow:    "#c5c5d3",
  fog:        "#E0E0E0",

  midnight:  "#51516B",
  hue:        "#50A888",
  evening:      "#0B1968"
}
export const SplitContainerStyle={
base:{
  height:"100%",
  width: "100%",
  position: "absolute",
backgroundImage: "linear-gradient(to right, "+newb.snow +","+ " "+newb.dirtySnow+" 100%)",
  }
}
export let ActiveSlide={


    outerContainer:{
      position:                "relative",
      margin:                  0,
      height:                  "100%",
      display:                 "inline-block",
      verticalAlign:           "top",
      margin:                  0,
      padding:                 "0",
      backgroundImage:        "linear-gradient(to right, "+newb.fog +","+ " "+newb.snow+" 100%)",
      float:                     "left"
    },
    alwaysVisable:{

      width:                     "4vw",
      height:                    "10vw",
      position:                  "relative",
      top:                       "50%"

    },
    textLabel:{
      "transform":               "rotate(-90deg)",
      // transformOrigin:           "left top 1",
      fontSize:                  "3vw",
      fontWeight:                "200",
      fontFamily:                "neouthin, contra",
      position:                  "relative",
      top:                       "65%",
      color:                     newb.evening


    },
    //part showing
    activeExtend:{
      width:                     "80%",
      height:                    "100%",
      overflow:                  "hidden",
      float:                     "left",
      position:                  "relative"
    },
    activeViewContainer:{

      height: "100%",
      width: "100%",
    },
    imageCanvas:{
      width:                     "20%",
      height:                    "30%",
      position:                  "absolute",
      top:                       "10%",
      left:                      "10%",
      float:                     "left",
      backgroundImage:           "url('./images/SeoulDoTwo.png')",
      backgroundRepeat:          "no-repeat",
      backgroundPosition:        "left top",
      backgroundSize:            "100% 100%",
      // backgroundColor:           newb.dirtySnow

    },
    buttonContainer:{
      backgroundColor: newb.snow,
      position: "absolute",
      height: "15vw",
      width: "20vw",
      top: "50%",
      left: "10%",
      boxShadow:               "4px 4px 4px "+ newb.midnight,
      padding:"2%"

    }
  }


  export let InActiveSlide={

    outerContainer:{
      position:                "relative",
      margin:                  0,
      height:                  "100%",
      display:                 "inline-block",
      verticalAlign:           "top",
      margin:                  0,
      padding:                 "0",
      backgroundImage:        "linear-gradient(to right, "+newb.fog +","+ " "+newb.snow+" 100%)",
      float:                     "left"
    },
      // outerContainer:{
      //   position:                "relative",
      //   margin:                  0,
      //   height:                  "100%",
      //   // width:                   "100%",
      //   display:                 "inline-block",
      //   verticalAlign:           "top",
      //   margin:                  0,
      //   padding:                 "0",
      //   backgroundImage:        "linear-gradient(to right, "+newb.midnight +","+ " "+newb.snow+" 100%)",
      //   // border:                  "4px solid " + newb.fog,
      //   float:                     "left"
      // },
      alwaysVisable:{

        width:                     "4vw",
        height:                    "10vw",
        position:                  "relative",

        top:                       "50%"
        // top:                       "60%",
        // transform:                 "translate(0%, 50%)"

      },
      textLabel:{
        "transform":               "rotate(-90deg)",
        // transformOrigin:           "left top 1",
        fontSize:                  "2vw",
        fontFamily:                "neouthin, contra",
        position:                  "relative",
        top:                       "65%",
        fontWeight:                "200",
        color:                     newb.midnight,
        // color:               "rgba(6,47,79,0.7)",
        textShadow:          "2px 2px 1px rgba(202,202,202,0.6)",

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
