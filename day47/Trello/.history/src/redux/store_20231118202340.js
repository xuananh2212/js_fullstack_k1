// kho chứa store
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { trell }
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
     {

     }
)
console.log([rootReducer]);

//  composeWithDevTools(applyMiddleware(thunk)
export const store = createStore(rootReducer,
     composeWithDevTools(applyMiddleware(thunk))
);
console.log(store);