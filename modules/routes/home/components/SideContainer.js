import React from 'react';
import classNames from 'classnames';



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


    return (

      <div style = {sizeOb.main} onMouseLeave={props.handleClose}  className ={baseSideClass}>

        <div className ='SCcontent' style = {sizeOb.contents}>
          <div className ='SChamburgerFoldTop'>Welcome</div>
          <div className= "SClongContainer">

            <div className="sitede">

              <span className="TitlesTag"> Introduction</span><br/>
            <p className="talking">
              Hello and welcome to my portfolio/demo thing! Working all day with really old CakePHP gets stale quickly, so I took up learning React. I recently found myself learning more than doing. Flux lead to Redux, Redux led to Relay...React Native... Time to start doing.
              This is my effort to pull my head out of docs and into doing some side projects using React. I am already more than comfortable with Angular and I'd like to get as proficient with another framework.<i className="fa fa-arrows-v" aria-hidden="true"></i></p>
            <br/>
            <div className="talking">
              <span className="TitlesTag">About Me</span><br/>
              I am a software Engineer 2 ( Yay promotion ) at TCS here in Salt Lake City. I fix/create new features for our clients using CakePHP, JavaScript, jQuery, Less, HTML, PHP and some home-brewed magic.
               <br/>
               A quick summary of adult me:
               <ul className="meSumList">
                 <li>From Illinois</li>
                 <li>Worked a year for AmeriCorps in Charlotte, NC while working on my Masters</li>
                 <li>Was about to be a science teacher, took a break to teach English in Korea</li>
                 <li>Met a girl in Korea, yatta yatta, 3 years later - Married her</li>
                 <li>Learned JS to make my student reports easier</li>
                 <li>Fell in love again. Programming this time</li>
                 <li>Made learning it my life. Moved back to America to go to DevMountain restablish a network</li>
                 <li>Now, I work... then come home and program in JS for 4 more hours (wife doesnt love that). Weekends, I do more. (Wife REALLY doesnt like that..) </li>
               </ul>

            </div>
            <br/>
            <span className="TitlesTag"> Demos and Projects</span><br/>
            <p className="talking" >Instead of writing <i>HOW</i> to do things ( plenty of those out there ), Ill be walking through the thought process of
                 turning comps into <span className="reactName">React</span> components. The links to the each demo can be found at the bottom of its large-verion container.
            </p>
            <br/><p className="talking" >Im also sticking in a few <span className="angularName">Angular</span> applications to get this demo thing started. An empty garden grows no plants.</p>
            <br/>
            <span className="TitlesTag"> Blogs</span><br/>
            <p className="talking">
              Not much of a blog... More of a how to get started on Webpack/SASS/Node (etc) and some tips and tricks that I found useful.
            </p>
            <p className="talking">
              Any suggestions on what to build/study next, feel free to fire off a message. Im currently just working on higher order components/reusable UI components, as well as putting more magic into this site's Node server. Need help with a project/Site? Im your guy, anything to get away from CakePHP :)
            </p>

            <br/><p className="talking" >Feel free to leave comments ( comming soon-> Node magic's first addition) on better solutions or even different techniques!</p>

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
