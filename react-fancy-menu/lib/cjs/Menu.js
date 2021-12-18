"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Menu.scss");
var getCssStyleOverrides = function (indicatorColor, backgroundColor, pageColor, itemCount) {
    var INDICATOR_COLOR_DEFAULT = "#95a5ff";
    var BACKGROUND_COLOR_DEFAULT = "#fff";
    var LINK_COLOR_DEFAULT = "#222327";
    return {
        navigation: {
            backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : BACKGROUND_COLOR_DEFAULT,
            minWidth: itemCount * 70 + 40,
        },
        link: {
            color: pageColor !== null && pageColor !== void 0 ? pageColor : LINK_COLOR_DEFAULT,
        },
        indicator: {
            backgroundColor: indicatorColor !== null && indicatorColor !== void 0 ? indicatorColor : INDICATOR_COLOR_DEFAULT,
            borderColor: pageColor !== null && pageColor !== void 0 ? pageColor : "transparent",
            boxShadow: "0px 0px 3px ".concat(pageColor !== null && pageColor !== void 0 ? pageColor : "transparent", ", inset 0px 0px 3px ").concat(pageColor !== null && pageColor !== void 0 ? pageColor : "transparent"),
        },
        indicatorBefore: {
            boxShadow: "1px 10px 0 ".concat(pageColor !== null && pageColor !== void 0 ? pageColor : "transparent"),
        },
        indicatorAfter: {
            boxShadow: "-1px 10px 0 ".concat(pageColor !== null && pageColor !== void 0 ? pageColor : "transparent"),
        },
    };
};
var Menu = function (_a) {
    var items = _a.items, indicatorColor = _a.indicatorColor, backgroundColor = _a.backgroundColor, pageColor = _a.pageColor, onChange = _a.onChange, controlledId = _a.controlledId;
    var _b = (0, react_1.useState)(0), activeIndex = _b[0], setActiveIndex = _b[1];
    (0, react_1.useEffect)(function () {
        if (controlledId) {
            setActiveIndex(controlledId);
        }
    }, [controlledId]);
    var styles = getCssStyleOverrides(indicatorColor, backgroundColor, pageColor, items.length);
    var handleItemClick = (0, react_1.useCallback)(function (i) {
        if (!controlledId) {
            setActiveIndex(i);
        }
        if (onChange) {
            onChange(i);
        }
    }, [controlledId, onChange]);
    return (react_1.default.createElement("div", { className: 'navigation', style: styles.navigation },
        react_1.default.createElement("ul", null,
            items.map(function (item, index) { return (react_1.default.createElement("li", { className: "item ".concat(index === activeIndex ? "active" : ""), key: index, onClick: function () {
                    handleItemClick(index);
                } },
                react_1.default.createElement("span", { className: 'icon' }, item.icon),
                react_1.default.createElement("span", { className: 'text' }, item.name))); }),
            react_1.default.createElement("div", { className: 'indicator', style: __assign(__assign({}, styles.indicator), { transform: "translateX(calc(70px * ".concat(activeIndex, ")") }) },
                react_1.default.createElement("div", { className: 'before', style: styles.indicatorBefore }),
                react_1.default.createElement("div", { className: 'after', style: styles.indicatorAfter })))));
};
exports.default = Menu;
