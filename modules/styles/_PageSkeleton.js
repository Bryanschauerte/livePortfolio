
export const PageSkeletonStyles=
  {
masterContainer: {
  margin:                  0,
  backgroundColor:         "#b0cad5",
  height:                  "100%",
  width:                   "100%",
  position:                "absolute",
  display:                 "flex"
}}
// ,
//
//
// '@media(max-width:760px)':{
//
//   masterContainer: {
//       backgroundColor:         "#b0cad5",
//       height:                  "100%",
//       width:                   "100%",
//       position:                "relative"
//
//     },
//     viewContainer: {
//       backgroundColor:          "green",
//       height:                   "80%",
//       width:                    "100%",
//       display:                  "block",
//       verticalAlign:            "top"
//
//     },
//
//     sideContainer: {
//       backgroundColor:         "blue",
//       height:                  "20%",
//       width:                   "100%",
//       display:                 "block",
//       verticalAlign:           "top"
//
//     }
// }
//
// }

//
// // Radium.getState(state, elementKey, value)   doesnt work on stateless
//
// ///ex
// //
//
//
//
// //   ccs cascade is reversed
// var styles = {
//   base: {
//     background: 'blue',
//     border: 0,
//     borderRadius: 4,
//     color: 'white',
//     padding: '1.5em',
//
//     ':hover': {
//       backgroundColor: 'red'
//     },
//
//     ':focus': {
//       backgroundColor: 'green'
//     },
//
//     ':active': {
//       backgroundColor: 'yellow'
//     },
//   },
//
//   block: {
//     display: 'block',
//
//     ':hover': {
//       boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
//     }
//   },
// };
// var style = {
//   width: '25%',
//
//   '@media (min-width: 320px)': {
//     width: '100%'
//   }
// };
// var style = {
//   width: '25%',
//
//   '@media (min-width: 320px)': {
//     width: '100%',
//
//     ':hover': {
//       background: 'white'
//     }
//   }
// };
//
//
// // Inside render
// return (
//   <div>
//     <div key="one" style={[styles.both, styles.one]} />
//     <div key="two" style={[styles.both, styles.two]} />
//   </div>
// );
//
// var styles = {
//   both: {
//     background: 'black',
//     border: 'solid 1px white',
//     height: 100,
//     width: 100
//   },
//   one: {
//     ':hover': {
//       background: 'blue',
//     }
//   },
//   two: {
//     ':hover': {
//       background: 'red',
//     }
//   }
// };
//
//
//
// // Inside render
// return (
//   <div>
//     <button key="button" style={[styles.button]}>Hover me!</button>
//     {Radium.getState(this.state, 'button', ':hover') ? (
//       <span>{' '}Hovering!</span>
//     ) : null}
//   </div>
// );
// // You can query Radium's state using Radium.getState.
// // This allows you to style or render one element based on
// // the state of another, e.g. showing a message when a button is hovered.
//
// var styles = {
//   button: {
//     // Even though we don't have any special styles on the button, we need
//     // to add empty :hover styles here to tell Radium to track this element's
//     // state.
//     ':hover': {}
//   }
// };
//
//
// <Style
//   scopeSelector=".scoping-class"
//   rules={{
//     color: 'blue',
//     span: {
//       fontFamily: 'Lucida Console, Monaco, monospace'
//     }
//   }}
// />
// will return:
//
// <style>
// .scoping-class {
//   color: 'blue';
// }
// .scoping-class span {
//   font-family: 'Lucida Console, Monaco, monospace'
// }
// </style>
