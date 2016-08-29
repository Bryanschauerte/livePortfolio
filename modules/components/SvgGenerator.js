
import React from 'react';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator(); //for generating keys, tokgen.generate()
import classNames from 'classnames';



 class SvgGenerator extends React.Component{
   constructor(props){
     super(props);
     this._generateTriangle = this._generateTriangle.bind(this);
     this._generateSize = this._generateSize.bind(this);
     this._generateBackground = this._generateBackground.bind(this);
     this._generateCircles = this._generateCircles.bind(this);
   }
   _generateSize(percentDec){

     let height = this.props.dimensions.height;
     let width = this.props.dimensions.width;
     let Th = height * percentDec;
     let Tw = width * percentDec;
     let triangleA = Th*Tw*2.5;
     let area = height*width;
     let numberNeeded = area/triangleA;
     let config={numberNeeded:numberNeeded, triH: Th, triW: Tw, colorTwo:"#1976d2" ,colorOne:"#c12b2b"};

     return config
   }

   _generateTriangle(configObj){

        	let width = configObj.triW;
          let height = configObj.triH
        	let colorOne = configObj.colorOne;//background-color

        return (

        <svg key ={tokgen.generate()} height ={width} width={width}>
          <g transform='rotate(45)'>
            <rect width='200%' stroke="black" strokeWidth="3%" height='200%' fill={colorOne}/>
          </g>
        </svg>

        )
   }

  _generateBackground(percentDec){
    let configObj = this._generateSize(percentDec);

    let backgroundG = [];
    for (var i= configObj.numberNeeded; i > 0; i-- ){
        backgroundG.push( this._generateTriangle(configObj))
    }
    return backgroundG;
    }
_generateCircles(){

let inputColorObj = {
  center:"#01b826",
  topCenter:"#0B1968",
  topLeft:"#0193b8",
  topRight: "#813772",
  bottomRight:"#b82601",
  bottomLeft:"#062f4f"
}
	let center = inputColorObj.center;
	let topCenter = inputColorObj.topCenter;
	let topLeft = inputColorObj.topLeft;
	let topRight = inputColorObj.topRight;
	let bottomRight = inputColorObj.bottomRight;
	let bottomLeft = inputColorObj.bottomLeft;
  let {showBackgAni} = this.props;

let internals=[];

	for(var l=1; l<=10; l++){
    let temp = l*5
    temp += "%"
		internals.push(<circle key ={tokgen.generate()} cx='50%' cy='50%' r={temp} fillOpacity='.3' fill={center} className={showBackgAni? "SVGCcenter": null} />)
	}

	//Top-Center
	for(var n=1; n<=9; n++){
    let temp = 10*(n+1);
    temp += "%"
		internals.push(	<circle key ={tokgen.generate()} cx='50%' cy='-10%' r={temp} fillOpacity='.2' fill={topCenter} className={showBackgAni? "SVGCtopCenter": null} />)
	}

	// Top-Left
	for(var i=1; i<=7; i++){
    let temp = i*10;
    temp += "%"
		internals.push( <circle key ={tokgen.generate()} cx='0' cy='0' r={temp} fillOpacity='.2' fill={topLeft} className={showBackgAni? "SVGtopLeft": null} />)
	}

	// Top-Right
	for(var j=1; j<=7; j++){
    let temp = j*10;
    temp += "%"
		internals.push( <circle key ={tokgen.generate()} cx='100%' cy='0' r={temp} fillOpacity='.1' fill={topRight} className={showBackgAni? "SVGtopRight": null}  />)
	}

	// Bottom-Right
	for(var k=1; k<=7; k++){
    let temp = k*10;
    temp += "%";
	internals.push( <circle key ={tokgen.generate()} cx='100%' cy='100%' r={temp} fillOpacity='.1' fill={bottomRight} className={showBackgAni? "SVGbottomRight": null} />)
	}

	// Bottom-Left
	for(var m=1; m<=7; m++){
    let temp = m*10;
    temp += "%";
		internals.push(	<circle key ={tokgen.generate()} cx='0%' cy='100%' r={temp} fillOpacity='.1' fill={bottomLeft} className={showBackgAni? "SVGbottomLeft": null} />)
	}
  let returnCircles=[];
  returnCircles.push(
    <svg key ={tokgen.generate()} id="TopSVGCirles" height="100%" width="100%">{internals}</svg>
    );

	return returnCircles;

}
   render(){
     let dimensions = this.props.dimensions;


     let backgroundStyle= { stroke: 'blue', strokeWidth: 3}
     console.log(this.props, "props")

return(


  <div key ={tokgen.generate()} className='svgContainer' style={{height:this.props.windowHeight,width:this.props.windowWidth}} >

    {this._generateCircles()}
  </div>


)
   }

 }

SvgGenerator.defaultProps={ width: 800, height: 600 };;

 export default SvgGenerator;
