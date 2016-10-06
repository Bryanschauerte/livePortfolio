'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _GistAddition = require('./GistAddition');

var _GistAddition2 = _interopRequireDefault(_GistAddition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideContainer = function SideContainer(props) {

  var baseSideClass = (0, _classnames2.default)({

    'SideStartState': true,
    'SideEndState': props.isActive
  });

  var content = props.content;

  var sizeOb = {

    height: props.windowHeight,
    width: props.windowWidth / 2
  };

  return _react2.default.createElement(
    'div',
    { style: sizeOb, className: baseSideClass },
    _react2.default.createElement(
      'div',
      { className: 'SCcontent' },
      _react2.default.createElement(
        'div',
        { className: 'SChamburgerFoldTop' },
        'Welcome'
      ),
      _react2.default.createElement(
        'div',
        { className: 'SClongContainer' },
        _react2.default.createElement(
          'div',
          { className: 'sitede' },
          _react2.default.createElement(
            'span',
            { className: 'TitlesTag' },
            ' Introduction'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            { className: 'talking' },
            'Hello and welcome to my side project catalog thingy! Working all day with really old CakePHP gets stale quickly, so this is one of my side projects. This is my effort to pull my head out of docs and into doing some side projects using React. I don\'t prefer one over the other, I just happend to be in a ',
            _react2.default.createElement(
              'span',
              { className: 'reactName' },
              'React'
            ),
            ' mood.'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'talking' },
            _react2.default.createElement(
              'span',
              { className: 'TitlesTag' },
              'About Me'
            ),
            _react2.default.createElement('br', null),
            'I am a software Engineer 2 ( Yay promotion ) at TCS here in Salt Lake City. I fix/create new features for our clients using CakePHP, Angular, JavaScript, jQuery, Less, HTML, PHP and some home-brewed magic.',
            _react2.default.createElement('br', null),
            'A quick summary of adult me:',
            _react2.default.createElement(
              'ul',
              { className: 'meSumList' },
              _react2.default.createElement(
                'li',
                null,
                'From Illinois'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Worked a year for AmeriCorps in Charlotte, NC while working on my Masters'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Was about to be a science teacher, took a break to teach English in Korea'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Met a girl in Korea, yatta yatta, 3 years later - Married her'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Learned JS to make my student reports easier'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Fell in love again. Programming this time'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Made learning it my life. Moved back to America to go to DevMountain restablish a network'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Now, I work... then come home and program in JS for 4 more hours (wife doesnt love that). Weekends, I do more. (Wife REALLY doesnt like that..) '
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'span',
            { className: 'TitlesTag' },
            ' Demos '
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            { className: 'talking' },
            'Demos are outlines of some of my public sites. They outline ',
            _react2.default.createElement(
              'i',
              null,
              'pieces'
            ),
            ' of the projects and what they were made to accomplish. Not how-tos, there are plenty of ones out there. Ill be walking through the thought process of turning ideas into ',
            _react2.default.createElement(
              'span',
              { className: 'reactName' },
              'React'
            ),
            ' or ',
            _react2.default.createElement(
              'span',
              { className: 'angularName' },
              'Angular'
            ),
            ' projects. The links to the each demo\'s repository can be found at the bottom of its large-verion container.'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            { className: 'talking' },
            'Im also sticking in a few older ',
            _react2.default.createElement(
              'span',
              { className: 'angularName' },
              'Angular'
            ),
            ' applications to get this demo thing started. An empty garden grows no plants.'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'span',
            { className: 'TitlesTag' },
            ' Blogs'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            { className: 'talking' },
            'Not much of a blog... More of a how to get started on Webpack/SASS/Node (etc) and some tips and tricks that I found useful.'
          ),
          _react2.default.createElement(
            'span',
            { className: 'TitlesTag' },
            ' Other '
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            { className: 'talking' },
            'This site\'s content is coming from an database and is rendered using ',
            _react2.default.createElement(
              'span',
              { className: 'reactName' },
              'React'
            ),
            '. When I use my admin to create a new post, I have the option to add a type which is then plopped into the filter... If its not a \'blog\' or \'demo\', Ill try to keep the type straightforward.'
          ),
          _react2.default.createElement(
            'p',
            { className: 'talking' },
            'A search filter will be available when the need arises or when I feel that there is enough content to justify one ;)'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            { className: 'talking' },
            'Any suggestions on what to build/study next, feel free to fire off a message.  Need help with a project/Site? Im your guy, anything to get away from CakePHP :)'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            { className: 'talking' },
            'Feel free to leave comments or send emails on better solutions or different techniques ( sharing === caring ) !'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'SChamburgerFoldBot' },
        'Feel free to reach out!',
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: 'mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site', target: '_top' },
              _react2.default.createElement('i', { className: 'fa fa-envelope fa-1x', 'aria-hidden': 'true' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/Bryanschauerte', target: '_blank' },
              ' ',
              _react2.default.createElement('i', { className: 'fa fa-github-square fa-1x', 'aria-hidden': 'true' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://www.linkedin.com/in/bryanschauerte', target: '_blank' },
              _react2.default.createElement('i', { className: 'fa fa-linkedin fa-1x', 'aria-hidden': 'true' })
            )
          )
        )
      )
    )
  );
};
exports.default = SideContainer;