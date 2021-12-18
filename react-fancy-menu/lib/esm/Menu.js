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
import React, { useCallback, useEffect, useState, } from "react";
import "./Menu.scss";
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
    var _b = useState(0), activeIndex = _b[0], setActiveIndex = _b[1];
    useEffect(function () {
        if (controlledId) {
            setActiveIndex(controlledId);
        }
    }, [controlledId]);
    var styles = getCssStyleOverrides(indicatorColor, backgroundColor, pageColor, items.length);
    var handleItemClick = useCallback(function (i) {
        if (!controlledId) {
            setActiveIndex(i);
        }
        if (onChange) {
            onChange(i);
        }
    }, [controlledId, onChange]);
    return (React.createElement("div", { className: 'navigation', style: styles.navigation },
        React.createElement("ul", null,
            items.map(function (item, index) { return (React.createElement("li", { className: "item ".concat(index === activeIndex ? "active" : ""), key: index, onClick: function () {
                    handleItemClick(index);
                } },
                React.createElement("span", { className: 'icon' }, item.icon),
                React.createElement("span", { className: 'text' }, item.name))); }),
            React.createElement("div", { className: 'indicator', style: __assign(__assign({}, styles.indicator), { transform: "translateX(calc(70px * ".concat(activeIndex, ")") }) },
                React.createElement("div", { className: 'before', style: styles.indicatorBefore }),
                React.createElement("div", { className: 'after', style: styles.indicatorAfter })))));
};
export default Menu;
