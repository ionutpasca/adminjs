function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { PhoneInput, FormGroup } from '@adminjs/design-system';
import React, { useCallback } from 'react';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
const Filter = props => {
  const {
    onChange,
    property,
    filter
  } = props;
  const handleChange = useCallback(value => {
    onChange(property.path, value);
  }, []);
  return /*#__PURE__*/React.createElement(FormGroup, {
    variant: "filter"
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property,
    filter: true
  }), /*#__PURE__*/React.createElement(PhoneInput, _extends({
    id: property.path,
    inputProps: {
      name: `filter-${property.path}`
    },
    onChange: handleChange,
    value: filter[property.path]
  }, property.props)));
};
export default allowOverride(Filter, 'DefaultPhoneFilterProperty');