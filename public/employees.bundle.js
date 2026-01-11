/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/EmployeeAdd.js"
/*!*******************************!*\
  !*** ./public/EmployeeAdd.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmployeeAdd)\n/* harmony export */ });\nclass EmployeeAdd extends React.Component {\n  constructor() {\n    super();\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleSubmit(e) {\n    e.preventDefault();\n    const form = document.forms.employeeAdd;\n    const employee = {\n      name: form.name.value,\n      extension: form.ext.value,\n      email: form.email.value,\n      title: form.title.value\n    };\n    this.props.createEmployee(employee);\n    form.name.value = '';\n    form.ext.value = '';\n    form.email.value = '';\n    form.title.value = '';\n  }\n\n  render() {\n    return /*#__PURE__*/React.createElement(\"form\", {\n      name: \"employeeAdd\",\n      onSubmit: this.handleSubmit\n    }, \"Name: \", /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"name\"\n    }), /*#__PURE__*/React.createElement(\"br\", null), \"Extension: \", /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"ext\",\n      maxLength: 4\n    }), /*#__PURE__*/React.createElement(\"br\", null), \"Email: \", /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"email\"\n    }), /*#__PURE__*/React.createElement(\"br\", null), \"Title: \", /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"title\"\n    }), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"button\", null, \"Add\"));\n  }\n\n}\n\n//# sourceURL=webpack://module01/./public/EmployeeAdd.js?\n}");

/***/ },

/***/ "./public/employees.js"
/*!*****************************!*\
  !*** ./public/employees.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EmployeeAdd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeAdd.js */ \"./public/EmployeeAdd.js\");\n\n\nclass EmployeeFilter extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", null, \"This is a placeholder for the employee filter.\");\n  }\n\n}\n\nfunction EmployeeTable(props) {\n  const employeeRows = props.employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {\n    key: employee.id,\n    employee: employee,\n    deleteEmployee: props.deleteEmployee\n  }));\n  return /*#__PURE__*/React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"ID\"), /*#__PURE__*/React.createElement(\"th\", null, \"Name\"), /*#__PURE__*/React.createElement(\"th\", null, \"Extension\"), /*#__PURE__*/React.createElement(\"th\", null, \"Email\"), /*#__PURE__*/React.createElement(\"th\", null, \"Title\"), /*#__PURE__*/React.createElement(\"th\", null, \"Date Hired\"), /*#__PURE__*/React.createElement(\"th\", null, \"Currently Employed?\"), /*#__PURE__*/React.createElement(\"th\", null))), /*#__PURE__*/React.createElement(\"tbody\", null, employeeRows));\n}\n\nfunction EmployeeRow(props) {\n  const employee = props.employee;\n\n  function onDeleteClick() {\n    props.deleteEmployee(props.employee_id);\n  }\n\n  return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, props.employee.id), /*#__PURE__*/React.createElement(\"td\", null, props.employee.name), /*#__PURE__*/React.createElement(\"td\", null, props.employee.ext), /*#__PURE__*/React.createElement(\"td\", null, props.employee.email), /*#__PURE__*/React.createElement(\"td\", null, props.employee.title), /*#__PURE__*/React.createElement(\"td\", null, props.employee.dateHired.toDateString()), /*#__PURE__*/React.createElement(\"td\", null, props.employee.isEmployed ? 'Yes' : 'No'), /*#__PURE__*/React.createElement(\"td\", null, /*#__PURE__*/React.createElement(\"button\", {\n    onClick: onDeleteClick\n  }, \"DELETE\")));\n}\n\nclass EmployeeList extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      employees: []\n    };\n    this.createEmployee = this.createEmployee.bind(this);\n    this.deleteEmployee = this.deleteEmployee.bind(this);\n  }\n\n  componentDidMount() {\n    this.loadData();\n  }\n\n  loadData() {\n    fetch('/api/employees').then(response => response.json()).then(data => {\n      console.log('Total count of employees:', data.count);\n      data.employees.forEach(employee => {\n        employee.dateHired = new Date(employee.dateHired);\n      });\n      this.setState({\n        employees: data.employees\n      });\n    }).catch(err => {\n      copnsole.log(err);\n    });\n  }\n\n  createEmployee(employee) {\n    fetch('/api/employees', {\n      method: 'POST',\n      headers: {\n        'ContentType': 'application/json'\n      },\n      body: JSON.stringify(employee)\n    }).then(response => response.json()).then(newEmployee => {\n      newEmployee.employee.dateHired = new Date(newEmployee.employee.dateHired);\n      const newEmployees = this.state.employees.concate(newEmployees.employee);\n      this.setState({\n        employees: newEmployees\n      });\n      console.log('Total count of employees:', newEmployees.length);\n    }).catch(err => {\n      console.log(err);\n    });\n  }\n\n  deleteEmployee() {\n    fetch(`/api/employees/${id}`, {\n      method: 'DELETE'\n    }).then(response => {\n      if (!response.ok) {\n        console.log('Failed to delete employee.');\n      } else {\n        this.loadData();\n      }\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"Employee Management Application\"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(EmployeeTable, {\n      employees: this.state.employees\n    }), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(_EmployeeAdd_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      createEmployee: this.createEmployee\n    }));\n  }\n\n}\n\nReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)), document.getElementById('content'));\n\n//# sourceURL=webpack://module01/./public/employees.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/employees.js");
/******/ 	
/******/ })()
;