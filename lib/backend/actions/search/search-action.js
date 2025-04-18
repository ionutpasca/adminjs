import { flat } from '../../../utils/flat/index.js';
import Filter from '../../utils/filter/filter.js';

/**
 * @implements Action
 * @category Actions
 * @module SearchAction
 * @description
 * Used to search particular record based on "title" property. It is used by
 * select fields with autocomplete.
 * Uses {@link ShowAction} component to render form
 * @private
 */
export const SearchAction = {
  name: 'search',
  isVisible: false,
  actionType: 'resource',
  /**
   * Search records by query string.
   *
   * To invoke this action use {@link ApiClient#resourceAction}
   * @memberof module:SearchAction
   *
   * @return  {Promise<SearchResponse>}  populated record
   * @implements ActionHandler
   */
  handler: async (request, response, context) => {
    const {
      currentAdmin,
      resource
    } = context;
    const {
      query
    } = request;
    const decorated = resource.decorate();
    const titlePropertyName = request.query?.searchProperty ?? decorated.titleProperty().name();
    const {
      sortBy = decorated.options?.sort?.sortBy || titlePropertyName,
      direction = decorated.options?.sort?.direction || 'asc',
      filters: customFilters = {},
      perPage = 50,
      page = 1
    } = flat.unflatten(query || {});
    const queryString = request.params && request.params.query;
    const queryFilter = queryString ? {
      [titlePropertyName]: queryString
    } : {};
    const filters = {
      ...customFilters,
      ...queryFilter
    };
    const filter = new Filter(filters, resource);
    const records = await resource.find(filter, {
      limit: perPage,
      offset: (page - 1) * perPage,
      sort: {
        sortBy,
        direction
      }
    }, context);
    return {
      records: records.map(record => record.toJSON(currentAdmin))
    };
  }
};
export default SearchAction;

/**
 * Response of a [Search]{@link ApiController#search} action in the API
 * @memberof module:SearchAction
 * @alias SearchResponse
 */