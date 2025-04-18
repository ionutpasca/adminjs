import { useLocation, useNavigate } from 'react-router';
/* eslint-disable no-param-reassign */

import { useMemo } from 'react';
import { useTranslation } from '../hooks/use-translation.js';
import useLocalStorage from './use-local-storage/use-local-storage.js';
const isSelected = (href, location) => {
  const regExp = new RegExp(`${href}($|/)`);
  return !!location.pathname.match(regExp);
};
export function useNavigationResources(resources) {
  const [openElements, setOpenElements] = useLocalStorage('sidebarElements', {});
  const navigate = useNavigate();
  const location = useLocation();
  const {
    translateLabel
  } = useTranslation();
  const enrichResource = useMemo(() => (resource, icon) => ({
    href: resource.href || undefined,
    icon,
    isSelected: isSelected(resource.href, location),
    label: translateLabel(resource.name, resource.id),
    id: resource.id,
    onClick: event => {
      if (resource.href) {
        event.preventDefault();
        navigate(resource.href);
      }
    }
  }), [location, navigate]);

  // grouping resources into parents
  const map = resources
  // first filter out resources which are not visible
  .filter(res => res.href && res.navigation?.show !== false).reduce((memo, resource) => {
    // in case resource has the same name as parent we namespace it wit "resource-""
    const key = resource.navigation?.name || ['resource', resource.name].join('-');
    if (!resource.navigation || resource.navigation.name === null) {
      memo[key] = enrichResource(resource, resource.navigation?.icon);
    } else if (memo[key] && memo[key].elements && resource.navigation?.name) {
      memo[key].label = translateLabel(resource.navigation?.name);
      memo[key].elements?.push?.(enrichResource(resource));
    } else {
      memo[key] = {
        elements: [enrichResource(resource)],
        label: translateLabel(resource.navigation?.name),
        icon: resource.navigation?.icon,
        onClick: () => setOpenElements({
          ...openElements,
          [key]: !openElements[key]
        }),
        isOpen: !!openElements[key]
      };
    }
    return memo;
  }, {});
  return Object.values(map);
}
export default useNavigationResources;