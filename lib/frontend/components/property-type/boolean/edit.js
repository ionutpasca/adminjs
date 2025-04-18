function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { memo } from 'react';
import { CheckBox, FormGroup, FormMessage } from '@adminjs/design-system';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const parseValue = value => !(!value || value === 'false');
const Edit = props => {
  const {
    property,
    onChange,
    record
  } = props;
  const value = parseValue(record.params && record.params[property.path]);
  const error = record.errors && record.errors[property.path];
  const {
    tm
  } = useTranslation();
  const handleChange = () => {
    if (!property.isDisabled) {
      onChange(property.path, !value);
    }
  };
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: !!error
  }, /*#__PURE__*/React.createElement(CheckBox, _extends({
    id: property.path,
    name: property.path,
    onChange: handleChange,
    checked: value,
    disabled: property.isDisabled
  }, property.props)), /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property,
    props: {
      inline: true
    }
  }), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultBooleanEditProperty');