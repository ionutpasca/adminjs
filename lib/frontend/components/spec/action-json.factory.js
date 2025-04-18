import { factory } from 'factory-girl';
factory.define('ActionJSON', Object, {
  actionType: 'record',
  showInDrawer: true,
  name: factory.sequence('ActionJSON.name', n => `action${n}`),
  label: factory.sequence('ActionJSON.label', n => `action ${n}`),
  showFilter: false,
  showResourceActions: true,
  resourceId: 'resource',
  hideActionHeader: false,
  containerWidth: 1,
  layout: null,
  variant: 'default',
  parent: null,
  hasHandler: true,
  custom: {}
});