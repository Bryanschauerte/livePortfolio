import React from 'react'
export default React.createClass({
  render() {
    return (
      <div>
        <h1>app rendered</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
})
