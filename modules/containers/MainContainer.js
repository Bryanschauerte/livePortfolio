import React from 'react';
import Introduction from '../components/Introduction';
import Title from '../components/Title';
import classNames from 'classnames';
import Header from '../components/Header';

import LandingDrop from '../components/LandingDrop';
import MainView from './MainView';



function MainContainer (props){

    let {activateTrans, boundNextView, contdimen, showBackgAni} = props;

    let headerClass = classNames({
      'headerBase': true,
      'headerPhaseTwo': activateTrans
    });
    let mainViewClass = classNames({
      'mainViewHide': true,
      'mainViewShow': activateTrans
    });

    return (
      <div className='mCBase'>
          <div>
            <LandingDrop
              showBackgAni ={!activateTrans}
              dimensions={contdimen}
              bondAction ={boundNextView.bind(this, 'home')}
              classDefault={ activateTrans } />
          </div>
          <div className={mainViewClass}>
            <MainView
              dimensions={contdimen}
              filterOutTypes ={props.filtering}
              showItems={ activateTrans } />
          </div>
      </div>

  );

}

export default MainContainer;
