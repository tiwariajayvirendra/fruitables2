import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/root.reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas/root.saga"; // Correct import

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (middleware) => middleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga); // Correct usage
