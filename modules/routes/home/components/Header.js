import React from "react";
import classNames from 'classnames';


const Header= (props)=> {

  let {classDefault, listItems, filteringPassBack, filteredOut, fullHeader, handleClose} = props;

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
  let switchStyle = classNames({
    'sliderStageOne': true,
    'sliderStageTwo': true,
    'slider-v3': true,

  })

// let handleClick = (e)=>{
//   e.preventDefault();
//   console.log('header hit')
//   props.handleClose(e)
// }

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
      <div onClick={handleClose} className={titleClass}>
        <i
          className="fa fa-info-circle fa-3x"
          aria-hidden="true"></i>
        </div>
    </div>
  )
}
export default Header;
// sideActive? {color:"#FF6E40"}:null
