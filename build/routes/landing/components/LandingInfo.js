'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LandingInfo(props) {
  var classDefault = props.classDefault;
  var bondAction = props.bondAction;


  var landingPicture = (0, _classnames2.default)({
    'landingBase': true,
    'landingBaseSTwo': classDefault
  });
  var landingTitle = (0, _classnames2.default)({
    'landingTitle': true,
    'landingTitleSTwo': classDefault
  });
  var landingHeader = (0, _classnames2.default)({
    'landingHeader': true,
    'landingHeaderSTwo': classDefault
  });
  var landingSubHeader = (0, _classnames2.default)({
    'landingSubHeader': true,
    'landingSubHeaderSTwo': classDefault
  });
  var landingMastHead = (0, _classnames2.default)({
    'landingMastHead': true,
    'landingMastHeadSTwo': classDefault
  });
  var landingInnerMastHead = (0, _classnames2.default)({
    'landingInnerMastHead': true,
    'landingInnerMastHeadSTwo': classDefault
  });

  return _react2.default.createElement(
    'div',
    { className: 'landingContainer' },
    _react2.default.createElement(
      'div',
      { className: landingMastHead },
      _react2.default.createElement(
        'div',
        { className: landingInnerMastHead },
        _react2.default.createElement(
          'h1',
          { className: landingTitle },
          'Bryan Schauerte'
        ),
        _react2.default.createElement(
          'h3',
          { className: landingHeader },
          'Web Developer based in Salt Lake City'
        ),
        _react2.default.createElement(
          'p',
          { className: landingSubHeader },
          '-Chop\'n through JS to put cats on the interwebs-'
        )
      )
    )
  );
}
exports.default = LandingInfo;