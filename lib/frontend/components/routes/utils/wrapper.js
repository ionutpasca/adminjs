function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Box, Drawer, DrawerContent, DrawerFooter } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import allowOverride from '../../../hoc/allow-override.js';
const StyledWrapperWithFilter = styled(Box)`
  & > ${Drawer} {
    border-radius: ${({
  theme
}) => theme.space.sm};
  }

  & > ${DrawerContent} {
    background: ${({
  theme
}) => theme.colors.container};
    padding: ${({
  theme
}) => theme.space.xxl};
    overflow: visible;
  }

  & > ${DrawerFooter} {
    background: ${({
  theme
}) => theme.colors.container};
    padding: 0 ${({
  theme
}) => theme.space.xxl} ${({
  theme
}) => theme.space.xxl};
  }
`;
const StyledWrapper = styled(Box)`
  & ${DrawerContent} {
    background: ${({
  theme
}) => theme.colors.container};
    padding: ${({
  theme
}) => theme.space.xxl};
    overflow: visible;
  }

  & ${DrawerFooter} {
    background: ${({
  theme
}) => theme.colors.container};
    padding: 0 ${({
  theme
}) => theme.space.xxl} ${({
  theme
}) => theme.space.xxl};
  }
`;
const Wrapper = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    children,
    variant,
    color,
    showFilter = false,
    'data-css': dataCss,
    ...rest
  } = props;
  const Component = showFilter ? StyledWrapperWithFilter : StyledWrapper;
  return /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    variant: "transparent",
    mx: "auto",
    "data-css": dataCss || 'styled-wrapper'
  }), children);
};
export default allowOverride(Wrapper, 'RouteWrapper');