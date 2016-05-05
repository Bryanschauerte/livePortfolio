import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {changeView, getViewItem, changeLoadingStatus} from '../../logic/action_creators';
// import {ViewBoxButton} from '../components/ViewBoxButton';


const ViewBoxMenu = React.createClass({

  mixins:[PureRenderMixin],

  handleClick(item){
    // this.expandMenu();

    this.props.changeViewClick(item);

  },
  expandMenu(){
    console.log("second")
    // use this to rerender how the classnames object looks
  },
  constractMenu(){

  },

  renderButtons(controlOfView, className){
    let buttonClasses =classNames({
      'plainButton' : true,
      'buttonPhaseOne': this.props.activeView == controlOfView,
      'buttonPhaseTwo': this.props.activeView == controlOfView
      // ,
      // 'buttonPhaseThree': this.props.activeView == controlOfView,
      // 'buttonPhaseFour': this.props.activeView == controlOfView

    })
    return(
      <button
        className={buttonClasses}
        key = {controlOfView}
        onClick={this.handleClick.bind(this, controlOfView)}>
        {controlOfView}
      </button>

    )
  },

  render(){

    let buttonsForView = Object.keys(this.props.categories).map((item, index)=>{
      return this.renderButtons(item);
    });


    let expandMenuClasses =classNames({
      'blogButton': this.props.activeView == "blog",
      'expandMenuClassEnter': false,
      'expandMenuClassEnd': false,
      'expandMenuClassLeave': false

    })

    return (
      <div>
        <div>
{buttonsForView}

        </div>

        <div id ="expandMenu" className={expandMenuClasses}>
{this.props.activeView}
          rendered items for the view

        </div>
      </div>
    )
  }
})

const mapStateToProps= (state)=> {

  return {
    activeView: state.getIn(['activeView']),
    isLoading: state.getIn(['isLoading']),
    categories: {
      About: state.getIn(['About']),
      Blog: state.getIn(['Blog']),
      CodeShare: state.getIn(['CodeShare']),
      Future: state.getIn(['Future'])
    },
    activeItem:state.getIn(['isLoading'])

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeViewClick: (nextView) => {
      dispatch(changeView(nextView));
    },
    changeLoadingStatusClick: ()=>{
      dispatch(changeLoadingStatus());
    },
    getViewItemClick: (itemLocation)=>{
      dispatch(getViewItem(itemLocation));
    }
  }
}
export const ViewBoxMenuContainer = connect(mapStateToProps, mapDispatchToProps)(ViewBoxMenu);
