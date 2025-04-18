function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import * as DesignSystem from '@adminjs/design-system';
import BasePropertyComponent from '../../property-type/index.js';
export const LayoutElementRenderer = props => {
  const {
    layoutElement,
    resource,
    where,
    record,
    onChange
  } = props;
  const {
    props: layoutProps,
    properties: propertyNames,
    layoutElements: innerLayoutElements,
    component
  } = layoutElement;
  const {
    children,
    ...other
  } = layoutProps;
  const properties = propertyNames.map(name => resource.properties[name]);
  const Component = DesignSystem[component];
  if (!Component) {
    return /*#__PURE__*/React.createElement(DesignSystem.MessageBox, {
      size: "sm",
      message: "Javascript Error",
      variant: "danger",
      py: "xl"
    }, "There is no component by the name of", /*#__PURE__*/React.createElement(DesignSystem.Badge, {
      size: "sm",
      variant: "danger",
      mx: "default"
    }, component), "in @adminjs/design-system. Change", /*#__PURE__*/React.createElement(DesignSystem.Badge, {
      size: "sm",
      variant: "danger",
      mx: "default"
    }, `@${component}`), "to available component like @Header");
  }
  return /*#__PURE__*/React.createElement(Component, other, properties.map(property => /*#__PURE__*/React.createElement(DesignSystem.Box, {
    flexGrow: 1,
    key: property.propertyPath
  }, /*#__PURE__*/React.createElement(BasePropertyComponent, {
    key: property.propertyPath,
    where: where,
    property: property,
    resource: resource,
    record: record,
    onChange: onChange
  }))), innerLayoutElements.map((innerLayoutElement, i) => /*#__PURE__*/React.createElement(LayoutElementRenderer, _extends({}, props, {
    // eslint-disable-next-line react/no-array-index-key
    key: i,
    layoutElement: innerLayoutElement
  }))), children);
};
export default LayoutElementRenderer;