import _typeof from '@babel/runtime/helpers/typeof';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, BackspaceIcon, MagnifyingGlassIcon, DocumentPlusIcon, ArrowLongUpIcon, ArrowLongDownIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
import * as iconsMd from 'react-icons/md';
import functions from 'v-functions';
import { groupBy, countBy } from 'underscore';
import mq from 'js-mq';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var fsHeader$1 = ' xs:text-md sm:text-md md:text-md lg:text-base xl:text-base '; // ' via-label !text-white '

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
        setObjOpciones(_objectSpread$1({}, initialObjOpciones));
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
          setObjOpciones(_objectSpread$1({}, newObj));
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
  return /*#__PURE__*/React.createElement("div", {
    className: "flex px-4 py-2 font-semibold tracking-wide border-t w-full items-center justify-between flex-wrap border rounded-bl-lg rounded-br-lg bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: " sm:flex items-center pr-4  hidden  ".concat(fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader$1, " ")
  }, i18n.t('page', {
    0: initialIndex,
    1: finalIndex,
    2: totalItems
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center sm:flex-grow-0 flex-grow flex-wrap "
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center "
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:flex hidden pr-2  ".concat(fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader$1, " ")
  }, textRowsPerPage !== null && textRowsPerPage !== void 0 ? textRowsPerPage : i18n.t('Page')), /*#__PURE__*/React.createElement("select", {
    value: _selectedRowsPerPage,
    className: "block w-16 p-0 m-0 pr-8 text-sm form-select focus:outline-none focus:shadow-outline-purple rounded-md ring-1 text-right ",
    onChange: function onChange(e) {
      setSelectedRowsPerPage(e.target.value);
      onChangeRowsPerPage(e.target.value);
    }
  }, rowsPerPage.map(function (rowPerPage) {
    return /*#__PURE__*/React.createElement("option", {
      key: rowPerPage,
      value: rowPerPage
    }, rowPerPage);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex mt-2 sm:mt-auto justify-end items-center flex-grow  "
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Table navigation"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "inline-flex items-center"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    title: i18n.t('prevPage'),
    onClick: function onClick() {
      return changePage('<');
    },
    className: "px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple",
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement(ChevronLeftIcon, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("select", {
    value: _selectedPage,
    className: "block w-16 p-0 m-0 pr-8 text-sm form-select focus:outline-none focus:shadow-outline-purple rounded-md ring-1 text-right ",
    onChange: function onChange(e) {
      setSelectedPage(parseInt(e.target.value));
      onChangePage(e.target.value);
    }
  }, pages.map(function (page) {
    return /*#__PURE__*/React.createElement("option", {
      key: page,
      value: page
    }, page);
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return changePage('>');
    },
    title: i18n.t('nextPage'),
    className: "px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple",
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(ChevronRightIcon, {
    className: "w-5 h-5"
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: " flex items-center pr-4 sm:hidden pt-2  ".concat(fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader$1, " ")
  }, i18n.t('page', {
    0: initialIndex,
    1: finalIndex,
    2: totalItems
  })));
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * @brief Componente que permite visualizar datos en filas tipo tabla
 * @param headers encabezados o columnas a mostrar en la tabla, caso especial value que inicia con '*' indica que no es columna basetable, list indica que se muestra la información segun una lista
 * @param item los datos que son pasados a la tabla
 * @param sortHeaders campos o columnas que filtran la tabla
 * @param searchText palabra o texto de busqueda general, es decir, en todas las columnas
 * @param selectedRowsPerPage indica cuantas filas por pagina son visualizadas
 * @param selectedPage indica la pagina a visualizar
 * @param onNewItem evento que se debe disparar al presionar el boton Nuevo
 * @param onEditItem evento que se debe disparar al presionar el boton Editar (lapiz)
 * @param onDeleteItem evento que se debe disparar al presionar el boton Eliminar (basurero)
 * @paran UpperButtons botones adicionales en el top antes del campo de busqueda
 * @paran UpperRightButtons botones adicionales en el top antes del botón de New
 */
DataTable.propTypes = {
  headers: PropTypes.array,
  items: PropTypes.array,
  groupTableBy: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  calculatedColumns: PropTypes.array,
  // [{ aggregation_type: 'min', data_id: 1, value: 'monto_total', filters: [{ column: 'to_pay', value: 'S' }] }]
  sortHeaders: PropTypes.array,
  searchText: PropTypes.string,
  headerClass: PropTypes.string,
  groupClass: PropTypes.string,
  selectedRowsPerPage: PropTypes.number,
  selectedPage: PropTypes.number,
  showNewButton: PropTypes.bool,
  showEditButton: PropTypes.bool,
  showDeleteButton: PropTypes.bool,
  showActions: PropTypes.bool,
  onNewItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  UpperButtons: PropTypes.func,
  UpperRightButtons: PropTypes.func,
  PrependActionButtons: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  i18n: PropTypes.object,
  router: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  environment: PropTypes.object,
  hideSearchHeader: PropTypes.bool,
  groupHeaders: PropTypes.array,
  onClickRow: PropTypes.func,
  onClickCelda: PropTypes.func,
  searchRequired: PropTypes.bool,
  highlightListItems: PropTypes.bool,
  onSearch: PropTypes.func,
  showTotales: PropTypes.bool,
  hideInputSearch: PropTypes.bool,
  urlServerImages: PropTypes.string
};
var fsHeader = ' xs:text-md sm:text-md md:text-md lg:text-base xl:text-base '; // ' via-label !text-white '
var fsCelda = ' xs:text-base sm:text-base md:text-base lg:text-sm xl:text-sm '; // ' via-input '

// From https://reactjs.org/docs/hooks-state.html
function DataTable(_ref) {
  var fontClassHeader = _ref.fontClassHeader,
    fontClassCelda = _ref.fontClassCelda,
    headers = _ref.headers,
    items = _ref.items,
    groupTableBy = _ref.groupTableBy,
    _ref$sortHeaders = _ref.sortHeaders,
    sortHeaders = _ref$sortHeaders === void 0 ? [] : _ref$sortHeaders,
    _ref$searchText = _ref.searchText,
    searchText = _ref$searchText === void 0 ? '' : _ref$searchText,
    _ref$headerClass = _ref.headerClass,
    headerClass = _ref$headerClass === void 0 ? 'bg-slate-500 ' : _ref$headerClass,
    _ref$groupClass = _ref.groupClass,
    groupClass = _ref$groupClass === void 0 ? '' : _ref$groupClass,
    _ref$selectedRowsPerP = _ref.selectedRowsPerPage,
    selectedRowsPerPage = _ref$selectedRowsPerP === void 0 ? 10 : _ref$selectedRowsPerP,
    _ref$selectedPage = _ref.selectedPage,
    selectedPage = _ref$selectedPage === void 0 ? 1 : _ref$selectedPage,
    _ref$showNewButton = _ref.showNewButton,
    showNewButton = _ref$showNewButton === void 0 ? true : _ref$showNewButton,
    _ref$showEditButton = _ref.showEditButton,
    showEditButton = _ref$showEditButton === void 0 ? true : _ref$showEditButton,
    _ref$showDeleteButton = _ref.showDeleteButton,
    showDeleteButton = _ref$showDeleteButton === void 0 ? true : _ref$showDeleteButton,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    onNewItem = _ref.onNewItem,
    onEditItem = _ref.onEditItem,
    onDeleteItem = _ref.onDeleteItem,
    UpperButtons = _ref.UpperButtons,
    UpperRightButtons = _ref.UpperRightButtons,
    PrependActionButtons = _ref.PrependActionButtons,
    _ref$i18n = _ref.i18n,
    i18n = _ref$i18n === void 0 ? {
      t: function t() {
        return 'txtNone';
      }
    } : _ref$i18n,
    _ref$router = _ref.router,
    router = _ref$router === void 0 ? {} : _ref$router,
    _ref$environment = _ref.environment,
    environment = _ref$environment === void 0 ? {} : _ref$environment,
    _ref$hideSearchHeader = _ref.hideSearchHeader,
    hideSearchHeader = _ref$hideSearchHeader === void 0 ? false : _ref$hideSearchHeader,
    groupHeaders = _ref.groupHeaders,
    _ref$onClickCelda = _ref.onClickCelda,
    onClickCelda = _ref$onClickCelda === void 0 ? function () {} : _ref$onClickCelda,
    _ref$onClickRow = _ref.onClickRow,
    onClickRow = _ref$onClickRow === void 0 ? function () {} : _ref$onClickRow,
    _ref$searchRequired = _ref.searchRequired,
    searchRequired = _ref$searchRequired === void 0 ? true : _ref$searchRequired,
    _ref$highlightListIte = _ref.highlightListItems,
    highlightListItems = _ref$highlightListIte === void 0 ? true : _ref$highlightListIte,
    _ref$onSearch = _ref.onSearch,
    onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,
    _ref$calculatedColumn = _ref.calculatedColumns,
    calculatedColumns = _ref$calculatedColumn === void 0 ? [] : _ref$calculatedColumn,
    _ref$showTotales = _ref.showTotales,
    showTotales = _ref$showTotales === void 0 ? false : _ref$showTotales,
    _ref$hideInputSearch = _ref.hideInputSearch,
    hideInputSearch = _ref$hideInputSearch === void 0 ? false : _ref$hideInputSearch,
    mobileItemAside = _ref.mobileItemAside,
    _ref$divideDocumentUr = _ref.divideDocumentUrl,
    divideDocumentUrl = _ref$divideDocumentUr === void 0 ? true : _ref$divideDocumentUr,
    _ref$useOverflow = _ref.useOverflow,
    useOverflow = _ref$useOverflow === void 0 ? true : _ref$useOverflow,
    textRowsPerPage = _ref.textRowsPerPage,
    urlServerImages = _ref.urlServerImages,
    HeaderActionButtons = _ref.HeaderActionButtons,
    _ref$onChangePaginato = _ref.onChangePaginator,
    onChangePaginator = _ref$onChangePaginato === void 0 ? function () {} : _ref$onChangePaginato,
    totalItems = _ref.totalItems,
    _ref$stylesHeaders = _ref.stylesHeaders,
    stylesHeaders = _ref$stylesHeaders === void 0 ? {} : _ref$stylesHeaders,
    _ref$overflowHidden = _ref.overflowHidden,
    overflowHidden = _ref$overflowHidden === void 0 ? true : _ref$overflowHidden,
    tableAsideClass = _ref.tableAsideClass,
    tableAside = _ref.tableAside,
    headerAsideClass = _ref.headerAsideClass,
    headerAside = _ref.headerAside;
  // const i18n = useI18n()
  // const router = useRouter()
  var _useState = useState(selectedRowsPerPage),
    _useState2 = _slicedToArray(_useState, 2),
    _selectedRowsPerPage = _useState2[0],
    setSelectedRowsPerPage = _useState2[1];
  var _useState3 = useState(selectedPage),
    _useState4 = _slicedToArray(_useState3, 2),
    _selectedPage = _useState4[0],
    setSelectedPage = _useState4[1];
  var _useState5 = useState(sortHeaders),
    _useState6 = _slicedToArray(_useState5, 2),
    _sortHeaders = _useState6[0],
    setSortHeaders = _useState6[1];
  var _useState7 = useState(searchText),
    _useState8 = _slicedToArray(_useState7, 2),
    _searchText = _useState8[0],
    setSearchText = _useState8[1];
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    initialIndex = _useState10[0],
    setInitialIndex = _useState10[1];
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    finalIndex = _useState12[0],
    setFinalIndex = _useState12[1];
  var _useState13 = useState(totalItems !== null && totalItems !== void 0 ? totalItems : 0),
    _useState14 = _slicedToArray(_useState13, 2),
    _totalItems = _useState14[0],
    setTotalItems = _useState14[1];
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    filteredItems = _useState16[0],
    setFilteredItems = _useState16[1];
  var _useState17 = useState({}),
    _useState18 = _slicedToArray(_useState17, 2),
    objRefCalculated = _useState18[0],
    setObjRefCalculated = _useState18[1];
  var _useState19 = useState({}),
    _useState20 = _slicedToArray(_useState19, 2),
    resultCalculated = _useState20[0],
    setResultCalculated = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isMobile = _useState22[0],
    setIsMobile = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isMounted = _useState24[0],
    setIsMounted = _useState24[1];
  var fileServerUrl = urlServerImages !== null && urlServerImages !== void 0 ? urlServerImages : process.env.urlServerImages;
  var getFontSize = function getFontSize(base, fsClass) {
    if (base != null && (base.includes('text-xs') || base.includes('text-sm') || base.includes('text-base') || base.includes('text-md') || base.includes('text-lg') || base.includes('text-xl'))) {
      return '';
    }
    return fsClass;
  };

  /**
   * @brief verifica si una fila incluye un texto de busqueda
   * @param {*} item fila o registro
   * @param {*} search texto a buscar
   * @returns verdadero si el texto se incluye en alguno de los campos sino falso
   */
  var testHeadersIncludes = function testHeadersIncludes(item, search) {
    if (search && search !== null && search.length > 0 && item && item !== null) {
      var realHeaders = headers.filter(function (head) {
        return head.value.includes('*') === false;
      });
      for (var idx = 0; idx < realHeaders.length; idx++) {
        if (item[realHeaders[idx].value] && typeof (item[realHeaders[idx].value] + ' ').includes === 'function' && (item[realHeaders[idx].value] + ' ').toLowerCase().includes(search.toLowerCase()) === true) {
          return true;
        }
      }
      // revisa en los headers que tienen listas asociadas
      var listHeaders = headers.filter(function (head) {
        return head.list && Array.isArray(head.list) && head.list.length > 0;
      });
      var _loop = function _loop(_idx) {
          if (item[realHeaders[_idx].value] && item[realHeaders[_idx].value] !== null) {
            var valOfItem = listHeaders[_idx].list.filter(function (list) {
              return list.valor === item[realHeaders[_idx].value];
            });
            if (valOfItem && Array.isArray(valOfItem) && valOfItem.length > 0) {
              for (var idxList = 0; idxList < valOfItem.length; idxList++) {
                if ((valOfItem[idxList].texto + ' ').toLowerCase().includes(search.toLowerCase()) === true) {
                  return {
                    v: true
                  };
                }
              }
            }
          }
        },
        _ret;
      for (var _idx = 0; _idx < listHeaders.length; _idx++) {
        _ret = _loop(_idx);
        if (_ret) return _ret.v;
      }
      return false;
    }
    return true;
  };

  /**
   * @brief comparador generico de arreglo de objetos para ordenarlo *reducer*
   * @param {*} sortHdrs arreglo de objetos, value el campo a comparar, direction (1) ascendente, (-1) descendente
   * @param {*} a el registro actual
   * @param {*} b el registro siguiente
   * @returns -1, 0, 1 según corresponda la direccion del ordenamiento
   */
  var sort = function sort(sortHdrs, a, b) {
    var i = 0;
    var result = 0;
    while (i < sortHdrs.length && result === 0) {
      var _a$sortHdrs$i$value, _b$sortHdrs$i$value;
      if (typeof a[sortHdrs[i].value] === 'undefined') {
        i++;
        continue;
      }
      if (typeof b[sortHdrs[i].value] === 'undefined') {
        i++;
        continue;
      }
      var aVal = (_a$sortHdrs$i$value = a[sortHdrs[i].value]) !== null && _a$sortHdrs$i$value !== void 0 ? _a$sortHdrs$i$value : '';
      var bVal = (_b$sortHdrs$i$value = b[sortHdrs[i].value]) !== null && _b$sortHdrs$i$value !== void 0 ? _b$sortHdrs$i$value : '';
      result = sortHdrs[i].direction * (aVal.toString() < bVal.toString() ? -1 : aVal.toString() > bVal.toString() ? 1 : 0);
      i++;
    }
    return result;
  };
  var validarNumero = function validarNumero(valor) {
    var numero = parseFloat(valor);
    if (isNaN(numero)) {
      return 0;
    }
    return numero;
  };
  var tryFormatValue = function tryFormatValue(valToFormat, format, type) {
    var showTextOnNull = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var textOnNull = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var formatedValue = '';
    try {
      formatedValue = functions.formatedValue(valToFormat, format, type, showTextOnNull, textOnNull);
    } catch (e) {
      formatedValue = valToFormat;
    }
    return formatedValue;
  };
  var validarFiltrosCalculos = function validarFiltrosCalculos(conf, fila) {
    if (conf != null && conf.filters != null && conf.filters.length) {
      var continuar = true;
      conf.filters.forEach(function (filter) {
        if (fila[filter.column] !== filter.value) {
          continuar = false;
        }
      });
      return continuar;
    }
    return true;
  };

  /**
   * @brief actualizar un subconjunto de las filas filtradas, ordenadas y en el rango de filas a visualizar
   * @param {*} allItems el arreglo completo de filas
   * @param {*} sortHdrs los encabezados de ordenamiento
   * @param {*} rows filas por pagina seleccionada
   * @param {*} pg pagina seleccionada
   */
  var updateFilteredItems = function updateFilteredItems() {
    var allItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var sortHdrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var rows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var pg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var _objRefCalculated = {};
    if (calculatedColumns != null && calculatedColumns.length) {
      calculatedColumns.forEach(function (calCol) {
        var _calCol$value, _objRefCalculated$_ca;
        (_objRefCalculated$_ca = _objRefCalculated[_calCol$value = calCol.value]) !== null && _objRefCalculated$_ca !== void 0 ? _objRefCalculated$_ca : _objRefCalculated[_calCol$value] = 0;
        _objRefCalculated[calCol.value]++;
      });
    }
    var helem = document.getElementById('_searchText');
    var text = helem != null ? helem.value : '';
    var _items = _toConsumableArray(allItems);
    var filtered = _items.filter(function (item) {
      return testHeadersIncludes(item, text);
    });
    var _allItems = _items.filter(function (item) {
      return testHeadersIncludes(item, text);
    });
    filtered = filtered.sort(function (a, b) {
      return sort(sortHdrs, a, b);
    });
    var initial = 0;
    var _final = 0;
    var countItems = totalItems !== null && totalItems !== void 0 ? totalItems : filtered.length;
    var page = 1;
    if (countItems > 0) {
      initial = (pg - 1) * rows + 1;
      _final = pg * rows > countItems ? countItems : pg * rows;
      page = pg > countItems / rows ? 1 : pg;
    }
    setInitialIndex(initial);
    setFinalIndex(_final);
    if (totalItems == null) {
      setSelectedPage(page);
    }
    var _resultCalculated = {};
    if (groupTableBy && groupTableBy !== null) {
      var grouped = groupBy(filtered, groupTableBy.value);
      var allIndex = 0;
      filtered = {}; // lo convierte a objeto
      // crea nuevas llaves
      Object.keys(grouped).forEach(function (key) {
        filtered[key] = {
          count: 0,
          data: []
        };
      });
      var idx = 0;
      Object.keys(grouped).forEach(function (key) {
        var _loop2 = function _loop2(idxKey) {
          if (totalItems == null) {
            if (idx >= initial - 1 && idx <= _final - 1) {
              filtered[key].data.push(grouped[key][idxKey]);
            }
          }
          if (calculatedColumns != null && calculatedColumns.length) {
            calculatedColumns.forEach(function (calCol) {
              var calKey = "".concat(calCol.aggregation_type, "_").concat(calCol.value, "_").concat(calCol.data_id);
              if (filtered[key][calKey] == null) {
                filtered[key][calKey] = 0;
              }
              if (_resultCalculated[calKey] == null) {
                _resultCalculated[calKey] = 0;
              }
              var calcular = validarFiltrosCalculos(calCol, grouped[key][idxKey]);
              if (calcular) {
                filtered[key].count = filtered[key].count + 1;
                var _val = validarNumero(grouped[key][idxKey][calCol.value]);
                if (calCol.format != null) {
                  var unformatVal = validarNumero(grouped[key][idxKey]["rv_".concat(calCol.value)]); // functions.unformatedValue(grouped[key][idxKey][calCol.value], calCol.format, calCol.type, true, 0)
                  _val = validarNumero(unformatVal);
                }
                if (calCol.aggregation_type === 'max') {
                  if (_val > filtered[key][calKey] || idxKey === 0) {
                    filtered[key][calKey] = _val;
                  }
                  if (_val > _resultCalculated[calKey] || allIndex === 0) {
                    _resultCalculated[calKey] = _val;
                  }
                } else if (calCol.aggregation_type === 'min') {
                  if (_val < filtered[key][calKey] || idxKey === 0) {
                    filtered[key][calKey] = _val;
                  }
                  if (_val < _resultCalculated[calKey] || allIndex === 0) {
                    _resultCalculated[calKey] = _val;
                  }
                } else {
                  filtered[key][calKey] = filtered[key][calKey] + _val;
                  _resultCalculated[calKey] = _resultCalculated[calKey] + _val;
                }
                allIndex++;
              }
            });
          }
          idx++;
        };
        for (var idxKey = 0; idxKey < grouped[key].length; idxKey++) {
          _loop2(idxKey);
        }
        if (calculatedColumns != null && calculatedColumns.length) {
          // console.log('calculatedColumns ', calculatedColumns)
          calculatedColumns.forEach(function (calCol) {
            var calKey = "".concat(calCol.aggregation_type, "_").concat(calCol.value, "_").concat(calCol.data_id);
            if (calCol.aggregation_type === 'avg') {
              filtered[key][calKey] = filtered[key][calKey] / filtered[key].count;
            }
            if (calCol.aggregation_type === 'countd') {
              var objCountDistinct = countBy(grouped[key], function (item) {
                if (calCol.type === 'number') {
                  return validarNumero(item[calCol.value]);
                }
                return item[calCol.value];
              });
              var arrKeyDistinct = Object.keys(objCountDistinct);
              filtered[key][calKey] = arrKeyDistinct.length;
            }
            if (calCol.aggregation_type === 'count') {
              filtered[key][calKey] = filtered[key].count;
            }
          });
        }
      });
      if (calculatedColumns != null && calculatedColumns.length) {
        // console.log('calculatedColumns ', calculatedColumns)
        calculatedColumns.forEach(function (calCol) {
          var calKey = "".concat(calCol.aggregation_type, "_").concat(calCol.value, "_").concat(calCol.data_id);
          if (calCol.aggregation_type === 'avg') {
            _resultCalculated[calKey] = _resultCalculated[calKey] / (allIndex + 1);
          }
          if (calCol.aggregation_type === 'countd') {
            var objCountDistinct = countBy(_allItems, function (item) {
              if (calCol.type === 'number') {
                return validarNumero(item[calCol.value]);
              }
              return item[calCol.value];
            });
            var arrKeyDistinct = Object.keys(objCountDistinct);
            _resultCalculated[calKey] = arrKeyDistinct.length;
          }
          if (calCol.aggregation_type === 'count') {
            _resultCalculated[calKey] = allIndex + 1;
          }
        });
      }
    } else {
      var filteredCount = 0;
      if (filtered.length && calculatedColumns != null && calculatedColumns.length) {
        filtered.forEach(function (fila, idxKey) {
          if (calculatedColumns != null && calculatedColumns.length) {
            calculatedColumns.forEach(function (calCol) {
              var calKey = "".concat(calCol.aggregation_type, "_").concat(calCol.value, "_").concat(calCol.data_id);
              if (_resultCalculated[calKey] == null) {
                _resultCalculated[calKey] = 0;
              }
              var calcular = validarFiltrosCalculos(calCol, fila);
              if (calcular) {
                filteredCount++;
                var _val = validarNumero(fila[calCol.value]);
                if (calCol.format != null) {
                  var unformatVal = validarNumero(fila["rv_".concat(calCol.value)]); // functions.unformatedValue(fila[calCol.value], calCol.format, calCol.type, true, 0)
                  _val = validarNumero(unformatVal);
                }
                if (calCol.aggregation_type === 'max') {
                  if (_val > _resultCalculated[calKey] || idxKey === 0) {
                    _resultCalculated[calKey] = _val;
                  }
                } else if (calCol.aggregation_type === 'min') {
                  if (_val < _resultCalculated[calKey] || idxKey === 0) {
                    _resultCalculated[calKey] = _val;
                  }
                } else {
                  _resultCalculated[calKey] = _resultCalculated[calKey] + _val;
                }
              }
            });
          }
        });
        if (calculatedColumns != null && calculatedColumns.length) {
          // console.log('calculatedColumns ', calculatedColumns)
          calculatedColumns.forEach(function (calCol) {
            var calKey = "".concat(calCol.aggregation_type, "_").concat(calCol.value, "_").concat(calCol.data_id);
            if (calCol.aggregation_type === 'avg') {
              _resultCalculated[calKey] = _resultCalculated[calKey] / filteredCount;
            }
            if (calCol.aggregation_type === 'countd') {
              var objCountDistinct = countBy(filtered, function (item) {
                if (calCol.type === 'number') {
                  return validarNumero(item[calCol.value]);
                }
                return item[calCol.value];
              });
              var arrKeyDistinct = Object.keys(objCountDistinct);
              _resultCalculated[calKey] = arrKeyDistinct.length;
            }
            if (calCol.aggregation_type === 'count') {
              _resultCalculated[calKey] = filteredCount;
            }
          });
        }
      }
      if (totalItems == null) {
        filtered = filtered.slice(initial - 1, _final);
      }
    }
    setResultCalculated(_resultCalculated);
    setFilteredItems(filtered);
    setTotalItems(totalItems !== null && totalItems !== void 0 ? totalItems : countItems);
    setObjRefCalculated(_objRefCalculated);
    _items = null;
  };

  /**
   * @brief Agrega encabezados en ascendente a los encabezados de búsqueda, si el encabezado ya existe lo cambia a descendente, si ya existe como descendente lo quita del arreglo
   * @param {*} header encabezado a agregar a los ordenamientos
   */
  var setSortBy = function setSortBy(header) {
    var sorters = _sortHeaders.filter(function (head) {
      return head.value === header.value;
    });
    var tempSortHeaders = _sortHeaders.slice();
    if (Array.isArray(sorters) && sorters.length > 0) {
      var idx = tempSortHeaders.indexOf(sorters[0]);
      if (sorters[0].sort === 'asc') {
        tempSortHeaders.splice(idx, 1, _objectSpread(_objectSpread({}, header), {}, {
          sort: 'desc',
          direction: 1
        }));
      } else {
        tempSortHeaders.splice(idx, 1);
      }
    } else {
      tempSortHeaders.push(_objectSpread(_objectSpread({}, header), {}, {
        sort: 'asc',
        direction: -1
      }));
    }
    setSortHeaders(tempSortHeaders);
    updateFilteredItems(items, tempSortHeaders, _selectedRowsPerPage, _selectedPage);
  };

  /**
   * @brief permite determinar si un encabezado es parte de los ordenamiento y la dirección del ordenamiento
   * @param {*} header encabezado a evaluar
   * @returns 'asc', 'desc', 'none' si no tiene ordenamiento por dicho encabezado
   */
  var orderByHeader = function orderByHeader(header) {
    var sorters = _sortHeaders.filter(function (head) {
      return head.value === header.value;
    });
    if (Array.isArray(sorters) && sorters.length > 0) {
      return sorters[0].sort;
    }
    return 'none';
  };

  /**
   * @brief Devuelve el icono svg para un campo de conteo
   * @param {*} header encabezado a evaluar
   * @param {*} item
   * @returns icon svg a mostrar
   */
  var iconBadge = function iconBadge(header, item) {
    try {
      var IconComponent = HeroIcons[header.icon];
      if (IconComponent != null) {
        return /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "inline-flex relative items-center p-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none ",
          onClick: function onClick() {
            if (header.toLocation != null) {
              functions.setEncodeStorage("".concat(process.env.idApp, "/").concat(process.env.NODE_ENV).concat(header.toLocation, ":item"), item);
              functions.setEncodeStorage("".concat(process.env.idApp, "/").concat(process.env.NODE_ENV).concat(header.toLocation, ":header"), header);
              router.push("".concat(header.toLocation, "/").concat(environment.getTime()));
            }
          }
        }, /*#__PURE__*/React.createElement(IconComponent, {
          className: "h-6 w-6 left-1/2 p-0 mt-0.5 ml-1 mr-1 ".concat(header.iconClass)
        }), /*#__PURE__*/React.createElement("div", {
          className: "sr-only"
        }, header.text), /*#__PURE__*/React.createElement("div", {
          className: "inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold  rounded-full border-2 ".concat(header.badgeClass)
        }, item[header.value]));
      }
      var IconComponentMd = iconsMd[header.icon];
      if (IconComponentMd != null) {
        return /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "inline-flex relative items-center p-3 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none ",
          onClick: function onClick() {
            if (header.toLocation != null) {
              functions.setEncodeStorage("".concat(process.env.idApp, "/").concat(process.env.NODE_ENV).concat(header.toLocation, ":item"), item);
              functions.setEncodeStorage("".concat(process.env.idApp, "/").concat(process.env.NODE_ENV).concat(header.toLocation, ":header"), header);
              router.push("".concat(header.toLocation, "/").concat(environment.getTime()));
            }
          }
        }, /*#__PURE__*/React.createElement(IconComponentMd, {
          className: "h-6 w-6 left-1/2 p-0 mt-0.5 ml-1 mr-1 ".concat(header.iconClass)
        }), /*#__PURE__*/React.createElement("div", {
          className: "sr-only"
        }, header.text), /*#__PURE__*/React.createElement("div", {
          className: "inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold  rounded-full border-2 ".concat(header.badgeClass)
        }, item[header.value]));
      }
      return null;
    } catch (e) {
      return null;
    }
  };

  /**
   * @brief Devuelve el icono svg de una lista de valores
   * @param {*} header encabezado a evaluar
   * @param {*} value  valor a buscar entre la lista
   * @returns icon svg a mostrar
   */
  var iconFromList = function iconFromList(header, value) {
    var icon = header.list.filter(function (lst) {
      return lst.valor === value || typeof lst.valor === 'number' && lst.valor === parseFloat(value);
    });
    if (Array.isArray(icon) && icon.length > 0) {
      if (icon[0].icono && icon[0].icono.length > 0) {
        try {
          var IconComponent = HeroIcons[icon[0].icono];
          if (IconComponent != null) {
            return /*#__PURE__*/React.createElement("button", {
              className: "w-full flex justify-center cursor-default ".concat(icon[0].clases_css),
              title: icon[0].texto
            }, /*#__PURE__*/React.createElement(IconComponent, {
              className: "h-6 w-6 left-1/2 p-0 mt-0.5 ml-1 mr-1 ".concat(icon[0].clases_css)
            }));
          }
          var IconComponentMd = iconsMd[icon[0].icono];
          if (IconComponentMd != null) {
            return /*#__PURE__*/React.createElement("button", {
              className: "w-full flex justify-center cursor-default ".concat(icon[0].clases_css),
              title: icon[0].texto
            }, /*#__PURE__*/React.createElement(IconComponentMd, {
              className: "h-6 w-6 left-1/2 p-0 mt-0.5 ml-1 mr-1 ".concat(icon[0].clases_css)
            }));
          }
          return null;
        } catch (e) {
          return null;
        }
      } else {
        return icon[0].texto;
      }
    }
    return '';
  };

  /**
   * @brief Devuelve el texto de una lista de valores
   * @param {*} header encabezado a evaluar
   * @param {*} value  valor a buscar entre la lista
   * @returns textos a mostrar
   */
  // const textFromList = (header, value) => {
  //   const text = header.list.filter(lst => lst.valor === value)
  //   if (Array.isArray(text) && text.length > 0) {
  //     return text[0].texto
  //   }
  //   return ''
  // }

  /**
   * @brief Devuelve las clases CSS asociadas a una lista
   * @param {*} header encabezado a evaluar
   * @param {*} value valor a busrar en la lista
   * @returns clases CSS
   */
  // const classFromList = (header, value) => {
  //   const clases = header.list.filter(lst => lst.valor === value)
  //   if (Array.isArray(clases) && clases.length > 0) {
  //     return `via-states-datatable ${clases[0].clases_css}`
  //   }
  //   return ''
  // }

  /**
   * @brief misma funcionalidad en DataForm*
   */

  var getFileParams = function getFileParams(item, header, name) {
    var _functions$getFilePat = functions.getFilePattern(name),
      filename = _functions$getFilePat.filename,
      extension = _functions$getFilePat.extension;
    var params = {};
    if (header.logicalName && header.logicalName !== null) {
      if (typeof header.logicalName === 'function') {
        params.logico = header.logicalName(item);
      } else {
        params.logico = header.logicalName;
      }
    } else {
      params.logico = filename;
    }
    if (header.logicalExtension && header.logicalExtension !== null) {
      if (typeof header.logicalExtension === 'function') {
        params.ext = header.logicalExtension(item);
      } else {
        params.ext = header.logicalExtension;
      }
    } else {
      params.ext = extension;
    }
    return params;
  };
  var documentUrl = function documentUrl(header, item) {
    var params = getFileParams(item, header, item[header.value]);
    var url = "".concat(fileServerUrl).concat(divideDocumentUrl !== false ? '/' : '').concat(params.logico).concat(params.ext);
    return url;
  };
  var DisplayFile = function DisplayFile(header, item) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, header.docType && header.docType === 'img' && item[header.value] && item[header.value] !== null && /*#__PURE__*/React.createElement("img", {
      src: documentUrl(header, item),
      width: 100,
      height: 100,
      className: 'inline-block h-12 w-12 rounded-full ring-2 ring-white',
      title: item[header.value],
      alt: item[header.value]
    }), header.docType && header.docType !== 'img' && item[header.value] && item[header.value] !== null && /*#__PURE__*/React.createElement("div", {
      "data-filetype": functions.getExtension(item[header.value]),
      className: "filepicker-file-icon m-0 p-0 -top-3 rounded-full ring-2 ring-white",
      title: item[header.value]
    }));
  };
  var DisplayValue = function DisplayValue(_ref2) {
    var header = _ref2.header,
      item = _ref2.item;
    try {
      if (header.substituteVal && typeof header.substituteVal === 'function') {
        return /*#__PURE__*/React.createElement(React.Fragment, null, header.substituteVal(item));
      } else if (header.inputProps && header.inputProps.type === 'file') {
        return /*#__PURE__*/React.createElement(React.Fragment, null, DisplayFile(header, item));
      } else if (header.list && header.list.length > 0) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, iconFromList(header, item[header.value]));
      } else if (header.showAsBadge === true) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, iconBadge(header, item));
      } else if (header.value != null && item[header.value] != null) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, item[header.value]);
      }
    } catch (e) {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  var displayTitle = function displayTitle(header, item) {
    return !header.substituteVal ? !header.showAsBadge ? !header.list ? item[header.value] : iconFromList(header, item[header.value]) : '' : header.substituteVal(item);
  };
  var RowItem = function RowItem(_ref3) {
    var item = _ref3.item,
      idxRow = _ref3.idxRow,
      onClickRow = _ref3.onClickRow,
      onClickCelda = _ref3.onClickCelda,
      _ref3$groupKey = _ref3.groupKey,
      groupKey = _ref3$groupKey === void 0 ? null : _ref3$groupKey,
      _ref3$idxGroupKey = _ref3.idxGroupKey,
      idxGroupKey = _ref3$idxGroupKey === void 0 ? null : _ref3$idxGroupKey;
    if (isMobile === true) {
      var mobileHeaders = headers.filter(function (head) {
        return head.mobileItemAside !== true && head.showInTable !== false && head.showInMobile !== false;
      });
      var itemsAside = headers.filter(function (head) {
        return head.mobileItemAside === true && head.showInTable !== false && head.showInMobile !== false;
      });
      return /*#__PURE__*/React.createElement("div", {
        className: " group hover:shadow-sm text-gray-700 hover:ring-1 ring-inset w-full ring-blue-100 ".concat(idxRow % 2 ? 'bg-blue-50' : ''),
        onClick: function onClick(event) {
          onClickRow(item, idxRow, event);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-row w-full divide-y divide-x divide-blue-300"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-none content-center border-t border-blue-300 space-y-8 flex-wrap overflow-hidden "
      }, mobileItemAside != null && mobileItemAside(item), itemsAside.map(function (column, idx) {
        return /*#__PURE__*/React.createElement("div", {
          key: idx,
          className: " text-black flex w-full flex-col scale-125 "
        }, /*#__PURE__*/React.createElement("span", {
          className: " text-[0.6rem] font-semibold text-gray-500 ml-6 "
        }, " ", column.text, " "), /*#__PURE__*/React.createElement(DisplayValue, {
          header: column,
          item: item
        }));
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-grow w-full "
      }, /*#__PURE__*/React.createElement("table", {
        className: "w-full whitespace-no-wrap "
      }, /*#__PURE__*/React.createElement("tbody", null, mobileHeaders.map(function (column, idx) {
        return /*#__PURE__*/React.createElement("tr", {
          key: idx,
          className: " hover:border-gray-300 border-b border-transparent"
        }, /*#__PURE__*/React.createElement("td", {
          className: " w-32 min-w-32 max-w-32 px-1"
        }, /*#__PURE__*/React.createElement("span", {
          className: '  text-gray-500 ' + fsHeader.replace('!text-white')
        }, column.text)), /*#__PURE__*/React.createElement("td", {
          className: " text-black pr-2 ".concat(typeof column.classItem === 'function' && header.preventClassItem !== true ? column.classItem(item) : '', "  ").concat(column["class"] ? column["class"] : '', " ").concat(getFontSize(column["class"], fontClassCelda !== null && fontClassCelda !== void 0 ? fontClassCelda : fsCelda), " border border-spacing-0.5 border-transparent table-cell group-hover:border-blue-300 align-middle truncate text-ellipsis overflow-hidden whitespace-nowrap ").concat((column.list && column.list.length && highlightListItems) > 0 ? 'via-states-datatable' : '', " "),
          title: displayTitle(column, item),
          onClick: function onClick(e) {
            onClickCelda(item, idxRow, column, idx, groupKey, idxGroupKey, e);
          }
        }, /*#__PURE__*/React.createElement(DisplayValue, {
          header: column,
          item: item
        })));
      }), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: 2,
        className: "p-4 overflow-hidden "
      }, showActions === true && /*#__PURE__*/React.createElement("div", {
        className: " flex w-full space-x-4 justify-center scale-150 "
      }, PrependActionButtons ? PrependActionButtons(item) : '', showEditButton === true && /*#__PURE__*/React.createElement("button", {
        className: "rounded-sm hover:bg-blue-300",
        title: i18n.t('editRow'),
        onClick: function onClick() {
          return onEditItem(item);
        }
      }, /*#__PURE__*/React.createElement(PencilSquareIcon, {
        className: "h-5 w-5 m-0 p-0 mr-2 ml-2 text-sky-700"
      })), showDeleteButton === true && /*#__PURE__*/React.createElement("button", {
        className: "rounded-sm hover:bg-red-300",
        title: i18n.t('deleteRow'),
        onClick: function onClick() {
          return onDeleteItem(item);
        }
      }, /*#__PURE__*/React.createElement(TrashIcon, {
        className: "h-5 w-5 m-0 p-0 mr-2 ml-2 text-rose-700"
      }))))))))));
    }
    return /*#__PURE__*/React.createElement("div", {
      key: idxRow,
      className: "table-row mt-1 group hover:shadow-sm",
      onClick: function onClick(event) {
        onClickRow(item, idxRow, event);
      }
    }, idxRow === 0 && tableAside != null && /*#__PURE__*/React.createElement("td", {
      rowspan: "0",
      className: " relative"
    }, typeof tableAside === 'function' ? tableAside(item) : '', /*#__PURE__*/React.createElement("div", {
      className: " absolute w-full h-full top-0 left-0 flex justify-center items-center px-4 py-3 bg-white ".concat(tableAsideClass, " ").concat(overflowHidden ? ' overflow-hidden overflow-ellipsis' : '', " ")
    }, typeof tableAside === 'function' ? tableAside(item) : '')), headers.map(function (header, idxCol) {
      if (header && header.showInTable !== false) {
        return /*#__PURE__*/React.createElement("td", {
          key: idxCol,
          className: " text-black ".concat(idxRow % 2 !== 0 ? 'bg-neutral-200' : '', " ").concat(header["class"] ? header["class"] : '', " ").concat(getFontSize(header["class"], fontClassCelda !== null && fontClassCelda !== void 0 ? fontClassCelda : fsCelda), " ").concat(typeof header.classItem === 'function' && header.preventClassItem !== true ? header.classItem(item) : '', " border border-spacing-0.5 border-transparent table-cell group-hover:border-blue-300 align-middle p-1 truncate text-ellipsis overflow-hidden whitespace-nowrap ").concat((header.list && header.list.length && highlightListItems) > 0 ? 'via-states-datatable' : ''),
          title: displayTitle(header, item),
          onClick: function onClick(e) {
            onClickCelda(item, idxRow, header, idxCol, groupKey, idxGroupKey, e);
          }
        }, /*#__PURE__*/React.createElement(DisplayValue, {
          header: header,
          item: item
        }));
      }
    }), showActions === true && /*#__PURE__*/React.createElement("div", {
      className: " align-middle table-cell border border-spacing-0.5 border-transparent group-hover:border-blue-300  text-center border p-0 ".concat(idxRow % 2 !== 0 ? 'bg-neutral-200' : '', " group-hover:border-blue-300 w-24 ")
    }, PrependActionButtons ? PrependActionButtons(item) : '', /*#__PURE__*/React.createElement("div", {
      className: "inline w-24 m-0 p-0"
    }, showEditButton === true && /*#__PURE__*/React.createElement("button", {
      className: "rounded-sm hover:bg-blue-300",
      title: i18n.t('editRow'),
      onClick: function onClick() {
        return onEditItem(item);
      }
    }, /*#__PURE__*/React.createElement(PencilSquareIcon, {
      className: "h-5 w-5 m-0 p-0 mr-2 ml-2 text-sky-700"
    })), showDeleteButton === true && /*#__PURE__*/React.createElement("button", {
      className: "rounded-sm hover:bg-red-300",
      title: i18n.t('deleteRow'),
      onClick: function onClick() {
        return onDeleteItem(item);
      }
    }, /*#__PURE__*/React.createElement(TrashIcon, {
      className: "h-5 w-5 m-0 p-0 mr-2 ml-2 text-rose-700"
    })))));
  };
  RowItem.propTypes = {
    item: PropTypes.object,
    idxRow: PropTypes.number
  };

  /* eslint-disable */
  var registrarBreckpoint = function registrarBreckpoint() {
    if ((typeof document === "undefined" ? "undefined" : _typeof(document)) !== undefined) {
      try {
        mq.register([/* eslint-enable */
        {
          name: 'mobile',
          query: '(max-width: 767px)'
        }, {
          name: 'desktop',
          query: '(min-width: 768px)'
        }]);
        mq.on('mobile', function (e) {
          setIsMobile(true);
        });
        mq.on('desktop', function (e) {
          setIsMobile(false);
        });
        var arrayEstadoMq = mq.getState();
        if (arrayEstadoMq.length && (arrayEstadoMq[0] === 'not-mobile' || arrayEstadoMq[0] === 'desktop')) {
          setIsMobile(false);
        } else {
          setIsMobile(true);
        }
      } catch (e) {
        console.error("Error al registrar mq breackpoints - ".concat(e.message));
      }
    }
  };
  useEffect(function () {
    registrarBreckpoint();
    setIsMounted(true);
  }, []);
  useEffect(function () {
    if (isMounted) {
      onChangePaginator(_selectedPage, _selectedRowsPerPage);
    }
  }, [_selectedPage, _selectedRowsPerPage]);
  useEffect(function () {
    // console.log('useEffect [items, groupTableBy]')
    if (selectedRowsPerPage != null && selectedRowsPerPage !== _selectedRowsPerPage && isMounted) {
      setSelectedRowsPerPage(selectedRowsPerPage);
      updateFilteredItems(items, _sortHeaders, selectedRowsPerPage, _selectedPage);
    }
  }, [selectedRowsPerPage]);
  /**
   * actualiza la visualizacion al cambiar los items
   */
  useEffect(function () {
    // console.log('useEffect [items, groupTableBy]')
    updateFilteredItems(items, _sortHeaders, _selectedRowsPerPage, _selectedPage);
  }, [items, groupTableBy, selectedRowsPerPage]);
  useEffect(function () {
    if (isMounted === true && calculatedColumns != null && calculatedColumns.length) {
      // console.log('useEffect [calculatedColumns]')
      updateFilteredItems(items, _sortHeaders, _selectedRowsPerPage, _selectedPage);
    }
  }, [calculatedColumns]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, hideSearchHeader !== true && /*#__PURE__*/React.createElement("div", {
    className: "form-group w-full flex flex-row pb-1"
  }, UpperButtons ? UpperButtons() : '', hideInputSearch !== true && /*#__PURE__*/React.createElement("div", {
    className: "w-full relative mr-2"
  }, /*#__PURE__*/React.createElement("input", {
    id: "_searchText",
    name: "_searchText",
    value: _searchText,
    required: searchRequired
    // placeholder={ i18n ? i18n.t('common.search') : '' }
    ,
    type: "text",
    className: "via-input",
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        setSearchText(e.target.value);
        onSearch(e.target.value);
        updateFilteredItems(items, _sortHeaders, _selectedRowsPerPage, _selectedPage);
      }
    },
    onInput: function onInput(e) {
      setSearchText(e.target.value);
      onSearch(e.target.value);
      updateFilteredItems(items, _sortHeaders, _selectedRowsPerPage, _selectedPage);
    },
    onChange: function onChange() {}
  }), _searchText && _searchText.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "via-append-input-extra",
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      document.getElementById('_searchText').value = '';
      setSearchText('');
      updateFilteredItems(items, _sortHeaders, _selectedRowsPerPage, _selectedPage);
    }
  }, /*#__PURE__*/React.createElement(BackspaceIcon, {
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("button", {
    className: "via-append-input",
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    disabled: true
  }, /*#__PURE__*/React.createElement(MagnifyingGlassIcon, {
    className: "w-5 h-5"
  }))), UpperRightButtons ? UpperRightButtons() : '', showNewButton === true && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "w-36 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-0.5 text-center inline-flex items-center mr-2 text-white bg-emerald-600 hover:bg-emerald-700  focus:ring-emerald-300  dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800",
    onClick: function onClick() {
      return onNewItem();
    }
  }, /*#__PURE__*/React.createElement(DocumentPlusIcon, {
    className: "mr-2 -ml-1 w-5 h-5"
  }), i18n.t('newItem'))), /*#__PURE__*/React.createElement("div", {
    className: " ".concat(useOverflow ? 'overflow-auto' : '', " rounded-lg shadow ")
  }, isMobile !== true && /*#__PURE__*/React.createElement("table", {
    className: "table table-fixed w-[800px] md:w-full bg-slate-50"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "table-header-group "
  }, groupHeaders != null && groupHeaders.length && /*#__PURE__*/React.createElement("tr", {
    className: "table-row"
  }, groupHeaders.map(function (header, idx) {
    return /*#__PURE__*/React.createElement("th", {
      key: idx,
      id: "identificador-grupo-table",
      className: "px-3 py-1 text-center overflow-hidden ".concat(header["class"] ? header["class"] : '', " ").concat(getFontSize(header["class"], fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader), " "),
      colSpan: header.colspan
    }, header.text, header.element != null ? header.element() : '');
  })), /*#__PURE__*/React.createElement("tr", {
    className: "table-row"
  }, tableAside != null && /*#__PURE__*/React.createElement("th", {
    className: " px-3 py-1 text-center overflow-hidden ".concat(headerAsideClass, " ")
  }, headerAside != null && typeof headerAside === 'function' ? headerAside() : ''), headers.map(function (header, idx) {
    if (header && header.showInTable !== false) {
      return (
        /*#__PURE__*/
        // truncate text-ellipsis overflow-hidden whitespace-nowrap
        React.createElement("td", {
          key: idx,
          id: "dtbl-header",
          className: "relative align-middle !table-cell text-center font-semibold border p-1 text-gray-50 ".concat(idx === 0 ? 'rounded-tl-lg' : idx === headers.length - 1 ? 'rounded-tr-lg' : '', " ").concat(header.headerClass ? header.headerClass : '', "  ").concat(getFontSize(header.headerClass, fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader), " ").concat(headerClass),
          style: _objectSpread({}, stylesHeaders !== null && stylesHeaders !== void 0 ? stylesHeaders : {}),
          onClick: function onClick() {
            if (header.value.includes('*') === false) {
              setSortBy(header);
            }
          }
        }, header.text, header && header.value && header.value.includes('*') === false && orderByHeader(header) === 'asc' && /*#__PURE__*/React.createElement("div", {
          className: "inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
        }, /*#__PURE__*/React.createElement(ArrowLongUpIcon, {
          className: "w-3 h-3"
        })), header && header.value && header.value.includes('*') === false && orderByHeader(header) === 'desc' && /*#__PURE__*/React.createElement("div", {
          className: "inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
        }, /*#__PURE__*/React.createElement(ArrowLongDownIcon, {
          className: "w-3 h-3"
        })), HeaderActionButtons ? HeaderActionButtons(header) : '')
      );
    }
  }), showActions === true && /*#__PURE__*/React.createElement("div", {
    className: "!table-cell align-middle text-center font-semibold border p-1 bg-slate-500 text-gray-50 rounded-tr-lg w-24 ".concat(headerClass, " ").concat(getFontSize(headerClass, fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader), " ")
  }, i18n.t('common.actions')))), /*#__PURE__*/React.createElement("tbody", {
    className: "table-row-group bg-white"
  }, filteredItems && Array.isArray(filteredItems) === false &&
  // crea una fila de agrupacion
  Object.keys(filteredItems).map(function (groupKey, idxGroupKey) {
    var _headersTable = headers.filter(function (head) {
      return head.showInTable !== false;
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
      className: "table-row"
    }, /*#__PURE__*/React.createElement("td", {
      key: 'group_' + idxGroupKey,
      className: "col-span-full bg-slate-300 text-slate-800 ".concat(groupClass),
      colSpan: _headersTable.length
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex w-full items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center "
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex text-sm"
    }, groupTableBy && groupTableBy !== null ? groupTableBy.label + ': ' : ''), groupTableBy && groupTableBy !== null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex font-medium ml-1 items-baseline  ".concat(getFontSize(headerClass, fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader), " ")
    }, " ", groupTableBy.list ? iconFromList(groupTableBy, groupKey) : groupKey, " "), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
    }, filteredItems[groupKey].count))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center "
    }, calculatedColumns.map(function (calCol, idx) {
      var calKey = "".concat(calCol.aggregation_type, "_").concat(calCol.value, "_").concat(calCol.data_id);
      return /*#__PURE__*/React.createElement("div", {
        className: "inline-flex justify-between justify-self-end px-2 items-center ml-2 w-40 text-xs font-semibold text-blue-800 bg-blue-200 rounded-md -top-0.5",
        key: idx
      }, /*#__PURE__*/React.createElement("div", {
        className: " flex flex-col w-20 truncate"
      }, /*#__PURE__*/React.createElement("span", null, i18n.t("queryDefinition.qd_".concat(calCol.aggregation_type))), /*#__PURE__*/React.createElement("span", null, calCol.text, " ")), /*#__PURE__*/React.createElement("div", {
        className: " flex items-center text-sm text-black"
      }, calCol.aggregation_type !== 'count' && calCol.aggregation_type !== 'countd' && /*#__PURE__*/React.createElement("span", {
        title: filteredItems[groupKey][calKey]
      }, calCol.format != null ? tryFormatValue(filteredItems[groupKey][calKey], calCol.format, calCol.type, true, 0) : functions.formatMoney(filteredItems[groupKey][calKey])), (calCol.aggregation_type === 'count' || calCol.aggregation_type === 'countd') && /*#__PURE__*/React.createElement("span", null, filteredItems[groupKey][calKey])));
    }))))), filteredItems[groupKey] && filteredItems[groupKey].data && Array.isArray(filteredItems[groupKey].data) && filteredItems[groupKey].data.map(function (item, idxRow) {
      return /*#__PURE__*/React.createElement(RowItem, {
        key: idxGroupKey + '_' + idxRow,
        item: item,
        idxRow: idxRow,
        onClickRow: onClickRow,
        onClickCelda: onClickCelda,
        groupKey: groupKey,
        idxGroupKey: idxGroupKey
      });
    }));
  }), Array.isArray(filteredItems) && filteredItems.map(function (item, idxRow) {
    return /*#__PURE__*/React.createElement(RowItem, {
      key: idxRow,
      item: item,
      idxRow: idxRow,
      onClickRow: onClickRow,
      onClickCelda: onClickCelda
    });
  })), showTotales && /*#__PURE__*/React.createElement("tfoot", {
    className: "table-header-group "
  }, /*#__PURE__*/React.createElement("tr", {
    className: "table-row"
  }, headers.map(function (header, idx) {
    if (header && header.showInTable !== false) {
      if (objRefCalculated[header.value] == null || objRefCalculated[header.value] < 0) {
        return (
          /*#__PURE__*/
          // truncate text-ellipsis overflow-hidden whitespace-nowrap
          React.createElement("td", {
            key: idx,
            className: " align-middle !table-cell font-semibold border p-1  ".concat(header.footerClass ? header.footerClass : ' text-right ')
          }, typeof header.footerLabel === 'function' ? header.footerLabel(header) : header.footerLabel)
        );
      }
      var arrObjCalculated = calculatedColumns != null && calculatedColumns.length ? calculatedColumns.filter(function (calCol) {
        return calCol.value === header.value;
      }) : [];
      ///const calCol = arrObjCalculated[arrObjCalculated.length - 1]
      return (
        /*#__PURE__*/
        // truncate text-ellipsis overflow-hidden whitespace-nowrap
        React.createElement("td", {
          key: idx,
          className: "align-middle !table-cell text-right font-semibold border px-1  ".concat(header.footerClass ? header.footerClass : '')
        }, arrObjCalculated.map(function (calCol) {
          var _header$footerLabel;
          var calKey = "".concat(calCol.aggregation_type, "_").concat(calCol.value, "_").concat(calCol.data_id);
          return /*#__PURE__*/React.createElement("div", {
            key: calKey,
            className: "group border-b flex flex-col w-full overflow-auto relative py-1 ".concat(header.footerClass ? header.footerClass : '')
          }, /*#__PURE__*/React.createElement("div", {
            className: " flex w-full absolute top-0 "
          }, /*#__PURE__*/React.createElement("span", {
            className: "bg-white group-hover:opacity-25 transition duration-300 px-2 py-1 rounded-full  ".concat(getFontSize(header.footerLabelClass, fontClassCelda !== null && fontClassCelda !== void 0 ? fontClassCelda : fsCelda), "  ").concat(header.footerLabelClass ? header.footerLabelClass : '')
          }, (_header$footerLabel = header.footerLabel) !== null && _header$footerLabel !== void 0 ? _header$footerLabel : i18n.t("queryDefinition.qd_".concat(calCol.aggregation_type)))), /*#__PURE__*/React.createElement("div", {
            className: " flex w-full justify-end "
          }, calCol.aggregation_type !== 'count' && calCol.aggregation_type !== 'countd' && /*#__PURE__*/React.createElement("span", {
            className: " ".concat(getFontSize(header.footerResultClass, fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader), " ").concat(header.footerResultClass ? header.footerResultClass : ''),
            title: resultCalculated[calKey]
          }, calCol.format != null ? tryFormatValue(resultCalculated[calKey], calCol.format, calCol.type, true, 0) : functions.formatMoney(resultCalculated[calKey])), (calCol.aggregation_type === 'count' || calCol.aggregation_type === 'countd') && /*#__PURE__*/React.createElement("span", {
            className: " ".concat(getFontSize(header.footerResultClass, fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader), " ").concat(header.footerResultClass ? header.footerResultClass : '')
          }, resultCalculated[calKey])));
        }))
      );
    }
  }), showActions === true && /*#__PURE__*/React.createElement("div", {
    className: " align-middle !table-cell text-center font-semibold border "
  })))), isMobile === true && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col bg-white divide-y divide-x items-center block "
  }, filteredItems && Array.isArray(filteredItems) === false &&
  // crea una fila de agrupacion
  Object.keys(filteredItems).map(function (groupKey, idxGroupKey) {
    if (isMobile === true) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        key: 'group_' + idxGroupKey,
        className: " bg-slate-300 text-slate-800 ".concat(groupClass, " w-full flex-wrap space-y-1 space-x-2 px-2")
      }, /*#__PURE__*/React.createElement("div", {
        className: " flex w-full items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "inline-flex text-sm "
      }, groupTableBy && groupTableBy !== null ? groupTableBy.label + ': ' : ''), groupTableBy && groupTableBy !== null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "inline-flex font-medium ml-1 items-baseline"
      }, " ", groupTableBy.list ? iconFromList(groupTableBy, groupKey) : groupKey, " "), /*#__PURE__*/React.createElement("div", {
        className: "inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
      }, filteredItems[groupKey].count))), calculatedColumns.map(function (calCol, idx) {
        var calKey = "".concat(calCol.aggregation_type, "_").concat(calCol.value, "_").concat(calCol.data_id);
        return /*#__PURE__*/React.createElement("div", {
          className: "group inline-flex justify-between justify-self-end px-2 items-center w-44 text-xs font-semibold text-blue-800 bg-blue-200 rounded-md -top-0.5",
          key: idx
        }, /*#__PURE__*/React.createElement("div", {
          className: " flex flex-col w-20 truncate"
        }, /*#__PURE__*/React.createElement("span", null, i18n.t("queryDefinition.qd_".concat(calCol.aggregation_type))), /*#__PURE__*/React.createElement("span", null, calCol.text, " ")), /*#__PURE__*/React.createElement("div", {
          className: " flex items-center text-sm text-black"
        }, calCol.aggregation_type !== 'count' && calCol.aggregation_type !== 'countd' && /*#__PURE__*/React.createElement("span", {
          title: filteredItems[groupKey][calKey]
        }, calCol.format != null ? tryFormatValue(filteredItems[groupKey][calKey], calCol.format, calCol.type, true, 0) : functions.formatMoney(filteredItems[groupKey][calKey])), (calCol.aggregation_type === 'count' || calCol.aggregation_type === 'countd') && /*#__PURE__*/React.createElement("span", null, filteredItems[groupKey][calKey])));
      })), filteredItems[groupKey] && filteredItems[groupKey].data && Array.isArray(filteredItems[groupKey].data) && filteredItems[groupKey].data.map(function (item, idxRow) {
        return /*#__PURE__*/React.createElement(RowItem, {
          key: idxGroupKey + '_' + idxRow,
          item: item,
          idxRow: idxRow,
          onClickRow: onClickRow,
          onClickCelda: onClickCelda,
          groupKey: groupKey,
          idxGroupKey: idxGroupKey
        });
      }));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }), Array.isArray(filteredItems) && filteredItems.map(function (item, idxRow) {
    return /*#__PURE__*/React.createElement(RowItem, {
      key: idxRow,
      item: item,
      idxRow: idxRow,
      onClickRow: onClickRow,
      onClickCelda: onClickCelda
    });
  }), showTotales && /*#__PURE__*/React.createElement("div", {
    className: "  hover:shadow-sm text-gray-700 hover:ring-1 ring-inset w-full ring-blue-100 ".concat(filteredItems.length % 2 ? 'bg-blue-50' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-grow w-full "
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full whitespace-no-wrap "
  }, /*#__PURE__*/React.createElement("tbody", null, headers.map(function (header, idx) {
    if (header && header.showInTable !== false) {
      if (header.footerLabel == null && (objRefCalculated[header.value] == null || objRefCalculated[header.value] < 0)) {
        return /*#__PURE__*/React.createElement(React.Fragment, null);
      }
      if ((objRefCalculated[header.value] == null || objRefCalculated[header.value] < 0) && header.footerLabel != null) {
        return (
          /*#__PURE__*/
          // truncate text-ellipsis overflow-hidden whitespace-nowrap
          React.createElement("tr", {
            key: idx
          }, /*#__PURE__*/React.createElement("td", {
            className: " font-semibold border p-1  ".concat(header.footerClass ? header.footerClass : ' text-right ')
          }, header.footerLabel))
        );
      }
      var arrObjCalculated = calculatedColumns != null && calculatedColumns.length ? calculatedColumns.filter(function (calCol) {
        return calCol.value === header.value;
      }) : [];
      // const calCol = arrObjCalculated[arrObjCalculated.length - 1]
      // const calKey = `${calCol.aggregation_type}_${calCol.value}_${calCol.data_id}`
      return (
        /*#__PURE__*/
        // truncate text-ellipsis overflow-hidden whitespace-nowrap
        React.createElement("tr", {
          key: idx
        }, /*#__PURE__*/React.createElement("td", {
          className: " flex flex-col w-full font-semibold border p-1  ".concat(header.footerClass ? header.footerClass : '')
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-full bg-blue-50 pb-1 px-2 border-t "
        }, /*#__PURE__*/React.createElement("span", {
          className: " ".concat(header.footerLabelClass ? header.footerLabelClass : '')
        }, arrObjCalculated[0].text)), arrObjCalculated.map(function (calCol) {
          var _header$footerLabel2;
          var calKey = "".concat(calCol.aggregation_type, "_").concat(calCol.value, "_").concat(calCol.data_id);
          return /*#__PURE__*/React.createElement("div", {
            key: calKey,
            className: "group flex flex-col w-full overflow-auto relative ".concat(header.footerClass ? header.footerClass : '')
          }, /*#__PURE__*/React.createElement("div", {
            className: " flex w-full absolute top-0 "
          }, /*#__PURE__*/React.createElement("span", {
            className: "bg-white group-hover:opacity-25 transition duration-300 px-2 py-1 rounded-full  ".concat(header.footerLabelClass ? header.footerLabelClass : '')
          }, (_header$footerLabel2 = header.footerLabel) !== null && _header$footerLabel2 !== void 0 ? _header$footerLabel2 : i18n.t("queryDefinition.qd_".concat(calCol.aggregation_type)))), /*#__PURE__*/React.createElement("div", {
            className: " flex w-full justify-end "
          }, calCol.aggregation_type !== 'count' && calCol.aggregation_type !== 'countd' && /*#__PURE__*/React.createElement("span", {
            className: " ".concat(header.footerResultClass ? header.footerResultClass : ''),
            title: resultCalculated[calKey]
          }, calCol.format != null ? tryFormatValue(resultCalculated[calKey], calCol.format, calCol.type, true, 0) : functions.formatMoney(resultCalculated[calKey])), (calCol.aggregation_type === 'count' || calCol.aggregation_type === 'countd') && /*#__PURE__*/React.createElement("span", {
            className: " ".concat(header.footerResultClass ? header.footerResultClass : '')
          }, resultCalculated[calKey])));
        })))
      );
    }
  })))))), /*#__PURE__*/React.createElement(Paginator, {
    i18n: i18n,
    initialIndex: initialIndex,
    finalIndex: finalIndex,
    totalItems: _totalItems,
    selectedRowsPerPage: _selectedRowsPerPage != null && _selectedRowsPerPage ? _selectedRowsPerPage : 10,
    selectedPage: _selectedPage,
    onChangeRowsPerPage: function onChangeRowsPerPage(rows) {
      setSelectedRowsPerPage(rows);
      updateFilteredItems(items, _sortHeaders, rows, _selectedPage);
    },
    onChangePage: function onChangePage(pg) {
      setSelectedPage(pg);
      updateFilteredItems(items, _sortHeaders, _selectedRowsPerPage, pg);
    },
    textRowsPerPage: textRowsPerPage,
    onEndBuildListaRPP: function onEndBuildListaRPP() {
      updateFilteredItems(items, _sortHeaders, _selectedRowsPerPage, _selectedPage);
    },
    fontClassHeader: fontClassHeader !== null && fontClassHeader !== void 0 ? fontClassHeader : fsHeader,
    fontClassCelda: fontClassCelda !== null && fontClassCelda !== void 0 ? fontClassCelda : fsCelda
  })));
}

export { DataTable as default };
