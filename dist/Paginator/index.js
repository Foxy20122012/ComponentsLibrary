import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import * as React from 'react';
import React__default, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';

var _excluded$1 = ["title", "titleId"];
function ChevronLeftIcon(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$1);
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",
    clipRule: "evenodd"
  }));
}
var ForwardRef$1 = /*#__PURE__*/React.forwardRef(ChevronLeftIcon);
var ChevronLeftIcon$1 = ForwardRef$1;

var _excluded = ["title", "titleId"];
function ChevronRightIcon(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(ChevronRightIcon);
var ChevronRightIcon$1 = ForwardRef;

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * @brief Paginador para tabla o data iterator
 * @param {*} initialIndex fila en la que inicia la visualizacion
 * @param finalIndex fila en la que termina la visualizacion
 * @param totalItems cantidad total de filas
 * @param selectedRowsPerPage filas a visualizar por pagina
 * @param selectePage pagina actual en la visualizacion
 * @param onChangeRowsPerPage evento que se dispara al cambiar la cantidad de filas por pagina
 * @param onChangePage evento que se dispara al cambiar de pagina
 */
Paginator.propTypes = {
  initialIndex: PropTypes.number,
  finalIndex: PropTypes.number,
  totalItems: PropTypes.number,
  selectedRowsPerPage: PropTypes.number,
  selectedPage: PropTypes.number,
  onChangeRowsPerPage: PropTypes.func,
  onChangePage: PropTypes.func,
  i18n: PropTypes.object
};
var fsHeader = ' xs:text-md sm:text-md md:text-md lg:text-base xl:text-base '; // ' via-label !text-white '

// From https://reactjs.org/docs/hooks-state.html
function Paginator(_ref) {
  var fontClassHeader = _ref.fontClassHeader;
    _ref.fontClassCelda;
    var initialIndex = _ref.initialIndex,
    finalIndex = _ref.finalIndex,
    totalItems = _ref.totalItems,
    _ref$selectedRowsPerP = _ref.selectedRowsPerPage,
    selectedRowsPerPage = _ref$selectedRowsPerP === void 0 ? 10 : _ref$selectedRowsPerP,
    selectedPage = _ref.selectedPage,
    onChangeRowsPerPage = _ref.onChangeRowsPerPage,
    onChangePage = _ref.onChangePage,
    _ref$i18n = _ref.i18n,
    i18n = _ref$i18n === void 0 ? {
      t: function t() {
        return 'txtNone';
      }
    } : _ref$i18n,
    textRowsPerPage = _ref.textRowsPerPage,
    _ref$onEndBuildListaR = _ref.onEndBuildListaRPP,
    onEndBuildListaRPP = _ref$onEndBuildListaR === void 0 ? function () {} : _ref$onEndBuildListaR;
  // const i18n = useI18n()
  /**
   * @brief genera un arreglo con la cantidad de paginas segun la cantidad de filas y la cantidad de filas por pagina
   * @param totalItems cantidad de filas
   * @param selectedRowsPerPage cantidad de filas por pagina
   */
  var initializePages = function initializePages(totalItems, selectedRowsPerPage) {
    var pagesCount = [];
    if (totalItems > 0) {
      for (var idx = 0; idx < totalItems / selectedRowsPerPage; idx++) {
        pagesCount.push(idx + 1);
      }
    }
    return pagesCount;
  };
  var _useState = useState(initializePages(totalItems, selectedRowsPerPage)),
    _useState2 = _slicedToArray(_useState, 2),
    pages = _useState2[0],
    setPages = _useState2[1];
  var _useState3 = useState(selectedRowsPerPage),
    _useState4 = _slicedToArray(_useState3, 2),
    _selectedRowsPerPage = _useState4[0],
    setSelectedRowsPerPage = _useState4[1];
  var _useState5 = useState(selectedPage),
    _useState6 = _slicedToArray(_useState5, 2),
    _selectedPage = _useState6[0],
    setSelectedPage = _useState6[1];
  var initialObjOpciones = {
    5: true,
    10: true,
    25: true,
    50: true,
    75: true,
    100: true,
    200: true,
    500: true,
    1000: true
  };
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    rowsPerPage = _useState8[0],
    setRowsPerPage = _useState8[1];
  var _useState9 = useState({}),
    _useState10 = _slicedToArray(_useState9, 2),
    objOpciones = _useState10[0],
    setObjOpciones = _useState10[1];

  /**
   * @brief Cambia de pagina seleccionada en una posicion
   * @param direction '<' indica una posicion hacia atrás y '>' indica una posicion hacia adelante
   */
  var changePage = function changePage(direction) {
    if (direction === '<') {
      if (_selectedPage > 1) {
        var page = _selectedPage - 1;
        setSelectedPage(page);
        onChangePage(page);
      }
    } else {
      var totalPag = totalItems / _selectedRowsPerPage;
      // console.log('totalPag', totalPag)
      var totalPagInt = parseInt(totalPag);
      if (totalPag !== totalPagInt) {
        totalPag = totalPagInt + 1;
      }
      if (_selectedPage < totalPag) {
        var _page = _selectedPage + 1;
        setSelectedPage(_page);
        onChangePage(_page);
      }
    }
  };
  useEffect(function () {
    if (selectedRowsPerPage != null) {
      if (initialObjOpciones[selectedRowsPerPage]) {
        setObjOpciones(_objectSpread({}, initialObjOpciones));
        setRowsPerPage(Object.keys(initialObjOpciones));
      } else {
        var crearLista = true;
        if (selectedRowsPerPage > 7 && objOpciones[selectedRowsPerPage]) {
          crearLista = false;
        }
        if (crearLista) {
          var valMitad = parseInt(selectedRowsPerPage / 2);
          var newObj = {};
          if (selectedRowsPerPage < 10 && valMitad > 1) {
            newObj[valMitad] = true;
          }
          var max = 20;
          var idx = 1;
          while (idx <= max) {
            if (idx % 2 !== 0 && selectedRowsPerPage > 10 && idx < 6) {
              var _valMitad = valMitad * idx;
              if (_valMitad < 100) {
                newObj[_valMitad] = true;
              }
            }
            var _val = selectedRowsPerPage * idx;
            if (_val < 100) {
              newObj[_val] = true;
            }
            idx++;
            if (selectedRowsPerPage < 5 && idx > 4) {
              idx++;
            }
          }
          newObj[100] = true;
          newObj[200] = true;
          newObj[500] = true;
          newObj[1000] = true;
          setObjOpciones(_objectSpread({}, newObj));
          setRowsPerPage(Object.keys(newObj));
        }
        onEndBuildListaRPP();
      }
    }
    if (selectedRowsPerPage != null && selectedRowsPerPage && selectedRowsPerPage !== _selectedRowsPerPage) {
      setSelectedRowsPerPage(selectedRowsPerPage);
    }
    if (selectedRowsPerPage == null || !selectedRowsPerPage) {
      setSelectedRowsPerPage(10);
      setRowsPerPage(Object.keys(initialObjOpciones));
    }
  }, [selectedRowsPerPage]);
  /***
   * @brief recalcula el arreglo con la cantidad de paginas caca vez que cambia el total de filas o la cantidad de filas por pagina
   */
  useEffect(function () {
    setPages(initializePages(totalItems, _selectedRowsPerPage));
  }, [totalItems, _selectedRowsPerPage]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex px-4 py-2 font-semibold tracking-wide border-t w-full items-center justify-between flex-wrap border rounded-bl-lg rounded-br-lg bg-white"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: " sm:flex items-center pr-4  hidden  ".concat(fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader, " ")
  }, i18n.t('dataIterator.pageText', {
    0: initialIndex,
    1: finalIndex,
    2: totalItems
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center sm:flex-grow-0 flex-grow flex-wrap "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex items-center "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sm:flex hidden pr-2  ".concat(fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader, " ")
  }, textRowsPerPage !== null && textRowsPerPage !== void 0 ? textRowsPerPage : i18n.t('dataIterator.roswPerPageText')), /*#__PURE__*/React__default.createElement("select", {
    value: _selectedRowsPerPage,
    className: "block w-16 p-0 m-0 pr-8 text-sm form-select focus:outline-none focus:shadow-outline-purple rounded-md ring-1 text-right ",
    onChange: function onChange(e) {
      setSelectedRowsPerPage(e.target.value);
      onChangeRowsPerPage(e.target.value);
    }
  }, rowsPerPage.map(function (rowPerPage) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: rowPerPage,
      value: rowPerPage
    }, rowPerPage);
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "flex mt-2 sm:mt-auto justify-end items-center flex-grow  "
  }, /*#__PURE__*/React__default.createElement("nav", {
    "aria-label": "Table navigation"
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: "inline-flex items-center"
  }, /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    title: i18n.t('dataIterator.prevPage'),
    onClick: function onClick() {
      return changePage('<');
    },
    className: "px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple",
    "aria-label": "Previous"
  }, /*#__PURE__*/React__default.createElement(ChevronLeftIcon$1, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("select", {
    value: _selectedPage,
    className: "block w-16 p-0 m-0 pr-8 text-sm form-select focus:outline-none focus:shadow-outline-purple rounded-md ring-1 text-right ",
    onChange: function onChange(e) {
      setSelectedPage(parseInt(e.target.value));
      onChangePage(e.target.value);
    }
  }, pages.map(function (page) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: page,
      value: page
    }, page);
  }))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick() {
      return changePage('>');
    },
    title: i18n.t('dataIterator.nextPage'),
    className: "px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple",
    "aria-label": "Next"
  }, /*#__PURE__*/React__default.createElement(ChevronRightIcon$1, {
    className: "w-5 h-5"
  }))))))), /*#__PURE__*/React__default.createElement("div", {
    className: " flex items-center pr-4 sm:hidden pt-2  ".concat(fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader, " ")
  }, i18n.t('dataIterator.pageText', {
    0: initialIndex,
    1: finalIndex,
    2: totalItems
  })));
}

export { Paginator as default };
