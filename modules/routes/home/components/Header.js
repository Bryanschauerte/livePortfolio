import React from "react";
import classNames from 'classnames';


const Header= (props)=> {

  let {classDefault, listItems, filteringPassBack, filteredOut, fullHeader} = props;
console.log("header", fullHeader)
  let headerContainerClass = classNames({
    'headerContainer': true,
    'headerContainerP2': classDefault
  })
  let titleClass = classNames({
    'headerTitle': true,
  })
  let filterContainerClass = classNames({
    'headerFilterContainer': true,
  })
  let headerListClass = classNames({
    'headerList': true,
  })



  return (
    <div className ={headerContainerClass}>
      <div className={titleClass}>
        <h1>Bryan Schauerte</h1>
      </div>
      <div className={filterContainerClass}>
        <ul className={headerListClass}>
          <li >SHOW:</li>

          {listItems && classDefault? listItems.map( (item, index) =>
            <li key ={index}
              onClick={filteringPassBack.bind(null, item)}
              className={ filteredOut.indexOf(item)!= -1? 'filteredOut': 'notFilteredOut'}>
              {item.toUpperCase()}S
            </li>): null}

        </ul>
      </div>
      <div className={titleClass}>
        <i
          className="fa fa-info-circle fa-3x"
          aria-hidden="true"></i>
        </div>
    </div>
  )
}
export default Header;
// sideActive? {color:"#FF6E40"}:null
