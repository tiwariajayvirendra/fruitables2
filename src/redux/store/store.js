import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/root.reducer";
import createSagaMiddleware from 'redux-saga'
import { root } from "../sagas/root.saga";
const sagaMiddleware=createSagaMiddleware();
export const store= configureStore({
    reducer:
        rootReducer
    ,
    middleware:(middleware)=> middleware().concat(sagaMiddleware)
})

sagaMiddleware.run(root);