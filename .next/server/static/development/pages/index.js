module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  appPort: 9000,
  dbName: 'sampledatabase',
  dbUserName: 'test',
  dbPassword: 'test123',
  dbPort: 35957
});

/***/ }),

/***/ "./node_modules/ag-grid-community/dist/styles/ag-grid.css":
/*!****************************************************************!*\
  !*** ./node_modules/ag-grid-community/dist/styles/ag-grid.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/ag-grid-community/dist/styles/ag-theme-balham.css":
/*!************************************************************************!*\
  !*** ./node_modules/ag-grid-community/dist/styles/ag-theme-balham.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/scss/styles.scss */ "./public/scss/styles.scss");
/* harmony import */ var _public_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_appMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/appMain.js */ "./public/appMain.js");



/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  className: "main-container"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_public_appMain_js__WEBPACK_IMPORTED_MODULE_2__["AppMain"], null)));

/***/ }),

/***/ "./public/appMain.js":
/*!***************************!*\
  !*** ./public/appMain.js ***!
  \***************************/
/*! exports provided: AppMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMain", function() { return AppMain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_store_appStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/store/appStore */ "./public/js/store/appStore.js");
/* harmony import */ var _components_transactions_transactionDasboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/transactions/transactionDasboard */ "./public/components/transactions/transactionDasboard.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/styles.scss */ "./public/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_4__);





const AppMain = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
  store: _js_store_appStore__WEBPACK_IMPORTED_MODULE_2__["store"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  className: "main-container"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  className: "content-section"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_transactions_transactionDasboard__WEBPACK_IMPORTED_MODULE_3__["TransactionDashboard"], null))));

/***/ }),

/***/ "./public/components/common/customControls.js":
/*!****************************************************!*\
  !*** ./public/components/common/customControls.js ***!
  \****************************************************/
/*! exports provided: FieldError, FieldWarning, Input, RadioButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldError", function() { return FieldError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldWarning", function() { return FieldWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonGroup", function() { return RadioButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_services_validations_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/services/validations/validators */ "./public/js/services/validations/validators.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const FieldError = ({
  msg
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "form-error"
}, msg);
const FieldWarning = ({
  msg
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "form-warning"
}, " ", msg);

const FormValidationMessge = ({
  error,
  warning
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldError, {
  msg: error
}), warning && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldError, {
  msg: warning
}));

const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
    warning
  }
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    type: type
  })), touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormValidationMessge, {
    error: error,
    warning: warning
  })));
};

const RadioBtnGrp = ({
  input,
  options,
  meta: {
    touched,
    error,
    warning
  },
  keyName,
  customClass
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, options.map((option, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: customClass
    }, option[keyName], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: input.name,
      onChange: event => {
        return input.onChange(event.target.checked ? option : null);
      },
      id: index,
      key: index,
      type: "radio"
    })));
  }), touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormValidationMessge, {
    error: error,
    warning: warning
  }));
};

const Input = ({
  name,
  validate,
  warning,
  type,
  id
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  name: name,
  type: type,
  component: renderField,
  validate: Object(_js_services_validations_validators__WEBPACK_IMPORTED_MODULE_2__["checkValidations"])(name, validate),
  id: id
});
const RadioButtonGroup = ({
  name,
  validate,
  warning = [],
  options,
  keyName,
  customClass = ''
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  component: RadioBtnGrp,
  name: name,
  validate: Object(_js_services_validations_validators__WEBPACK_IMPORTED_MODULE_2__["checkValidations"])(name, validate),
  warning: warning,
  options: options,
  keyName: keyName,
  customClass: customClass
});

/***/ }),

/***/ "./public/components/common/form/formComponent.js":
/*!********************************************************!*\
  !*** ./public/components/common/form/formComponent.js ***!
  \********************************************************/
/*! exports provided: FormComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



const FormComponent = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
  onSubmit: props.handleSubmit,
  autoComplete: "off"
}, props.children);

const stateToProps = (state, props) => ({
  form: props.name,
  initialValues: props.initialValues
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps, null)(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])(FormComponent.props)(FormComponent)));

/***/ }),

/***/ "./public/components/common/graphs/dataGraph.js":
/*!******************************************************!*\
  !*** ./public/components/common/graphs/dataGraph.js ***!
  \******************************************************/
/*! exports provided: RenderLineChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderLineChart", function() { return RenderLineChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);


const RenderLineChart = ({
  data = [],
  curves = '',
  width = 0,
  height = 0,
  top = 0,
  left = 0,
  right = 0,
  bottom = 0
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
  width: width,
  height: height,
  data: data,
  margin: {
    top: top,
    right: left,
    bottom: right,
    left: bottom
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
  strokeDasharray: "3 3"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
  dataKey: "transactionId"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
  name: "Amount"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
  dataKey: "transactionType"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
  type: "monotone",
  dataKey: "Visa",
  stroke: "red"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
  type: "monotone",
  dataKey: "American Express",
  stroke: "green",
  name: ""
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
  type: "monotone",
  dataKey: "DBS PayLa",
  stroke: "yellow",
  name: ""
}));

/***/ }),

/***/ "./public/components/common/grid/dataGrid.js":
/*!***************************************************!*\
  !*** ./public/components/common/grid/dataGrid.js ***!
  \***************************************************/
/*! exports provided: DataGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGrid", function() { return DataGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-react */ "ag-grid-react");
/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-community/dist/styles/ag-grid.css */ "./node_modules/ag-grid-community/dist/styles/ag-grid.css");
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ag_grid_community_dist_styles_ag_theme_balham_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-community/dist/styles/ag-theme-balham.css */ "./node_modules/ag-grid-community/dist/styles/ag-theme-balham.css");
/* harmony import */ var ag_grid_community_dist_styles_ag_theme_balham_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_dist_styles_ag_theme_balham_css__WEBPACK_IMPORTED_MODULE_3__);




const DataGrid = ({
  columns = [],
  data = [],
  pagination = false,
  sortable = false,
  filterable = false,
  paginationPageSize = 0
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ag-theme-balham data-grid"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ag_grid_react__WEBPACK_IMPORTED_MODULE_1__["AgGridReact"], {
    rowData: data,
    columnDefs: columns,
    pagination: pagination,
    filterable: filterable,
    enableRangeSelection: pagination,
    paginationPageSize: paginationPageSize,
    sizeColumnsToFit: true
  }));
};

/***/ }),

/***/ "./public/components/transactions/addTransaction.js":
/*!**********************************************************!*\
  !*** ./public/components/transactions/addTransaction.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_form_formComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/form/formComponent */ "./public/components/common/form/formComponent.js");
/* harmony import */ var _common_customControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/customControls */ "./public/components/common/customControls.js");
/* harmony import */ var _js_actions_transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/actions/transaction */ "./public/js/actions/transaction.js");
var _dec, _class2;







const stateToProps = ({
  transaction
}) => ({
  users: transaction.users,
  transactionTypes: transaction.transactionTypes
});

let _class = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(stateToProps, {
  addTransaction: _js_actions_transaction__WEBPACK_IMPORTED_MODULE_4__["addTransaction"],
  getUsers: _js_actions_transaction__WEBPACK_IMPORTED_MODULE_4__["getUsers"],
  getTransactionTypes: _js_actions_transaction__WEBPACK_IMPORTED_MODULE_4__["getTransactionTypes"]
}), _dec(_class2 = class _class2 extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    this.componentDidMount = async () => {
      const {
        getUsers,
        getTransactionTypes
      } = this.props;
      await getUsers();
      await getTransactionTypes();
    };

    this.addNewTransaction = (...params) => {
      const [user, action, {
        reset
      }] = params;
      const {
        transactionAmount,
        user: {
          userId,
          userName
        },
        transactionType
      } = user;
      const transactionObj = {
        transactionAmount: transactionAmount,
        userId: userId,
        userName: userName,
        transactionType: transactionType
      };
      this.props.addTransaction(transactionObj);
      reset();
    };
  }

  render() {
    const {
      users,
      transactionTypes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, transactionTypes.length > 0 && users.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "add-transaction-sec"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_form_formComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "addTransaction",
      initialValues: {
        user: null,
        transactionAmount: null,
        transactionType: null
      },
      onSubmit: this.addNewTransaction
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "add-transaction-form-sec"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_customControls__WEBPACK_IMPORTED_MODULE_3__["RadioButtonGroup"], {
      options: users,
      name: "user",
      validate: true,
      keyName: "userName",
      customClass: "custom-radio-btn-no-label"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_customControls__WEBPACK_IMPORTED_MODULE_3__["RadioButtonGroup"], {
      options: transactionTypes,
      name: "transactionType",
      validate: true,
      keyName: "transactiontype",
      customClass: "custom-radio-btn-label"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "form-row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_customControls__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      name: "transactionAmount",
      id: "transactionAmount",
      validate: true
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "form-row"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "app-primary-btn right"
    }, "Transfer"))))));
  }

}) || _class2);



/***/ }),

/***/ "./public/components/transactions/transactionDasboard.js":
/*!***************************************************************!*\
  !*** ./public/components/transactions/transactionDasboard.js ***!
  \***************************************************************/
/*! exports provided: TransactionDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDashboard", function() { return TransactionDashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTransaction */ "./public/components/transactions/addTransaction.js");
/* harmony import */ var _transactionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactionList */ "./public/components/transactions/transactionList.js");



const TransactionDashboard = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  className: "user-transaction-details-sec"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_addTransaction__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_transactionList__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ }),

/***/ "./public/components/transactions/transactionList.js":
/*!***********************************************************!*\
  !*** ./public/components/transactions/transactionList.js ***!
  \***********************************************************/
/*! exports provided: TransactionListDashboard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionListDashboard", function() { return TransactionListDashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_grid_dataGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/grid/dataGrid */ "./public/components/common/grid/dataGrid.js");
/* harmony import */ var _js_actions_transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/actions/transaction */ "./public/js/actions/transaction.js");
/* harmony import */ var _common_graphs_dataGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/graphs/dataGraph */ "./public/components/common/graphs/dataGraph.js");
/* harmony import */ var _js_utils_array_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/utils/array-utils */ "./public/js/utils/array-utils.js");






const columns = [{
  field: 'transactionId',
  headerName: 'Transaction ID',
  filter: true
}, {
  field: 'transactionDoneBy',
  headerName: 'User Name',
  filter: true
}, {
  field: 'transactiontype',
  headerName: 'Payment Mode',
  filter: true
}, {
  field: 'transactionAmount',
  headerName: 'Amount',
  filter: true
}];
const graphCurves = ['DBS PayLa', 'American Express', 'Visa'];

const generateGraphData = (list = []) => {
  const graphData = [];
  graphCurves.forEach(paymentMode => {
    const paymentList = Object(_js_utils_array_utils__WEBPACK_IMPORTED_MODULE_5__["findByProps"])(list, {
      transactiontype: paymentMode
    });
    paymentList.forEach(({
      transactiontype,
      transactionAmount,
      transactionId
    }, index) => {
      graphData.push({
        [paymentMode.trim()]: transactionAmount,
        'transactionId': graphData.length,
        'transactionAmount': transactionAmount
      });
    });
  });
  return graphData;
};

const TransactionListDashboard = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  transactions,
  getTransactions
}) => {
  if (!transactions.length) {
    getTransactions();
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "transaction-grid-sec"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_grid_dataGrid__WEBPACK_IMPORTED_MODULE_2__["DataGrid"], {
    columns: columns,
    data: transactions,
    pagination: true,
    paginationPageSize: 10
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "transaction-graph-sec"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_graphs_dataGraph__WEBPACK_IMPORTED_MODULE_4__["RenderLineChart"], {
    data: generateGraphData(transactions),
    curves: "Visa,DBS PayLa,American Express",
    width: 800,
    height: 400,
    margin: {
      "margin-left": '-34px'
    }
  })));
});

const stateToProps = ({
  transaction
}) => ({
  transactions: transaction.transactions
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(stateToProps, {
  getTransactions: _js_actions_transaction__WEBPACK_IMPORTED_MODULE_3__["getTransactions"]
})(TransactionListDashboard));

/***/ }),

/***/ "./public/js/actions/transaction.js":
/*!******************************************!*\
  !*** ./public/js/actions/transaction.js ***!
  \******************************************/
/*! exports provided: ADD_TRANSACTION, GET_USERS, TRANSACTION_TYPE, GET_TRANSACTIONS, addTransaction, getUsers, getTransactionTypes, getTransactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TRANSACTION", function() { return ADD_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERS", function() { return GET_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_TYPE", function() { return TRANSACTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRANSACTIONS", function() { return GET_TRANSACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTransaction", function() { return addTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionTypes", function() { return getTransactionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactions", function() { return getTransactions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../url */ "./public/js/url.js");


const ADD_TRANSACTION = Object(_constants__WEBPACK_IMPORTED_MODULE_0__["createConstants"])('ADD_TRANSACTION');
const GET_USERS = Object(_constants__WEBPACK_IMPORTED_MODULE_0__["createConstants"])('GET_USERS');
const TRANSACTION_TYPE = Object(_constants__WEBPACK_IMPORTED_MODULE_0__["createConstants"])('TRANSACTION', 'TYPE');
const GET_TRANSACTIONS = Object(_constants__WEBPACK_IMPORTED_MODULE_0__["createConstants"])('GET_TRANSACTIONS');

const addTransactionSuccess = ({
  transactions
}) => ({
  type: ADD_TRANSACTION.SUCCESS,
  payLoad: {
    transactions: transactions
  }
});

const getUsersSuccess = ({
  userList
}) => ({
  type: GET_USERS.SUCCESS,
  payLoad: {
    users: userList
  }
});

const transactionTypeSuccess = ({
  transactionTypeList
}) => ({
  type: TRANSACTION_TYPE.SUCCESS,
  payLoad: {
    transactionTypes: transactionTypeList
  }
});

const addTransaction = (params = null) => ({
  type: ADD_TRANSACTION.REQUEST,
  payLoad: {
    url: _url__WEBPACK_IMPORTED_MODULE_1__["transactionUrl"],
    requestType: _constants__WEBPACK_IMPORTED_MODULE_0__["POST_REQUEST"],
    params: params,
    success: addTransactionSuccess
  }
});
const getUsers = (params = null) => ({
  type: GET_USERS.REQUEST,
  payLoad: {
    url: _url__WEBPACK_IMPORTED_MODULE_1__["usersUrl"],
    requestType: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_REQUEST"],
    params: params,
    success: getUsersSuccess
  }
});
const getTransactionTypes = (params = null) => ({
  type: TRANSACTION_TYPE.REQUEST,
  payLoad: {
    url: _url__WEBPACK_IMPORTED_MODULE_1__["transactionTypeUrl"],
    requestType: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_REQUEST"],
    params: params,
    success: transactionTypeSuccess
  }
});
const getTransactions = (params = null) => ({
  type: GET_TRANSACTIONS.REQUEST,
  payLoad: {
    requestType: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_REQUEST"],
    params: params,
    url: _url__WEBPACK_IMPORTED_MODULE_1__["transactionUrl"],
    success: addTransactionSuccess
  }
});

/***/ }),

/***/ "./public/js/constants.js":
/*!********************************!*\
  !*** ./public/js/constants.js ***!
  \********************************/
/*! exports provided: createConstants, SERVICE_ERROR, GET_REQUEST, PUT_REQUEST, DELETE_REQUEST, POST_REQUEST, SHOW_DIALOG, CLOSE_DIALOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConstants", function() { return createConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_ERROR", function() { return SERVICE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REQUEST", function() { return GET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT_REQUEST", function() { return PUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REQUEST", function() { return DELETE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_REQUEST", function() { return POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_DIALOG", function() { return SHOW_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_DIALOG", function() { return CLOSE_DIALOG; });
const createConstants = (actionName = null, prefix = null) => ({
  'REQUEST': prefix ? `${actionName}_${prefix}_REQUEST` : `${actionName}_REQUEST`,
  'SUCCESS': prefix ? `${actionName}_${prefix}_SUCCESS` : `${actionName}_SUCCESS`,
  'FAIL': prefix ? `${actionName}_${prefix}_FAIL` : `${actionName}_FAIL`,
  'RESET': prefix ? `${actionName}_${prefix}_RESET` : `${actionName}_RESET`
});
const SERVICE_ERROR = 'SERVICE_ERROR';
const GET_REQUEST = 'GET_REQUEST';
const PUT_REQUEST = 'PUT_REQUEST';
const DELETE_REQUEST = 'DELETE_REQUEST';
const POST_REQUEST = 'POST_REQUEST';
const SHOW_DIALOG = 'SHOW_DIALOG';
const CLOSE_DIALOG = 'CLOSE_DIALOG';

/***/ }),

/***/ "./public/js/middleware/ajaxHandler.js":
/*!*********************************************!*\
  !*** ./public/js/middleware/ajaxHandler.js ***!
  \*********************************************/
/*! exports provided: ajaxHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxHandler", function() { return ajaxHandler; });
/* harmony import */ var _services_common_ajax_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common/ajax-service */ "./public/js/services/common/ajax-service.js");
/* harmony import */ var _services_common_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common/error-service */ "./public/js/services/common/error-service.js");


const ajaxHandler = store => next => async action => {
  if (action && action.payLoad && action.payLoad.url) {
    console.log('url', action.payLoad.url);

    try {
      const {
        payLoad: {
          requestType,
          url,
          params = null,
          success
        },
        type
      } = action;
      const response = await Object(_services_common_ajax_service__WEBPACK_IMPORTED_MODULE_0__["makeServiceRequest"])(requestType, url, null, params);
      console.log('response recieved', response);

      if (response && response.data) {
        next(success(response.data));
      }
    } catch (e) {
      next(Object(_services_common_error_service__WEBPACK_IMPORTED_MODULE_1__["errorService"])(500, 'service error'));
    }
  } else {
    next(action);
  }
};

/***/ }),

/***/ "./public/js/reducers/appReducer.js":
/*!******************************************!*\
  !*** ./public/js/reducers/appReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./public/js/reducers/index.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./public/js/reducers/index.js":
/*!*************************************!*\
  !*** ./public/js/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions */ "./public/js/reducers/transactions.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  transaction: _transactions__WEBPACK_IMPORTED_MODULE_1__["default"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_0__["reducer"]
});

/***/ }),

/***/ "./public/js/reducers/transactions.js":
/*!********************************************!*\
  !*** ./public/js/reducers/transactions.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./public/js/constants.js");
/* harmony import */ var _actions_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/transaction */ "./public/js/actions/transaction.js");


const initialState = {
  transactions: [],
  users: [],
  transactionTypes: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, {
  type,
  payLoad
}) => {
  switch (type) {
    case _actions_transaction__WEBPACK_IMPORTED_MODULE_1__["GET_USERS"].SUCCESS:
      return { ...state,
        ...payLoad
      };

    case _actions_transaction__WEBPACK_IMPORTED_MODULE_1__["TRANSACTION_TYPE"].SUCCESS:
      return { ...state,
        ...payLoad
      };

    case _actions_transaction__WEBPACK_IMPORTED_MODULE_1__["ADD_TRANSACTION"].SUCCESS:
      return { ...state,
        ...payLoad
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./public/js/services/common/ajax-service.js":
/*!***************************************************!*\
  !*** ./public/js/services/common/ajax-service.js ***!
  \***************************************************/
/*! exports provided: makeServiceRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeServiceRequest", function() { return makeServiceRequest; });
/* harmony import */ var _base_sevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-sevice */ "./public/js/services/common/base-sevice.js");

const makeServiceRequest = async (requestType, url, ...opts) => await Object(_base_sevice__WEBPACK_IMPORTED_MODULE_0__["handleServiceCall"])(requestType, url, ...opts);

/***/ }),

/***/ "./public/js/services/common/base-sevice.js":
/*!**************************************************!*\
  !*** ./public/js/services/common/base-sevice.js ***!
  \**************************************************/
/*! exports provided: handleServiceCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleServiceCall", function() { return handleServiceCall; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./public/js/constants.js");
/* harmony import */ var _utils_format_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/format-url */ "./public/js/utils/format-url.js");




const doGetRequest = async (url, queryParams = null) => {
  let [result, error, queryString] = [null, null, ''];

  if (queryParams) {
    queryString = Object(_utils_format_url__WEBPACK_IMPORTED_MODULE_2__["formatQueryParams"])(queryParams);
  }

  try {
    url = Object(_utils_format_url__WEBPACK_IMPORTED_MODULE_2__["formatUrl"])(url, queryString);
    result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const doPostRequest = async (url, formData = null) => {
  try {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, formData);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const doPutRequest = async (url, formData = null) => {
  try {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, formData);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const handleServiceCall = async (...params) => {
  try {
    const [type, url, success, formParams] = params;

    switch (type) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__["GET_REQUEST"]:
        return await doGetRequest(url, formParams);

      case _constants__WEBPACK_IMPORTED_MODULE_1__["PUT_REQUEST"]:
        return await doPutRequest(url, formParams);

      case _constants__WEBPACK_IMPORTED_MODULE_1__["POST_REQUEST"]:
        return await doPostRequest(url, formParams);

      default:
        return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

/***/ }),

/***/ "./public/js/services/common/error-service.js":
/*!****************************************************!*\
  !*** ./public/js/services/common/error-service.js ***!
  \****************************************************/
/*! exports provided: errorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorService", function() { return errorService; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./public/js/constants.js");

const errorService = (errorCode, errorMessage) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SERVICE_ERROR"],
  payLoad: {
    code: errorCode,
    errorMsg: errorMessage
  }
});

/***/ }),

/***/ "./public/js/services/validations/validationConfig.js":
/*!************************************************************!*\
  !*** ./public/js/services/validations/validationConfig.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "transactionAmount": {
    "required": true,
    "maxRange": 500,
    "numeric": true
  },
  "user": {
    "required": true
  },
  "transactionType": {
    "required": true
  }
});

/***/ }),

/***/ "./public/js/services/validations/validationMessage.js":
/*!*************************************************************!*\
  !*** ./public/js/services/validations/validationMessage.js ***!
  \*************************************************************/
/*! exports provided: getMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessage", function() { return getMessage; });
const messages = {
  "transactionAmount": {
    "required": 'Amount is Required',
    "maxRange": 'Transaction amount cannot exceed more than 500',
    "numeric": 'Transaction amount should be a integer and either zero or non-negetive integer'
  },
  "user": {
    "required": 'Select a User to initiate transfer'
  },
  "transactionType": {
    "required": "Select payment mode"
  }
};
const getMessage = (fieldName, validator) => {
  const messageObj = messages[fieldName];
  return messageObj[validator] ? messageObj[validator] : '';
};

/***/ }),

/***/ "./public/js/services/validations/validators.js":
/*!******************************************************!*\
  !*** ./public/js/services/validations/validators.js ***!
  \******************************************************/
/*! exports provided: required, checkValidations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkValidations", function() { return checkValidations; });
/* harmony import */ var _validationConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationConfig */ "./public/js/services/validations/validationConfig.js");
/* harmony import */ var _validationMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validationMessage */ "./public/js/services/validations/validationMessage.js");


const number = new RegExp('^[0-9]+$');
const required = (...params) => {
  const [value, field, formObj, fieldName] = params;
  return value ? value.constructor === String && value.trim().length <= 0 ? Object(_validationMessage__WEBPACK_IMPORTED_MODULE_1__["getMessage"])(fieldName, 'required') : typeof value === Object && value === null ? Object(_validationMessage__WEBPACK_IMPORTED_MODULE_1__["getMessage"])(fieldName, 'required') : '' : Object(_validationMessage__WEBPACK_IMPORTED_MODULE_1__["getMessage"])(fieldName, 'required');
};

const maxRange = function (...params) {
  const [value, field, formObj, fieldName] = params;
  return value && parseInt(value, 10) > this.range ? Object(_validationMessage__WEBPACK_IMPORTED_MODULE_1__["getMessage"])(fieldName, 'maxRange') : '';
};

const numeric = (...params) => {
  const [value, field, formObj, fieldName] = params;
  return value ? !number.test(value) ? Object(_validationMessage__WEBPACK_IMPORTED_MODULE_1__["getMessage"])(fieldName, 'numeric') : '' : '';
};

const buildValidator = (fieldName = null) => {
  const validatorList = [];
  const validators = _validationConfig__WEBPACK_IMPORTED_MODULE_0__["default"][fieldName];
  const validations = Object.keys(validators);
  validations.forEach(validatorName => {
    if (validators[validatorName]) {
      switch (validatorName) {
        case 'required':
          validatorList.push(required);
          break;

        case 'maxRange':
          validatorList.push(maxRange.bind({
            range: validators[validatorName]
          }));
          break;

        case 'numeric':
          validatorList.push(numeric);
          break;
      }
    }
  });
  return validatorList;
};

const checkValidations = (name = '', validate = false) => {
  if (validate) {
    if (name && name.length) {
      const validations = buildValidator(name);
      return validations;
    }
  }
};

/***/ }),

/***/ "./public/js/store/appStore.js":
/*!*************************************!*\
  !*** ./public/js/store/appStore.js ***!
  \*************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_appReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/appReducer */ "./public/js/reducers/appReducer.js");
/* harmony import */ var _middleware_ajaxHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/ajaxHandler */ "./public/js/middleware/ajaxHandler.js");



const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_appReducer__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(_middleware_ajaxHandler__WEBPACK_IMPORTED_MODULE_2__["ajaxHandler"]));

/***/ }),

/***/ "./public/js/url.js":
/*!**************************!*\
  !*** ./public/js/url.js ***!
  \**************************/
/*! exports provided: transactionUrl, usersUrl, transactionTypeUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionUrl", function() { return transactionUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersUrl", function() { return usersUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionTypeUrl", function() { return transactionTypeUrl; });
/* harmony import */ var _utils_format_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format-url */ "./public/js/utils/format-url.js");

const appUrl = Object(_utils_format_url__WEBPACK_IMPORTED_MODULE_0__["buildServiceUrl"])();
const transactionUrl = `${appUrl}/transactions`;
const usersUrl = `${appUrl}/users`;
const transactionTypeUrl = `${appUrl}/transactionTypes`;

/***/ }),

/***/ "./public/js/utils/array-utils.js":
/*!****************************************!*\
  !*** ./public/js/utils/array-utils.js ***!
  \****************************************/
/*! exports provided: findByProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findByProps", function() { return findByProps; });
const findByProps = (set = [], properties) => {
  return set.filter(function (entry) {
    return Object.keys(properties).every(function (key) {
      return entry[key] === properties[key];
    });
  });
};

/***/ }),

/***/ "./public/js/utils/format-url.js":
/*!***************************************!*\
  !*** ./public/js/utils/format-url.js ***!
  \***************************************/
/*! exports provided: formatQueryParams, buildServiceUrl, formatUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatQueryParams", function() { return formatQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildServiceUrl", function() { return buildServiceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatUrl", function() { return formatUrl; });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/config */ "./config/config.js");

const {
  appPort
} = _config_config__WEBPACK_IMPORTED_MODULE_0__["default"];
const formatQueryParams = (params = null) => {
  let keyString = '';

  if (params) {
    for (let keys of Object.keys(params)) {
      keyString += `${keys}=${params[keys]}`;
      keyString += Object.keys(params)[Object.keys(params).length - 1] === keys ? '' : '&';
    }

    ;
  }

  return keyString;
};
const buildServiceUrl = () => {
  if (false) {} else {
    return '';
  }
};
const formatUrl = (url, queryString = null) => queryString ? `${url}?${queryString}` : `${url}`;

/***/ }),

/***/ "./public/scss/styles.scss":
/*!*********************************!*\
  !*** ./public/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\samplecodes\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "ag-grid-react":
/*!********************************!*\
  !*** external "ag-grid-react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ag-grid-react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map