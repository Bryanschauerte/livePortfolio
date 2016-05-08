import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {changeView, getViewItem, changeLoadingStatus} from '../../logic/action_creators';
import Radium from 'radium';
import {StyleRoot} from 'radium';



const ViewBoxMenu = React.createClass({

  mixins:[PureRenderMixin],

  handleClick(item){
    this.props.changeViewClick(item);
  },


  render(){

    return (
      <StyleRoot>
      <div style={this.props.styles.inner.container}>

        



        <div id ="expandMenu">
{this.props.activeView}
          rendered items for the view

        </div>
      </div>
    </StyleRoot>
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
    activeItem:state.getIn(['activeItem'])

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
export const ViewBoxMenuContainer = connect(
  mapStateToProps,
   mapDispatchToProps
 )(Radium(ViewBoxMenu));
