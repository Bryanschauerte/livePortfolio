export const viewAction ={
  changeViewClick: (nextView) => {
    changeView(nextView);
  },
  //an in depth view of the item in the view
  getViewItemClick: (itemKey, viewOwner)=>{
    dispatch(getViewItem(itemKey, viewOwner));
  },
  changeLoadingStatusClick: ()=>{
    dispatch(changeLoadingStatus());
  },
  //to see the different objects tiltles in the category, not the actual contents
  getViewContentClick: (viewSection)=>{
    dispatch(getViewContents(viewSection));
  }

}
