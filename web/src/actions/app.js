import {createAction} from 'redux-actions';
import * as types from '../constants/ActionTypes';
import config from '../constants/Config.js';
import DataService from '../modules/DataService';

export const Load = createAction(types.LOAD, DataService.Load);