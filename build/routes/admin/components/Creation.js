'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SubmittingHOC = require('./SubmittingHOC');

var _SubmittingHOC2 = _interopRequireDefault(_SubmittingHOC);

var _EmptyInput = require('./EmptyInput');

var _EmptyInput2 = _interopRequireDefault(_EmptyInput);

var _BtnHandler = require('./BtnHandler');

var _BtnHandler2 = _interopRequireDefault(_BtnHandler);

var _SubmitBTN = require('./SubmitBTN');

var _SubmitBTN2 = _interopRequireDefault(_SubmitBTN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Creation = function (_React$Component) {
  _inherits(Creation, _React$Component);

  function Creation(props) {
    _classCallCheck(this, Creation);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Creation).call(this, props));

    _this.state = {
      mainShowing: 0,
      feilds: _this.props.feilds,
      editing: false

    };

    _this._addRemoveMainGroup = _this._addRemoveMainGroup.bind(_this);
    _this._handleSubmit = _this._handleSubmit.bind(_this);
    _this.grabData = _this.grabData.bind(_this);
    _this._renderMainInput = _this._renderMainInput.bind(_this);
    _this._handleInputDataChange = _this._handleInputDataChange.bind(_this);
    _this._changeMainIndex = _this._changeMainIndex.bind(_this);
    _this._removeIndex = _this._removeIndex.bind(_this);
    _this._handleButton = _this._handleButton.bind(_this);
    _this._handleKeydown = _this._handleKeydown.bind(_this);
    _this._handlePreviewInputDataChange = _this._handlePreviewInputDataChange.bind(_this);
    _this._handleMouseEnter = _this._handleMouseEnter.bind(_this);
    _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
    _this._handlefocus = _this._handlefocus.bind(_this);
    _this._handleBlur = _this._handleBlur.bind(_this);

    return _this;
  }

  _createClass(Creation, [{
    key: '_handleKeydown',
    value: function _handleKeydown(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ feilds: this.props.feilds });
      window.addEventListener('keydown', this._handleKeydown);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      this.setState({
        feilds: nextProps.feilds
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.addEventListener('keydown', this._handleKeydown);
    }
  }, {
    key: '_handleBlur',
    value: function _handleBlur(event) {

      event.preventDefault();
      if (this.props.isPreview) {
        this.props._handleInputDataChangePass(this.state, true);
      }
      this.props._handleInputDataChangePass(this.state);
      this.setState({ focused: false });
    }
  }, {
    key: '_handlefocus',
    value: function _handlefocus(event) {

      event.preventDefault();
      this.setState({ focused: true });
    }
  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave(event) {
      event.preventDefault();
      this.setState({ isHovering: false });
    }
  }, {
    key: '_handleMouseEnter',
    value: function _handleMouseEnter(event) {
      event.preventDefault();
      this.setState({ isHovering: true });
    }
  }, {
    key: '_changeMainIndex',
    value: function _changeMainIndex(indexWish) {

      var numOfItems = this.state.feilds.contentItems.main.length;
      if (indexWish < numOfItems && indexWish >= 0) {
        return this.setState({
          mainShowing: indexWish
        });
      }
      return this.setState({
        mainShowing: 0
      });
    }
  }, {
    key: '_removeIndex',
    value: function _removeIndex(index) {
      var currentStateFeilds = this.state.feilds;
      currentStateFeilds.contentItems.main.slice(index, 1);

      if (this.state.mainShowing === index) {
        this.setState({ mainShowing: index -= 1, feilds: currentStateFeilds });
      } else {
        this.setState({ feilds: currentStateFeilds });
      }
    }
  }, {
    key: '_handleInputDataChange',
    value: function _handleInputDataChange(dataObj) {

      var currentStateFeilds = this.state.feilds;
      dataObj.indexNum === 'NA' ? currentStateFeilds.contentItems[dataObj.name] = dataObj.value : currentStateFeilds.contentItems.main[dataObj.indexNum][dataObj.name] = dataObj.value;
      this.setState({ feilds: currentStateFeilds });
    }
  }, {
    key: '_handlePreviewInputDataChange',
    value: function _handlePreviewInputDataChange(dataObj) {

      var currentStateFeilds = this.state.feilds;
      currentStateFeilds.contentItems.previewContents[dataObj.name] = dataObj.value;
      this.setState({ feilds: currentStateFeilds });
    }
  }, {
    key: 'grabData',
    value: function grabData(dataIn) {

      this._handleInputDataChange(dataIn);
    }
  }, {
    key: '_handleButton',
    value: function _handleButton(e) {
      e.preventDefault();
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: '_addRemoveMainGroup',
    value: function _addRemoveMainGroup(isAdd) {

      var index = this.state.feilds.contentItems.main.length;
      var plainMainContent = {
        subheader: '',
        links: '',
        contents: '',
        linksPresent: '',
        containsCodePen: false,
        containsMedia: '',
        mediaTitle: '',
        problem: '',
        solution: '',
        conclusion: '',
        gistId: false
      };

      var currentStateFeilds = this.state.feilds;

      if (isAdd === true) {
        currentStateFeilds.contentItems.main.push(plainMainContent);
        this.setState({
          feilds: currentStateFeilds,
          mainShowing: this.state.mainShowing += 1
        });
      } else {
        if (index > 0) {
          this._removeIndex(index);
        }
        if (index <= 0) {
          currentStateFeilds.contentItems.main[0] = plainMainContent;
          this.setState({ feilds: currentStateFeilds });
        }
      }
    }
  }, {
    key: '_renderMainInput',
    value: function _renderMainInput() {
      var _this2 = this;

      var Showing = this.state.mainShowing;
      var totalSections = this.state.feilds.contentItems.main.length;

      return this.state.feilds.contentItems.main.map(function (item, index) {
        if (Showing === index) {
          return _react2.default.createElement(
            'div',
            { className: 'creationContainer', key: index },
            _react2.default.createElement(
              'div',
              { className: 'creationTitle' },
              _react2.default.createElement(
                'h2',
                null,
                'Main Contents'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Current Index: ',
                index + 1,
                ' of ',
                totalSections
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'inputControlContainer' },
              _react2.default.createElement(_BtnHandler2.default, {
                clickAction: _this2._addRemoveMainGroup,
                callBackProp: true,
                label: 'Add New Main Content Section' }),
              _react2.default.createElement(_BtnHandler2.default, {

                clickAction: _this2._changeMainIndex,
                callBackProp: index - 1,
                label: 'Look at previous section' }),
              _react2.default.createElement(_BtnHandler2.default, {

                clickAction: _this2._changeMainIndex,
                callBackProp: index + 1,
                label: 'Look at next section' })
            ),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              stateValue: _this2.state.feilds.contentItems.main[index]['subheader'],
              indexNum: index,
              name: 'subheader',
              isTextArea: false,
              smallable: false,
              label: 'Sub-Header' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              indexNum: index,
              stateValue: _this2.state.feilds.contentItems.main[index]['problem'],
              name: 'problem',
              label: 'Problem' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              indexNum: index,
              stateValue: _this2.state.feilds.contentItems.main[index]['solution'],
              name: 'solution',
              label: 'Solution' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              stateValue: _this2.state.feilds.contentItems.main[index]['contents'],
              indexNum: index,
              smallable: false,
              name: 'contents',
              label: 'Contents' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              stateValue: _this2.state.feilds.contentItems.main[index]['linksPresent'],
              name: 'linksPresent',
              indexNum: index,
              smallable: false,
              isTextArea: false,
              label: 'Link in contents, wrap contents with \'##\' on both sides to use. FULL http://www. required' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              indexNum: index,
              smallable: false,
              isTextArea: false,
              stateValue: _this2.state.feilds.contentItems.main[index]['linkSource'],
              name: 'linkSource',
              label: 'LinkSource' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              indexNum: index,
              stateValue: _this2.state.feilds.contentItems.main[index]['conclusion'],
              name: 'conclusion',
              label: 'Conclusion' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              indexNum: index,
              isTextArea: false,
              smallable: false,
              stateValue: _this2.state.feilds.contentItems.main[index]['containsCodePen'],
              name: 'containsCodePen',
              label: 'Contains CodePen; false or iframeUrl then CodePenUrl' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              indexNum: index,
              isTextArea: false,
              smallable: false,
              stateValue: _this2.state.feilds.contentItems.main[index]['gistId'],
              name: 'gistId',
              label: 'If it contains a gist, put the id here otherwise false' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              indexNum: index,
              isTextArea: false,
              smallable: false,
              stateValue: _this2.state.feilds.contentItems.main[index]['containsMedia'],
              name: 'containsMedia',
              label: 'Contains \'images\' or \'video\': use \'images\' or \'video\''
            }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              indexNum: index,
              stateValue: _this2.state.feilds.contentItems.main[index]['links'],
              name: 'links',
              smallable: false,
              isTextArea: false,
              label: 'Links to images Or video, put the url(s)' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: _this2.grabData,
              indexNum: index,
              isTextArea: false,
              smallable: false,
              stateValue: _this2.state.feilds.contentItems.main[index]['mediaTitle'],
              name: 'Title for Video or Images',
              label: 'mediaTitle'
            })
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var feildValues = this.state.feilds.contentItems;
      var SubBTN = (0, _SubmittingHOC2.default)(_SubmitBTN2.default);

      return _react2.default.createElement(
        'div',
        { className: 'creationContainer' },
        _react2.default.createElement(
          'h1',
          null,
          'Creation'
        ),
        _react2.default.createElement(SubBTN, { label: 'Submit', sendData: this.state.feilds }),
        _react2.default.createElement(
          'div',
          { className: 'topCreationContainer' },
          _react2.default.createElement(
            'div',
            { className: 'mainInfoInputContainer' },
            _react2.default.createElement(
              'h3',
              null,
              'Main'
            ),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: this.grabData,
              stateValue: feildValues.title,
              name: 'title',
              smallable: false,
              isTextArea: false,
              label: 'Title' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: this.grabData,
              stateValue: feildValues.footer,
              name: 'footer',
              smallable: false,
              isTextArea: false,
              label: 'Footer' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: this.grabData,
              stateValue: feildValues.techStack,
              name: 'techStack',
              smallable: false,
              isTextArea: false,
              label: 'Tech Stack' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: this.grabData,
              stateValue: feildValues.type,
              name: 'type',
              smallable: false,
              isTextArea: false,
              label: 'Type' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'previewInputContainer' },
            _react2.default.createElement(
              'h3',
              null,
              'Preview'
            ),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: this._handlePreviewInputDataChange,
              stateValue: feildValues.previewContents.previewTitle,
              name: 'previewTitle',
              isPreview: 'true',
              smallable: false,
              isTextArea: false,
              label: 'Preview Title' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: this._handlePreviewInputDataChange,
              stateValue: feildValues.previewContents.previewHeader,
              name: 'previewHeader',
              isPreview: 'true',
              smallable: false,
              isTextArea: false,
              label: 'Preview Header' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: this._handlePreviewInputDataChange,
              stateValue: feildValues.previewContents.previewFooter,
              name: 'previewFooter',
              isPreview: 'true',
              smallable: false,
              isTextArea: false,
              label: 'Preview Footer' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: this._handlePreviewInputDataChange,
              isPreview: 'true',
              stateValue: feildValues.previewContents.previewExtra,
              name: 'previewExtra',
              isTextArea: false,
              smallable: false,
              label: 'Preview Extra' }),
            _react2.default.createElement(_EmptyInput2.default, {
              _handleInputDataChangePass: this._handlePreviewInputDataChange,
              isPreview: 'true',
              smallable: false,
              stateValue: feildValues.previewContents.imageArrayPreview,
              name: 'imageArrayPreview',
              label: 'Image Array Preview' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'contentContainer' },
          this._renderMainInput()
        )
      );
    }
  }]);

  return Creation;
}(_react2.default.Component);

Creation.defaultProps = {
  startingRefNum: 0
};
exports.default = Creation;