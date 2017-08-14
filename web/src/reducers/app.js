'use strict';

import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  jsonFiles: {},
  appInfo: {
    title:'JSON EDITOR'
  }
};

const app = (state = initialState, action) => {
  let result = {}
  if (action && action.payload) {
    result = action.payload;
  }
  switch(action.type) {
    case ActionTypes.LOAD:
      return Object.assign({}, state, {jsonFiles:result.data});
    default:
    break;
  }
  return Object.assign({}, state);
}
export default app;