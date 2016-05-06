import Radium from 'radium';


export const btnStyles ={
base: {
  padding:0,
  borderRadius: "5px 5px 0 0",
  border:"4px double black",
  height: "3em",
  width: "10em",
  fontSize: "1em",
  margin: "0 1px 0px 1px",
  outline: 0,
  animation: `{$pulse} 2s 4s infinite`,
  textShadow: '1px 2px 2px #443242',
  boxShadow: '2px 3px 5px #443242',
  ':hover': {
    transition: 'all .5s',
    color: "#9da0a3"
  },
':active':{

    backgroundColor:"pink"
  }
},
active:{
fontSize: "5em"
},
inactive:{
fontSize: ".2em"
  }
}

export const pulse ={
  "0%": {
    transform: 'scale3d( 1, 1, 1 )'
  },
  "15%": {
    transform: 'scale3d( 1.5, 1.5, 1.5 )'
  },
  "100%": {
    transform: 'scale3d( 1, 1, 1 )'
  }
}
