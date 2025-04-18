import { expect } from 'chai';
import { factory } from 'factory-girl';
import '../../../spec/record-json.factory.js';
import '../../../spec/action-json.factory.js';
import getBulkActionsFromRecords from './get-bulk-actions-from-records.js';
describe('getBulkActionsFromRecords', function () {
  context('records with 2 bulk actions', function () {
    let actions = [];
    let records;
    it('returns array of uniq bulk actions', async function () {
      actions = [await factory.build('ActionJSON', {
        name: 'bulkAction1',
        actionType: 'bulk'
      }), await factory.build('ActionJSON', {
        name: 'bulkAction2',
        actionType: 'bulk'
      })];
      records = await factory.buildMany('RecordJSON', 5, {
        bulkActions: actions
      });
      expect(getBulkActionsFromRecords(records)).to.deep.equal(actions);
    });
  });
});