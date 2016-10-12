'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _MainView = require('./MainView');

var _MainView2 = _interopRequireDefault(_MainView);

var _SideContainer = require('./SideContainer');

var _SideContainer2 = _interopRequireDefault(_SideContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

    _this.state = {
      loaded: false,
      dataBaseContents: null,
      filteredOut: [],
      typesAvaliable: [],
      displaySideContainer: false,
      initialScroll: false,
      activeItem: null
    };

    _this._requestAllContents = _this._requestAllContents.bind(_this);
    _this._constructTypeList = _this._constructTypeList.bind(_this);
    _this._handleFilter = _this._handleFilter.bind(_this);
    _this._handleScroll = _this._handleScroll.bind(_this);
    _this._handleShowInfoContainer = _this._handleShowInfoContainer.bind(_this);
    _this.showThisItem = _this.showThisItem.bind(_this);
    _this.renderContents = _this.renderContents.bind(_this);
    _this._handleCloseSide = _this._handleCloseSide.bind(_this);
    _this._handleUpdateActiveItem = _this._handleUpdateActiveItem.bind(_this);
    _this.filterByActiveId = _this.filterByActiveId.bind(_this);

    return _this;
  }

  _createClass(Home, [{
    key: '_handleShowInfoContainer',
    value: function _handleShowInfoContainer() {

      var containerState = this.state.displaySideContainer;
      this.setState({
        displaySideContainer: !containerState
      });
    }
  }, {
    key: '_handleUpdateActiveItem',
    value: function _handleUpdateActiveItem(id) {

      this.state.activeItem ? this.setState({ activeItem: null }) : this.setState({ activeItem: id });
    }
  }, {
    key: '_handleCloseSide',
    value: function _handleCloseSide() {
      this.setState({
        displaySideContainer: false
      });
    }
  }, {
    key: '_handleScroll',
    value: function _handleScroll() {
      var target = document.getElementById("homeMain");
      target.scrollTop = 0;
    }
  }, {
    key: '_constructTypeList',
    value: function _constructTypeList(contents) {

      var tempTypes = this.state.typesAvaliable;
      contents.map(function (item) {

        if (item.contentItems.type && tempTypes.indexOf(item.contentItems.type) == -1) {
          tempTypes.push(item.contentItems.type);
        }
      });

      this.setState({
        typesAvaliable: tempTypes
      });
    }
  }, {
    key: '_handleFilter',
    value: function _handleFilter(type) {

      type = type.toLowerCase();
      var currentFilter = this.state.filteredOut;
      currentFilter.indexOf(type) == -1 ? currentFilter.push(type) : currentFilter.splice(currentFilter.indexOf(type), 1);
      this.setState({
        filteredOut: currentFilter
      });
    }
  }, {
    key: '_requestAllContents',
    value: function _requestAllContents() {
      var _this2 = this;

      _axios2.default.get('/maincontents').then(function (response) {
        var contents = response.data;
        _this2._constructTypeList(contents);
        _this2.setState({
          dataBaseContents: contents,
          loaded: true
        });
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._requestAllContents();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: 'filterByActiveId',
    value: function filterByActiveId(item) {
      return item._id === this.state.activeItem;
    }
  }, {
    key: 'showThisItem',
    value: function showThisItem(item) {
      return this.state.filteredOut.indexOf(item.contentItems.type.toLowerCase()) == -1 ? true : false;
    }
  }, {
    key: 'renderContents',
    value: function renderContents() {
      var _this3 = this;

      var contents = this.state.dataBaseContents.filter(this.showThisItem);
      if (this.state.activeItem != null) {
        contents = contents.filter(this.filterByActiveId);
      }
      var toShow = contents.map(function (item) {

        var boundActiveItemUpdate = function boundActiveItemUpdate() {
          return _this3._handleUpdateActiveItem(item._id);
        };
        return _react2.default.createElement(_MainView2.default, _extends({
          handleScroll: _this3._handleScroll,
          closeSide: _this3._handleCloseSide,
          itemToDisplay: item,
          loaded: _this3.state.loaded,
          typesAvaliable: _this3.state.typesAvaliable,
          updateActiveItem: boundActiveItemUpdate,
          isBig: _this3.state.activeItem != null
        }, _this3.props));
      });
      return toShow;
    }
  }, {
    key: 'render',
    value: function render() {

      var filteredOut = this.state.filteredOut;
      var listItems = this.state.typesAvaliable;

      return _react2.default.createElement(
        'div',
        { className: 'homeContainer' },
        _react2.default.createElement(_Header2.default, {
          classDefault: this.state.loaded,
          listItems: listItems,
          filteringPassBack: this._handleFilter,
          filteredOut: filteredOut,
          sideActive: this.state.displaySideContainer,
          handleClose: this._handleShowInfoContainer }),
        _react2.default.createElement(
          'div',
          { id: 'homeMain', classDefault: this.state.loaded, className: 'homeMainContainer' },
          this.state.loaded ? this.renderContents() : null
        ),
        _react2.default.createElement(_SideContainer2.default, _extends({}, this.props, {
          isActive: this.state.displaySideContainer,
          handleClose: this._handleShowInfoContainer }))
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;