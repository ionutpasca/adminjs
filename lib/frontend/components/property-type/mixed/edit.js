function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Section, FormGroup, FormMessage } from '@adminjs/design-system';
import { PropertyLabel } from '../utils/property-label/index.js';
import { convertToSubProperty } from './convert-to-sub-property.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Edit = props => {
  const {
    property,
    record,
    ItemComponent
  } = props;
  const error = record.errors && record.errors[property.path];
  const {
    tm
  } = useTranslation();
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: !!error
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(Section, property.props, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
    const subPropertyWithPath = convertToSubProperty(property, subProperty);
    return /*#__PURE__*/React.createElement(ItemComponent, _extends({}, props, {
      key: subPropertyWithPath.path,
      property: subPropertyWithPath
    }));
  })), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
export default allowOverride(Edit, 'DefaultMixedEditProperty');