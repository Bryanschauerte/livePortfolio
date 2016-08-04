import {colors, colorScheme} from "./_colors"



export const _Title={
  container: {

    height: "100%",
    width: "100%",
    border: "1px solid black",
    position: "relative",
    top:0,
    left:0,
    backgroundColor: "pink"

  },
upperText:{
  position: "relative",
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  fontSize: "4em"
},
  textBox:{
    width:"100%",
    height: "40%",
    position: "absolute",
    bottom:"0",
    backgroundColor: colorScheme.accent
  },
  textSpan:{
    display: "flex",
    height: "100%",
    alignItems: "center"
  },
  name:{
    borderBottom:"2px solid black"
  },
  text:{

    display: "flex",
    justifyContent: "flex-end",
    fontSize: "2em"
  },
  image:{
    maxWidth: "100%",
    maxHeight: "100%"
  },
  decoration: {
    backgroundColor: "pink"
  },
  imageBox:{
    width: "20%",
    height: "100%",
    position: "relative",
    left: "10%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    bottom: "60%"

  }
}
