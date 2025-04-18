function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { Label } from '@adminjs/design-system';
import React from 'react';
import { PropertyDescription } from '../property-description/index.js';
import allowOverride from '../../../../hoc/allow-override.js';
import { useTranslation } from '../../../../hooks/index.js';
const PropertyLabel = props => {
  const {
    property,
    props: labelProps,
    filter = false
  } = props;
  const {
    translateProperty
  } = useTranslation();
  if (property.hideLabel) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Label, _extends({
    htmlFor: filter ? ['filter', property.path].join('-') : property.path,
    required: !filter && property.isRequired
  }, labelProps), translateProperty(property.label, property.resourceId), property.description && /*#__PURE__*/React.createElement(PropertyDescription, {
    property: property
  }));
};
const OverridablePropertyLabel = allowOverride(PropertyLabel, 'PropertyLabel');
export { OverridablePropertyLabel as default, OverridablePropertyLabel as PropertyLabel };