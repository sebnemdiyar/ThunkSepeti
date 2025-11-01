import { createStore, combineReducers, applyMiddleware } from "redux";
import basketReducer from "./reducers/basketreducer";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  basket: basketReducer,
  restaurant: restaurantReducer,
}); // birleştirdik ve ortaya bir rootReducer çıkardık

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// store oluşturduk
