function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Button, Icon } from '@adminjs/design-system';
import { useTranslation } from '../../../hooks/index.js';
const AddNewItemButton = props => {
  const {
    resource,
    property,
    ...btnProps
  } = props;
  const {
    translateProperty,
    translateButton
  } = useTranslation();
  const label = translateProperty(`${property.path}.addNewItem`, resource.id, {
    defaultValue: translateButton('addNewItem', resource.id)
  });
  return /*#__PURE__*/React.createElement(Button, _extends({
    type: "button",
    variant: "outlined"
  }, btnProps), /*#__PURE__*/React.createElement(Icon, {
    icon: "Plus"
  }), label);
};
export default AddNewItemButton;