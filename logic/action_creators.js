
export function changeView(requestedview) {
  return {
    entry: requestedview,
    type: 'CHANGE_VIEW'

  };
}
export function changeLoadingStatus(){
  return {
    type: 'CHANGE_LOADING_STATUS'
  }
}
export function getState(){
  return {
    type: 'GET_STATE'
  }
}
export function getViewContents(){
  return {
    type: 'GET_VIEW_CONTENTS'
  }
}
export function getViewItem(itemTitle, viewOwner){
  return {
    type: 'GET_VIEW_ITEM',
    itemTitle: itemTitle,
    viewOwner: viewOwner
  }
}
