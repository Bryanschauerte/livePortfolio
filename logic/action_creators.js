
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
