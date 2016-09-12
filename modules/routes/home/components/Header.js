import React from "react";
import classNames from 'classnames';


const Header= (props)=> {

  let {classDefault, listItems, filteringPassBack, filteredOut} = props;

  let headerClass = classNames({
    'headerContainer': true,
    'headerContainerP2': classDefault
  })



  return (
    <div className ={headerClass}>
      <div className='headerTitle'>
        <h1>Bryan Schauerte</h1>
      </div>
      <div className="headerFilterContainer">
        <ul className='headerList'>
          <li >SHOW:</li>

          {listItems && classDefault? listItems.map( (item, index) =>
            <li key ={index}
              onClick={filteringPassBack.bind(null, item)}
              className={ filteredOut.indexOf(item)!= -1? 'filteredOut': 'notFilteredOut'}>
              {item.toUpperCase()}S
            </li>): null}

        </ul>
      </div>
      <div className="headerTitle">
        <i
          className="fa fa-info-circle fa-3x"
          aria-hidden="true"></i>
        </div>
    </div>
  )
}
export default Header;
// sideActive? {color:"#FF6E40"}:null
