import React from 'react';

const HorizontalSliderHOC = (WrappedComponent) => {
  return class SlideTime extends React.Component{
    constructor(props){
      super(props);
      this.state= {
        isHovering: false
      }
      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
      this._passBack = this._passBack.bind(this)
    }
    _passBack(){
      return this.state;
    }
    _handleMouseLeave(event){
      event.preventDefault();
      this.setState({isHovering: false});
    }
    _handleMouseEnter(event){
      event.preventDefault();
      this.setState({isHovering: true});
    }
    render() {

      const props = Object.assign({}, this.props, {
        _handleMouseEnter: this._handleMouseEnter.bind(this),
        _handleMouseLeave: this._handleMouseLeave.bind(this),
        _passBack: this._passBack.bind(this)
      })

      return (
        <div
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}>
          <WrappedComponent {...props}/>
        </div>
      )
    }

  }
}
