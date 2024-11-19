import { all, fork } from "redux-saga/effects";
import { category } from "./category.saga";
import { product } from "./product.saga"; // Ensure correct import name

export function* rootSaga() {
  yield all([
    fork(category),
    fork(product), // Fork the product saga
  ]);
}

export default rootSaga;
