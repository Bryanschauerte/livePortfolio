import Radium from 'radium';
import {cColors} from './globalStyles';


export const container ={
  base:{
    height:"50%",
    width: "14%",
    transition: "all .5s ease-out",
    transform: "translate(0%, -5em)",
    position: "absolute",
    top: "45%",
    left:"45%",
    display: "block",
  }

}

var greenFrames = Radium.keyframes({
  '0%': {color: '#019f21'},
  '50%': {color: '#01d12b'},
  '100%': {color: '#08fe3a'},
}, 'greenMe');

var shadowKeyframes = Radium.keyframes({
  '0%': {border: '2px solid #0193b8',color:"#0193b8", textDecoration: "underline", fontSize: "1.2em"},
  '25%': {border: '3px solid #0193b8',color:"#0193b8", textDecoration: "underline", fontSize: "1.3em"},
  '50%': {border: '4px solid #0193b8',color:"#0193b8", textDecoration: "underline", fontSize: "1.5em"},
  '75%': {border: '5px solid #0193b8',color:"#0193b8", textDecoration: "underline", fontSize: "1.3em"},
  '100%': {border: '6px solid #0193b8',color:"#0193b8", textDecoration: "underline", fontSize: "1.2em"},
}, 'shadow');


export const btnStyles ={
base: {
  backgroundImage: "linear-gradient('bottom, #01b826 0%, #33c651 100%')",
  backgroundColor: cColors.moss,
  textTransform: "uppercase",
  padding:0,
  color: "white",
  borderRadius: ".3em",
  // borderRadius: "5px 5px 0 0",
  border:".1em solid " + cColors.paper,
  height: "20%",
  width: "100%",
  fontSize: "1.2em",
  margin: "0 1px 0px 1px",
  outline: 0,
  textShadow: '0px -2px 0px #443242',
  boxShadow: '0px 3px 0px ' + cColors.moss
},
active:{
fontSize: "1em",
backgroundColor: "red"
},
inactive:{
fontSize: "1em"
  }
}
export const actions={
  btnAction:{
    ":hover":{
      fontWeight: "bolder",
      color: "#9da0a3",
      // Use a placeholder animation name in `animation`
      animation: 'x 1s ease 0s infinite',
      // Assign the result of `keyframes` to `animationName`
      animationName: shadowKeyframes
      // background: 'blue',
      // height: '14px',
      // margin: '0 auto',

    }
  }
}
export const menu ={
hint:{
  transition: "visibility 1s, opacity 1s ease-out",
  height:"7em",
  width: "17em",
  borderRadius: "0 3em 3em 0",
  position: "relative",
  top: "-1.2em",
  left: "5em",
  backgroundColor: cColors.sky,
  color: cColors.lightText,
  border: "3px solid "+ cColors.moss,
  textAlign: "center",
  padding: "1em"
},
noHint:{

    visibility:"hidden",
    opacity: 0
  },
menuHide:{
  height:"5em",
  width: "5em",
  transform: "translate(0%, -1.3em)",
  position: "absolute",
  top: "45%",
  left:"45%",
  display: "block",
  backgroundImage: "url('/images/showerTea.png')",
  backgroundSize: "60% auto",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#813772",
  backgroundPosition: "center center",
  border: "3px solid "+ cColors.moss,
  padding: "2px",
  color: cColors.ink,
  boxShadow: "2px 2px 4px "+ cColors.ink

},
  menuText:{
    animation: 'x 1s ease 0s infinite',
    animationName: greenFrames,
    width: "100%",

    position: "absolute",
    transform: "translate(36%, -1.2em)",
    top: 0,
    textAlign: "center",
    fontWeight: 400,
    color: cColors.ink,
    fontSize: "1.2em",
    display: "inline-block"

  }
}
