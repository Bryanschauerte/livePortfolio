function delayStyleChange(property){
  window.setTimeout(changeProperty( property ), 1000);
}
function changeProperty(property){
  return property = !property;
}

export default delayStyleChange;
