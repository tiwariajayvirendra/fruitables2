import { put, takeLatest } from "redux-saga/effects";
import { ADD_NEW_PRODUCT, DELETE_NEW_PRODUCT, GET_NEW_PRODUCT } from "../constants/products.constant";
import { editProductInFirebase, addProductToFirebase, deleteProductFromFirebase, getProductFromFirebase } from "../services/product.service";
import { addProductError, deleteProductError, editProductSuccess, editProductError, getProductStart, getProductSuccess } from "../actions/product.action";

// Add Product Saga
export function* addProduct({ payload }) {
  try {
    yield addProductToFirebase(payload);
    yield put(getProductStart());
  } catch (error) {
    yield put(addProductError(error.message));
  }
}

// Delete Product Saga
export function* deleteProduct({ payload }) {
  try {
    yield deleteProductFromFirebase(payload);
    console.log("Product deleted:", payload);
    yield put(getProductStart());
  } catch (error) {
    yield put(deleteProductError(error.message));
  }
}

// Get Products Saga
export function* getProduct() {
  try {
    const products = yield getProductFromFirebase();
    yield put(getProductSuccess(products));
  } catch (error) {
    yield put(editProductError(error.message));
  }
}

// Edit Product Saga
export function* editProduct({ payload }) {
  try {
    const updatedProduct = yield editProductInFirebase(payload);
    yield put(editProductSuccess(updatedProduct));
    yield put(getProductStart()); // Refresh products after editing
  } catch (error) {
    yield put(editProductError(error.message));
  }
}

// Root Saga
export function* product() {
  yield takeLatest(ADD_NEW_PRODUCT, addProduct);
  yield takeLatest(GET_NEW_PRODUCT, getProduct);
  yield takeLatest(DELETE_NEW_PRODUCT, deleteProduct);
}
