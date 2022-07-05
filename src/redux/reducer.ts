import { combineReducers } from "redux";

import { browserHistory } from '../navigation/history'


  import { createRouterReducer } from '@lagunovsky/redux-react-router'

import app from "./slices/app";

const router = createRouterReducer( browserHistory );

export default combineReducers({
  router,
  app,
  // navigation,
  // feedback,
  // pages,
});

// https://github.com/Development-Person/reduxstarter/blob/master/src/store
