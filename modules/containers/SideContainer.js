import React from 'react';
import classNames from 'classnames';
import _SideContainer from '../StyleEffects/_SideContainer';


const SideContainer = (props)=>{

let baseSideClass = classNames({

  'SideStartState': true,
  'SideEndState': props.isActive
})

let content = props.content;
let size = props.sizes;
let sizeOb = {
main:{height: size.height-2, width: size.width},
head:{height: size.height*.07, width: size.width},
contents:{height: size.height*.93, width: size.width}

};

let colorObj ={
  blog:"#B8A197",
  demo:"#7FC461",
  project:"#606285"
}
// onMouseLeave={props.handleClose}
    return (

      <div style = {sizeOb.main} onMouseLeave={props.handleClose}  className ={baseSideClass}>

        <div className ='SCcontent' style = {sizeOb.contents}>
          <div className ='SChamburgerFoldTop'>Welcome</div>
          <div className= "SClongContainer">

            <div className="sitede">

              <span className="TitlesTag"> Introduction</span><br/>
            <p className="talking">
              Hello and welcome to my portfolio/demo thing! I recently found myself learning more than doing.
              This is my effort to pull my head out of docs and into doing some side projects.</p>
            <br/>
            <span className="TitlesTag"> Demos and Projects</span><br/>
            <p className="talking" >Instead of writing <i>HOW</i> to do things ( plenty of those out there ), Ill be walking through the thought process of
                 turning comps into <span className="reactName">React</span> components. The links to the each demo can be found at the bottom of its large-verion container.
            </p>
            <br/><p className="talking" >Im also sticking in a few <span className="angularName">Angular</span> applications to even out the 'componets vs full sites' ratio. </p>
            <br/>
            <span className="TitlesTag"> Blogs</span><br/>
            <p className="talking">
              Not much of a blog... More of a how to get started on Webpack/SASS/Node (etc) and some tips and tricks that I found useful.
            </p>

            <br/><p className="talking" >Feel free to leave comments on better solutions or even different techniques!</p>

                 </div>

          </div>
          <div className ='SChamburgerFoldBot'>

              Feel free to reach out!
            <ul>
              <li><a href="mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site" target="_top">Send email <i className="fa fa-envelope fa-1x" aria-hidden="true"></i></a></li>
              <li><a href="https://github.com/Bryanschauerte" target="_blank">Jump to my gitHub <i className="fa fa-github-square fa-1x" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/bryanschauerte" target="_blank">Connect with me on LinkedIn <i className="fa fa-linkedin-square fa-1x" aria-hidden="true"></i></a></li>


              </ul>
          </div>
        </div>
      </div>)

    }
export default SideContainer;
