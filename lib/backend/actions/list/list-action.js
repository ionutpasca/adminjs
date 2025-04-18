import { flat } from '../../../utils/flat/index.js';
import sortSetter from '../../services/sort-setter/sort-setter.js';
import Filter from '../../utils/filter/filter.js';
import populator from '../../utils/populator/populator.js';
const PER_PAGE_LIMIT = 500;

/**
 * @implements Action
 * @category Actions
 * @module ListAction
 * @description
 * Returns selected Records in a list form
 * @private
 */
export const ListAction = {
  name: 'list',
  isVisible: true,
  actionType: 'resource',
  showFilter: true,
  showInDrawer: false,
  /**
   * Responsible for returning data for all records.
   *
   * To invoke this action use {@link ApiClient#recordAction}
   *
   * @implements Action#handler
   * @memberof module:ListAction
   * @return {Promise<ListActionResponse>} records with metadata
   */
  handler: async (request, response, context) => {
    const {
      query
    } = request;
    const {
      sortBy,
      direction,
      filters = {}
    } = flat.unflatten(query || {});
    const {
      resource,
      _admin
    } = context;
    let {
      page,
      perPage
    } = flat.unflatten(query || {});
    if (perPage) {
      perPage = +perPage > PER_PAGE_LIMIT ? PER_PAGE_LIMIT : +perPage;
    } else {
      perPage = _admin.options.settings?.defaultPerPage ?? 10;
    }
    page = Number(page) || 1;
    const listProperties = resource.decorate().getListProperties();
    const firstProperty = listProperties.find(p => p.isSortable());
    let sort;
    if (firstProperty) {
      sort = sortSetter({
        sortBy,
        direction
      }, firstProperty.name(), resource.decorate().options);
    }
    const filter = await new Filter(filters, resource).populate(context);
    const {
      currentAdmin
    } = context;
    const records = await resource.find(filter, {
      limit: perPage,
      offset: (page - 1) * perPage,
      sort
    }, context);
    const populatedRecords = await populator(records, context);

    // eslint-disable-next-line no-param-reassign
    context.records = populatedRecords;
    const total = await resource.count(filter, context);
    return {
      meta: {
        total,
        perPage,
        page,
        direction: sort?.direction,
        sortBy: sort?.sortBy
      },
      records: populatedRecords.map(r => r.toJSON(currentAdmin))
    };
  }
};
export default ListAction;

/**
 * Response returned by List action
 * @memberof module:ListAction
 * @alias ListAction
 */