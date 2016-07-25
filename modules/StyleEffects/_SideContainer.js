import {colors, colorScheme } from './_colors';



export const _SideContainer = {
  height: "100%",
  width: "100%",
  backgroundColor: colorScheme.sideBackground, //darkPrimary
  float: "left",
  header: {
    height: "10%",
    width: "100%",
    backgroundColor: colorScheme.secondPrimary
  },
  content: {
    padding: "2.5%",
    height: "90%",
    width: "95%",

    topBun:{
      height:"25%",
      width: "100%",
      marginBottom: "1.75%",
      backgroundColor: colorScheme.topBun
    },
    leftHotdogBun:{
      height:"32.5%",
      width: "49.125%",
      marginBottom: "1.75%",
      marginRight: "1.75%",
      backgroundColor: colorScheme.leftHotdogBun,
      float: "left",
    },
    rightHotdogBun:{
      height:"32.5%",
      width: "49.125%",
      marginBottom: "1.75%",
      float: "left",
      backgroundColor: colorScheme.rightHotdogBun
    },
    bottomBun:{
      height:"25%",
      width: "100%",
      backgroundColor: colorScheme.bottomBun,
      float: "left"
    }

  }
};
