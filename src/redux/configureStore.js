import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { modalReducer } from "./Reducers/modal";
import { authReducer } from "./Reducers/auth";
import { postReducer } from "./Reducers/post";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { watcherSaga } from "./Sagas/rootSaga";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  posts: postReducer,
});

const persistRootReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagamiddleware = createSagaMiddleware();

const middlewares = [sagamiddleware];

export const store = createStore(
  persistRootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagamiddleware.run(watcherSaga);

export const persistedStore = persistStore(store);
