'use strict';

import {handleActions} from 'redux-actions';
import * as ActionTypes from '../constants/ActionTypes';
import * as actions from '../actions'

const initialState = {
  datas: {},
};

const app = (state = initialState, action) => {
  let result = {}
  if (action && action.payload) {
    result = action.payload;
  }
  switch(action.type) {
    case ActionTypes.LOAD:
      return Object.assign({}, state, {datas:result.data});
  }
  return Object.assign({}, state);
}
export default app;