
export function changeView(requestedview) {
  return {
    entry: requestedview,
    type: 'CHANGE_VIEW'


  };
}
export function changeActiveItem(ItemSelection) {
  return {
    ItemSelection: ItemSelection,
    type: 'CHANGE_ACTIVE_ITEM'
  };
}
export function setState(previousValue, currentValue){
  return {
    type: 'SET_STATE',
    previousValue: previousValue,
    currentValue: currentValue

  }
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
export function getCategories(){
  return {
    type: 'GET_CATEGORIES'
  }
}

export function getInitialState(){
  return {
    type: 'GET_INITIAL_STATE'
  }
}
export function getActiveItemContents( activeItem ){
  return {
    type: 'GET_ACTIVE_ITEM_CONTENTS',
    activeItem: activeItem
  }
}
export function getViewItem(itemTitle, viewOwner){
  return {
    type: 'GET_VIEW_ITEM',
    itemTitle: itemTitle,
    viewOwner: viewOwner
  }
}
