function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Section, ValueGroup } from '@adminjs/design-system';
import { flat } from '../../../../utils/index.js';
import { convertToSubProperty } from './convert-to-sub-property.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useTranslation } from '../../../hooks/index.js';
const Show = props => {
  const {
    property,
    record,
    ItemComponent
  } = props;
  const {
    translateProperty
  } = useTranslation();
  const items = flat.get(record.params, property.path) || [];
  return /*#__PURE__*/React.createElement(ValueGroup, {
    label: translateProperty(property.label, property.resourceId)
  }, /*#__PURE__*/React.createElement(Section, null, (items || []).map((item, i) => {
    const itemProperty = convertToSubProperty(property, i);
    return /*#__PURE__*/React.createElement(ItemComponent, _extends({}, props, {
      key: itemProperty.path,
      property: itemProperty
    }));
  })));
};
export default allowOverride(Show, 'DefaultArrayShowProperty');