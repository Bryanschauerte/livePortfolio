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


  let isFilteredOut = (item)=>{
    return filtering.indexOf(item.toLowerCase()) != -1
  }
  return (
    <div className ={headerClass}>
      <div className='headerTitle'>
        <h1>Bryan Schauerte</h1>
      </div>
      <div className="headerFilterContainer">
        <ul className='headerList'>
          <li >SHOW:</li>

          {props.listItems.map( (item, index) =>
            <li key ={index}
              className={ isFilteredOut(item)? 'filteredOut': 'notFilteredOut'}
              onClick={props.editFilter.bind(this, item.toLowerCase() )} >
              {item.toUpperCase()}S
            </li>)}

        </ul>
      </div>
      <div className="headerTitle">
        <i onClick={activateInfo}
          style={sideActive? {color:"#FF6E40"}:null}
          className="fa fa-info-circle fa-3x"
          aria-hidden="true"></i>
        </div>
    </div>
  )
}
export default Header;
