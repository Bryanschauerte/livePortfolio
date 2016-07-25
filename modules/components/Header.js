import React from "react";
import classNames from 'classnames';
import TextBoxPreview from './TextBoxPreview';

function Header (props){
 let {classDefault, listItems, filtering} = props;
 //content to be removed later
 let filterTitle = "Filter Me:";


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
        {/*<TextBoxPreview classObject ={filterClass} text = {filterTitle}/>*/}

        <ul className='headerList'>
          <li >SHOW:</li>
          {props.listItems.map( (item, index) =>
            <li key ={index}
              className={ isFilteredOut(item)? 'filteredOut': 'notFilteredOut'}
              onClick={props.editFilter.bind(this, item.toLowerCase() )} >
              {item.toUpperCase()}
            </li>
            )}

        </ul>
      </div>
    </div>
  )
}
export default Header;
