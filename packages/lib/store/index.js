import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import {
    adminReducer,
    adminSaga
} from 'react-admin';
import { loadState } from './persistedState'

export default ({
    dataProvider,
    history,
    customReducers = {},
    customSagas = []
}) => {
    const rootReducer = combineReducers({
        admin: adminReducer,
        router: connectRouter(history),
        ...customReducers,
    });

    const saga = function* rootSaga() {
        yield all(
            [
                adminSaga(dataProvider, {}),
                ...customSagas
            ].map(fork)
        );
    };
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers =
        (process.env.NODE_ENV === 'development' &&
            typeof window !== 'undefined' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true,
                traceLimit: 25,
            })) ||
        compose;

    let persistedState = loadState()

    if (persistedState?.user?.isAuth) {
        persistedState.user = persistedState.user;
    }

    const store = createStore(
        rootReducer,
        persistedState,
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history),
                // add your own middlewares here
            ),
            // add your own enhancers here
        ),
    );
    sagaMiddleware.run(saga);
    return store;
};
