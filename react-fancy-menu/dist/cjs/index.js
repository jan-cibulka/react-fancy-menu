'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FancyButton = function () {
    var _a = React.useState(1), count = _a[0], setCount = _a[1];
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("button", { onClick: function () { return setCount(count * 2); } }, "Push")));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url(\"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900\");\n.navigation {\n  padding: 0px 20px;\n  height: 70px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  width: 100%; }\n  .navigation ul {\n    display: flex;\n    padding-inline-start: 0; }\n    .navigation ul li {\n      position: relative;\n      list-style: none;\n      width: 70px;\n      height: 70px;\n      z-index: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      text-align: center;\n      font-weight: 500;\n      cursor: pointer; }\n      .navigation ul li .icon {\n        position: relative;\n        display: block;\n        line-height: 75px;\n        font-size: 1.5em;\n        text-align: center;\n        transition: 0.5s; }\n      .navigation ul li .text {\n        position: absolute;\n        font-weight: 400;\n        font-size: 0.75em;\n        letter-spacing: 0.05em;\n        transition: 0.5s;\n        opacity: 0;\n        transform: translateY(-25px); }\n    .navigation ul li.active .icon {\n      transform: translateY(35px); }\n    .navigation ul li.active .text {\n      opacity: 1;\n      transform: translateY(-15px); }\n  .navigation .indicator {\n    position: absolute;\n    box-sizing: border-box;\n    bottom: -50%;\n    border-radius: 50%;\n    border: 5px solid;\n    width: 70px;\n    height: 70px;\n    transition: 0.4s; }\n    .navigation .indicator .before {\n      position: absolute;\n      bottom: 50%;\n      left: -20px;\n      width: 19px;\n      height: 20px;\n      background: transparent;\n      border-bottom-right-radius: 20px; }\n    .navigation .indicator .after {\n      position: absolute;\n      bottom: 50%;\n      right: -20px;\n      width: 19px;\n      height: 20px;\n      background: transparent;\n      border-bottom-left-radius: 20px; }\n";
styleInject(css_248z);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default["default"].createContext && React__default["default"].createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React__default["default"].createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React__default["default"].createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return React__default["default"].createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React__default["default"].createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function IoHomeOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32","d":"M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"}},{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32","d":"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"}}]})(props);
}function IoLocationOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32","d":"M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"}},{"tag":"circle","attr":{"cx":"256","cy":"192","r":"48","fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32"}}]})(props);
}function IoPeopleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32","d":"M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"}},{"tag":"path","attr":{"fill":"none","strokeMiterlimit":"10","strokeWidth":"32","d":"M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"}},{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32","d":"M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"}},{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeMiterlimit":"10","strokeWidth":"32","d":"M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"}}]})(props);
}function IoPersonOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32","d":"M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"}},{"tag":"path","attr":{"fill":"none","strokeMiterlimit":"10","strokeWidth":"32","d":"M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"}}]})(props);
}function IoSettingsOutline (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"fill":"none","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"32","d":"M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"}}]})(props);
}

var INDICATOR_COLOR_DEFAULT = "#95a5ff";
var BACKGROUND_COLOR_DEFAULT = "#fff";
var LINK_COLOR_DEFAULT = "#222327";
var getCssStyleOverrides = function (itemCount, indicatorColor, backgroundColor, pageColor) {
    if (indicatorColor === void 0) { indicatorColor = ""; }
    if (backgroundColor === void 0) { backgroundColor = ""; }
    if (pageColor === void 0) { pageColor = ""; }
    var cssSupportsAvailable = !!CSS.supports;
    // let indicatorBackgroundColor = INDICATOR_COLOR_DEFAULT;
    // let navigationBackgroundColor = BACKGROUND_COLOR_DEFAULT;
    // let linkColor = LINK_COLOR_DEFAULT;
    // let shadowAndBorderColor = "transparent";
    var indicatorBackgroundColor = cssSupportsAvailable && CSS.supports("color", indicatorColor)
        ? indicatorColor
        : INDICATOR_COLOR_DEFAULT;
    var navigationBackgroundColor = cssSupportsAvailable && CSS.supports("color", backgroundColor)
        ? backgroundColor
        : BACKGROUND_COLOR_DEFAULT;
    var linkColor = cssSupportsAvailable && CSS.supports("color", pageColor)
        ? pageColor
        : LINK_COLOR_DEFAULT;
    var shadowAndBorderColor = cssSupportsAvailable && CSS.supports("color", pageColor)
        ? pageColor
        : "transparent";
    return {
        navigation: {
            backgroundColor: navigationBackgroundColor,
            minWidth: itemCount * 70 + 40,
        },
        link: {
            color: linkColor,
        },
        indicator: {
            backgroundColor: indicatorBackgroundColor,
            borderColor: shadowAndBorderColor,
            boxShadow: "0px 0px 3px ".concat(shadowAndBorderColor, ", inset 0px 0px 3px ").concat(shadowAndBorderColor),
        },
        indicatorBefore: {
            boxShadow: "1px 10px 0 ".concat(shadowAndBorderColor),
        },
        indicatorAfter: {
            boxShadow: "-1px 10px 0 ".concat(shadowAndBorderColor),
        },
    };
};
var Menu = function (_a) {
    var items = _a.items, indicatorColor = _a.indicatorColor, backgroundColor = _a.backgroundColor, pageColor = _a.pageColor, onChange = _a.onChange, controlledId = _a.controlledId;
    var _b = React.useState(0), activeIndex = _b[0], setActiveIndex = _b[1];
    React.useEffect(function () {
        if (controlledId) {
            setActiveIndex(controlledId);
        }
    }, [controlledId]);
    var styles = getCssStyleOverrides(items.length, indicatorColor, backgroundColor, pageColor);
    var handleItemClick = React.useCallback(function (i) {
        if (!controlledId) {
            setActiveIndex(i);
        }
        if (onChange) {
            onChange(i);
        }
    }, [controlledId, onChange]);
    return (React__default["default"].createElement("div", { className: 'navigation', style: styles.navigation },
        React__default["default"].createElement("ul", null,
            items.map(function (item, index) { return (React__default["default"].createElement("li", { className: "item ".concat(index === activeIndex ? "active" : ""), key: index, onClick: function () {
                    handleItemClick(index);
                } },
                React__default["default"].createElement("span", { className: 'icon' }, item.icon),
                React__default["default"].createElement("span", { className: 'text' }, item.name))); }),
            React__default["default"].createElement("div", { className: 'indicator', style: __assign$1(__assign$1({}, styles.indicator), { transform: "translateX(calc(70px * ".concat(activeIndex, ")") }) },
                React__default["default"].createElement("div", { className: 'before', style: styles.indicatorBefore }),
                React__default["default"].createElement("div", { className: 'after', style: styles.indicatorAfter })))));
};
[
    {
        name: "Home",
        icon: React__default["default"].createElement(IoHomeOutline, null),
    },
    {
        name: "Map",
        icon: React__default["default"].createElement(IoLocationOutline, null),
    },
    {
        name: "Profile",
        icon: React__default["default"].createElement(IoPersonOutline, null),
    },
    {
        name: "Friends",
        icon: React__default["default"].createElement(IoPeopleOutline, null),
    },
    {
        name: "Settings",
        icon: React__default["default"].createElement(IoSettingsOutline, null),
    },
];

exports.FancyButton = FancyButton;
exports.Menu = Menu;
//# sourceMappingURL=index.js.map
