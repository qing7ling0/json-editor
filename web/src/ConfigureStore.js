'use strict';
 
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';//引入异步操作
import reduxPromiseMiddleware from 'redux-promise';
//引入所有的reducers,切记要在index.js封装下.
import reducers from './reducers/index';

const ReduxBegan = ({dispatch, getState}) => next => action => {
  if (action && action.state !== 1) {
    dispatch({type:action.type, state:1})
  }
  next(action);
}
const ReduxEnd = ({dispatch, getState}) => next => action => {
  if (action && action.state !== 1) {
    action.state = 3
  }
  next(action);
}

const middlewares = [
  ReduxBegan,
  thunk,
  reduxPromiseMiddleware,
  ReduxEnd
];
 
const createSoreWithMiddleware=applyMiddleware(...middlewares)(createStore);
 
//配置store信息
export default function configureStore(initialState){
 
  //创建store
  const store=createSoreWithMiddleware(reducers,initialState);
   
  return store;
}