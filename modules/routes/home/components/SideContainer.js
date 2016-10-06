import React from 'react';
import classNames from 'classnames';
import GistAddition from './GistAddition';


const SideContainer = (props)=>{

let baseSideClass = classNames({

  'SideStartState': true,
  'SideEndState': props.isActive
})

let content = props.content;

let sizeOb = {

      height: props.windowHeight,
      width: props.windowWidth/2
};



    return (

      <div style = {sizeOb}  className ={baseSideClass}>

        <div className ='SCcontent' >
          <div className ='SChamburgerFoldTop'>Welcome</div>
          <div className= "SClongContainer">

            <div className="sitede">

              <span className="TitlesTag"> Introduction</span><br/>
            <p className="talking">
              Hello and welcome to my side project catalog thingy! Working all day with really old CakePHP gets stale quickly, so this is one of my side projects.
              This is my effort to pull my head out of docs and into doing some side projects using React. I don't prefer one over the other, I just happend to be in a <span className="reactName">React</span> mood.</p>
            <br/>
            <div className="talking">
              <span className="TitlesTag">About Me</span><br/>
              I am a software Engineer 2 ( Yay promotion ) at TCS here in Salt Lake City. I fix/create new features for our clients using CakePHP, Angular, JavaScript, jQuery, Less, HTML, PHP and some home-brewed magic.
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
            <span className="TitlesTag"> Demos </span><br/>
            <p className="talking" >Demos are outlines of some of my public sites. They outline <i>pieces</i> of the projects and what they were made to accomplish. Not how-tos, there are plenty of ones out there. Ill be walking through the thought process of
                 turning ideas into <span className="reactName">React</span> or <span className="angularName">Angular</span> projects. The links to the each demo's repository can be found at the bottom of its large-verion container.
            </p>
            <br/><p className="talking" >Im also sticking in a few older <span className="angularName">Angular</span> applications to get this demo thing started. An empty garden grows no plants.</p>
            <br/>
            <span className="TitlesTag"> Blogs</span><br/>
            <p className="talking">
              Not much of a blog... More of a how to get started on Webpack/SASS/Node (etc) and some tips and tricks that I found useful.
            </p>
            <span className="TitlesTag"> Other </span><br/>
            <p className="talking" >This site's content is coming from an database and is rendered using <span className="reactName">React</span>. When I use my admin to create a new post, I have the option to add a type which is then plopped into the filter... If its not a 'blog' or 'demo', Ill try to keep the type straightforward.</p>
            <p className='talking'>A search filter will be available when the need arises or when I feel that there is enough content to justify one ;)</p>


          <br/>
            <p className="talking">
              Any suggestions on what to build/study next, feel free to fire off a message.  Need help with a project/Site? Im your guy, anything to get away from CakePHP :)
            </p>

            <br/><p className="talking" >Feel free to leave comments or send emails on better solutions or different techniques ( sharing === caring ) !</p>

                 </div>

          </div>
          <div className ='SChamburgerFoldBot'>

              Feel free to reach out!
            <ul>
              <li><a href="mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site" target="_top"><i className="fa fa-envelope fa-1x" aria-hidden="true"></i></a></li>
              <li><a href="https://github.com/Bryanschauerte" target="_blank"> <i className="fa fa-github-square fa-1x" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/bryanschauerte" target="_blank"><i className="fa fa-linkedin fa-1x" aria-hidden="true"></i></a></li>


              </ul>
          </div>
        </div>
      </div>)

    }
export default SideContainer;
