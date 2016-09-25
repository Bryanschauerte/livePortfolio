import React from 'react'

class GistAddition extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this._updateIframeContent = this._updateIframeContent.bind(this);
  }
  componentDidMount(){
    this._updateIframeContent();
  }
  _updateIframeContent() {
    let target = this.refs[this.props.gistId];
    let iframeWinDoc =  target.contentDocument || target.contentWindow.document;
    var gistScript = '<script type="text/javascript" src="https://gist.github.com/Bryanschauerte/' + this.props.gistId + '.js"></script>';
    var iframeHtml = "<html><body>"+gistScript+'</body></html>';
    iframeWinDoc.open();
    iframeWinDoc.writeln(iframeHtml);
    iframeWinDoc.close();

  }


  render(){
    let framstyle = {width:'100%', height:'100%', fontSize:'1em'}
    return(<div><iframe ref={this.props.gistId} style={framstyle}>
      <p>Your browser does not support iframes.
        <a target="_blank" href={'https://gist.github.com/Bryanschauerte/' + this.props.gistId + '.js'}>
          Click here to open in a new tab</a></p>
    </iframe></div>)
  }
}
GistAddition.propTypes ={
  gistId: React.PropTypes.string.isRequired
}

export default GistAddition;
// <GistAddition gistId="6cb9664eb4411b04bc8dd3e2a0cf7cf6"/>
