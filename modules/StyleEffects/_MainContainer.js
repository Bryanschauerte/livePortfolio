
import {colors, colorScheme } from './_colors';

export const _MainContainer = {
  float: "left",
  height: "100%",
  width: "100%",
  backgroundColor: colorScheme.primary,
  zIndex: 3,
  phases:{
    1:{}
  },
  head: {
    height: "10%",
    width: "100%",
    position: "absolute",
    top: "0%",
    backgroundColor: "red"

  },
  contentContainer: {
    height: "80%",
    width: "100%",
    position:"relative",
    top: "10%",
    float: "left"
  },
  content:{
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%"


  },
  footer : {
    height: "10%",
    width: "100%",
    backgroundColor: "black",
    float: "left"
  }

  // categoryBar: {
  //   height: "15%",
  //   width: "90%",
  //   marginLeft:"5%",
  //   float: "left",
  //   backgroundColor: colorScheme.primary,
  //   position: "relative",
  //   top: "2.5%",
  //   border: "1px solid "+ colorScheme.accent,
  //   borderRadius: "2px"
  // },
  //
  // category:{
  //   textShadow: "grey .3px .3px 0px, white 1px 1px .1px, black .9px .9px 0px",
  //   color: colors.darkText,
  //   fontSize:"4em",
  //   display: "flex",
  //   justifyContent: "center"
  // },


}
