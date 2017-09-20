import {
   createStore,
   combineReducers,
   applyMiddleware
} from 'redux';

import ReduxThunk from 'redux-thunk';

import * as dataContent from './data/content';

const DEFAULT_STATE = {
   data: {
      content: dataContent.DEFAULT_STATE
   }
};

const reducer = combineReducers({
   data: combineReducers({
      content: dataContent.reducer
   })
});

export default createStore(
   reducer,
   DEFAULT_STATE,
   applyMiddleware(
      ReduxThunk
   )
);
