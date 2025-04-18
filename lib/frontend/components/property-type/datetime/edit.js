function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { memo } from 'react';
import { DatePicker, FormGroup, FormMessage } from '@adminjs/design-system';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
import { stripTimeFromISO } from './strip-time-from-iso.js';
const formatDate = (date, propertyType) => {
  if (!date) return '';
  if (propertyType !== 'date') return date;
  return `${stripTimeFromISO(date)}T00:00:00`;
};
const Edit = props => {
  const {
    property,
    onChange,
    record
  } = props;
  const value = record.params ? formatDate(record.params[property.path], property.type) : '';
  const error = record.errors && record.errors[property.path];
  const {
    tm
  } = useTranslation();
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: !!error
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(DatePicker, _extends({
    value: value,
    disabled: property.isDisabled,
    onChange: date => {
      onChange(property.path, property.type === 'date' ? stripTimeFromISO(date) ?? date : date);
    },
    propertyType: property.type
  }, property.props)), /*#__PURE__*/React.createElement(FormMessage, null, error && tm(error.message, property.resourceId)));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultDatetimeEditProperty');