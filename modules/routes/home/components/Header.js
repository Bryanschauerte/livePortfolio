import React from "react";
import classNames from 'classnames';


const Header= (props)=> {

  let {classDefault, listItems, sideActive, filteringPassBack, filteredOut, fullHeader, handleClose} = props;

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
  let sideOneBtnStyle = classNames({
    'headerTitle': true,
    'sideActive': sideActive,
    'sliderStageTwo': true,
    'slider-v3': true,

  })
  let sideTwoBtnStyle = classNames({
    'headerTitle': true,
    'sideActive': sideActive,
    'sliderStageTwo': true,
    'slider-v3': true,

  })


  return (
    <div className ={headerContainerClass}>
      <div className={titleClass}>
        <h1>Bryan Schauerte</h1>
      </div>
      <div className={filterContainerClass}>
        SHOWING:
        <ul className={headerListClass}>
          {listItems && classDefault? listItems.map( (item, index) =>
            <li key ={index}
              onClick={filteringPassBack.bind(null, item)}
              className={ filteredOut.indexOf(item.toLowerCase())!= -1? 'filteredOut': 'notFilteredOut'}>
              {item.toUpperCase()}S
            </li>): null}

        </ul>
      </div>
      <div onClick={handleClose} className={sideOneBtnStyle}>
        {sideActive?<i className="fa fa-times-circle fa-3x" aria-hidden="true"></i>:
          <i className="fa fa-info-circle fa-3x"
          aria-hidden="true"></i>}
        </div>
    </div>
  )
}
export default Header;
// sideActive? {color:"#FF6E40"}:null
