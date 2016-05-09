
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
export function setState(){
  return {
    type: 'SET_STATE'
  }
}
export function getViewContents(){
  return {
    type: 'GET_VIEW_CONTENTS'
  }
}
export function getViewItem(itemKey, viewOwner){
  return {
    type: 'GET_VIEW_ITEM',
    itemKey: itemKey,
    viewOwner: viewOwner
  }
}
