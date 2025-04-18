function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { CurrencyInput } from '@adminjs/design-system';
import React, { useState } from 'react';
import allowOverride from '../../../hoc/allow-override.js';
const CurrencyInputWrapper = props => {
  const {
    id,
    initial,
    onChange,
    options
  } = props;
  const [value, setValue] = useState(initial);
  const onValueChange = currentValue => {
    setValue(currentValue);
    onChange(currentValue);
  };
  return /*#__PURE__*/React.createElement(CurrencyInput, _extends({
    id: id,
    name: id,
    value: value,
    onValueChange: onValueChange
  }, options));
};
const OverridableCurrencyInputWrapper = allowOverride(CurrencyInputWrapper, 'CurrencyPropertyInputWrapper');
export { OverridableCurrencyInputWrapper as CurrencyInputWrapper, OverridableCurrencyInputWrapper as default };