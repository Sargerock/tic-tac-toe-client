import axios from "axios";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {createDriver} from "redux-saga-requests-axios";
import {handleRequests} from "redux-saga-requests";
import {all} from "redux-saga/effects";

import {gameReducer} from "./game/game-reducer";
import {historyReducer} from "./history/history-reducer";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL + "api";

const reducers = combineReducers({
	game: gameReducer,
	history: historyReducer
});

const sagaMiddleware = createSagaMiddleware();

export const {requestsSagas, requestsMiddleware} = handleRequests({
	driver: createDriver(axios),
	promisify: true
});

const middleware = [thunk, ...requestsMiddleware, sagaMiddleware];

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(...middleware),
);

const store = createStore(
	reducers,
	enhancer
);

function* rootSaga() {
	yield all(requestsSagas);
}

sagaMiddleware.run(rootSaga);

export default store;
