import React from 'react';
export function ppHOC(WrappedComponent, childAddition) {
  return class PP extends React.Component {
    render() {
      const newProps = {
        childAddition: childAddition
      }
      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}
