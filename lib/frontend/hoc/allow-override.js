function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable react/function-component-definition */
import React from 'react';
/**
 * @private
 *
 * @classdesc
 * Overrides one of the AdminJS core components when user passes it's name to ComponentLoader
 *
 * If case of being overridden, component receives additional prop: `OriginalComponent`
 *
 * @example
 * new ComponentLoader().override('SidebarFooter', MySidebarFooter)
 */
function allowOverride(OriginalComponent, name) {
  const WrapperComponent = props => {
    let Component = OriginalComponent;

    /**
     * @new in version 6.3
     *
     * This adds support for future theme-specific components via their "theme.bundle.js"
     *
     */
    if (typeof window !== 'undefined') {
      Component = window.AdminJS?.UserComponents?.[name] ?? window.THEME_COMPONENTS?.[name] ?? OriginalComponent;
    }
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      OriginalComponent: OriginalComponent
    }));
  };
  return WrapperComponent;
}
export { allowOverride as default, allowOverride };