function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useMemo } from 'react';
import { BasePropertyComponent } from './base-property-component.js';
/**
 * This component is the same as `BasePropertyComponent` but it will not render
 * custom components. Use this in your custom components to render the default
 * property component.
 *
 * This is useful if you want your custom component to appear custom only for
 * specific `where` value and default for all others.
 */
const CleanPropertyComponent = props => {
  const {
    property
  } = props;
  const cleanProperty = useMemo(() => ({
    ...property,
    components: {}
  }), [property]);
  return /*#__PURE__*/React.createElement(BasePropertyComponent, _extends({}, props, {
    property: cleanProperty
  }));
};
export default CleanPropertyComponent;