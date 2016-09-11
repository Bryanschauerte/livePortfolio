import React from "react";
import classNames from 'classnames';


const Header= (props)=> {

  let {classDefault, listItems, filtering, activateInfo, sideActive} = props;

  let headerClass = classNames({
    'headerContainer': true,
    'headerContainerP2': classDefault
  })
  let filterClass = classNames({
    'FilterText': true
  })




  return (
    <div className ={headerClass}>
      <div className='headerTitle'>
        <h1>Bryan Schauerte</h1>
      </div>
      <div className="headerFilterContainer">
        <ul className='headerList'>
          <li >SHOW:</li>

          {props.listItems? props.listItems.map( (item, index) =>
            <li key ={index}
              className={ 'notFilteredOut'}>
              {item.toUpperCase()}S
            </li>): null}

        </ul>
      </div>
      <div className="headerTitle">
        <i style={sideActive? {color:"#FF6E40"}:null}
          className="fa fa-info-circle fa-3x"
          aria-hidden="true"></i>
        </div>
    </div>
  )
}
export default Header;
