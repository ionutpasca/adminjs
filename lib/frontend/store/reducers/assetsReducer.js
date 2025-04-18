import { ASSETS_INITIALIZE } from '../actions/initialize-assets.js';
export const assetsReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSETS_INITIALIZE:
      return action.data;
    default:
      return state;
  }
};