'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var classDefault = props.classDefault;
  var listItems = props.listItems;
  var sideActive = props.sideActive;
  var filteringPassBack = props.filteringPassBack;
  var filteredOut = props.filteredOut;
  var fullHeader = props.fullHeader;
  var handleClose = props.handleClose;


  var headerContainerClass = (0, _classnames2.default)({
    'headerContainer': true,
    'headerContainerP2': classDefault
  });
  var titleClass = (0, _classnames2.default)({
    'headerTitle': true
  });
  var filterContainerClass = (0, _classnames2.default)({
    'headerFilterContainer': true
  });
  var headerListClass = (0, _classnames2.default)({
    'headerList': true
  });
  var sideOneBtnStyle = (0, _classnames2.default)({
    'headerTitle': true,
    'sideActive': sideActive,
    'sliderStageTwo': true,
    'slider-v3': true

  });
  var sideTwoBtnStyle = (0, _classnames2.default)({
    'headerTitle': true,
    'sideActive': sideActive,
    'sliderStageTwo': true,
    'slider-v3': true

  });

  return _react2.default.createElement(
    'div',
    { className: headerContainerClass },
    _react2.default.createElement(
      'div',
      { className: titleClass },
      _react2.default.createElement(
        'h1',
        null,
        'Bryan Schauerte'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: filterContainerClass },
      'SHOWING:',
      _react2.default.createElement(
        'ul',
        { className: headerListClass },
        listItems && classDefault ? listItems.map(function (item, index) {
          return _react2.default.createElement(
            'li',
            { key: index,
              onClick: filteringPassBack.bind(null, item),
              className: filteredOut.indexOf(item.toLowerCase()) != -1 ? 'filteredOut' : 'notFilteredOut' },
            item.toUpperCase(),
            'S'
          );
        }) : null
      )
    ),
    _react2.default.createElement(
      'div',
      { onClick: handleClose, className: sideOneBtnStyle },
      sideActive ? _react2.default.createElement('i', { className: 'fa fa-times-circle fa-3x', 'aria-hidden': 'true' }) : _react2.default.createElement('i', { className: 'fa fa-info-circle fa-3x',
        'aria-hidden': 'true' })
    )
  );
};
exports.default = Header;
// sideActive? {color:"#FF6E40"}:null