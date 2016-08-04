const styling ={

container: (sizes) => {
  return {
    inactive :{
        height: sizes.inactive.height,
        float: "left",
        width: sizes.inactive.width,
        backgroundColor: "gray",
        border: "2px solid red",

      },

      active: {
        height: sizes.active.height,
        float: "left",
        width: sizes.active.width,
        backgroundColor: "gray",
        border: "2px solid blue",
        overflow: "scroll"
      }
    }
}
}
export default styling;
