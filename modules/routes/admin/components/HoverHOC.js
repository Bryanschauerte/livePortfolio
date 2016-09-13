import React from 'react';

const HoverHOC = (WrappedComponent, props)=>{

    return class HoverHOC extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          isHovering: false,
          isClicked: false,

         };
        this._mouseEntered = this._mouseEntered.bind(this);
        this._mouseLeft = this._mouseLeft.bind(this);
        this._handleClick = this._handleClick.bind(this);


      }
        _handleClick(){

          let current = this.state.isClicked;
          this.setState({
            isClicked: !current
          })

        }

        _mouseEntered(event){
          event.preventDefault();
          this.setState({isHovering: true});
        }

        _mouseLeft(event){
          event.preventDefault();
          this.setState({isHovering: false});
        }


      render(){

        const props = Object.assign({}, this.props, {
          _mouseEntered: this._mouseEntered.bind(this),
          _mouseLeft: this._mouseLeft.bind(this),
          _handleClick: this._handleClick.bind(this)
        })

        return ( <div>
                      <WrappedComponent {...props}/>
                  </div>)
            }
    }
}

export default HoverHOC;
