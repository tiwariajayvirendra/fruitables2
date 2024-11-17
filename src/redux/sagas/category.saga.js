import { put, takeLatest } from "redux-saga/effects";
import { ADD_NEW_CATEGORY, DELETE_NEW_CATEGORY, GET_NEW_CATEGORY } from "../constants/categories.constant";
import { editCategoryInFirebase,addCategoryToFirebase, deleteCategoryFromFirebase, getCategoryFromFirebase } from "../services/categories.service";
import { addCategoryError,deleteCategoryError,editCategorySuccess,editCategoryError, getCategoryStart, getCategorySuccess } from "../actions/category.action";


export function* addCategory({ payload }) {
  try{
    yield addCategoryToFirebase(payload);
    yield put(getCategoryStart())
  }
 catch(error){
  yield put(addCategoryError(error.message))
 }
}
export function* deleteCategory({ payload }) {
  try{ yield deleteCategoryFromFirebase(payload);
    console.log("in del cat saga")
    yield put(getCategoryStart())}
    catch(error){
      yield put(deleteCategoryError(error.message))
    }
 
}

export function* getCategory(){
  const categories=yield getCategoryFromFirebase()
  yield put(getCategorySuccess(categories))
}
export function* editCategory({ payload }) {
  try {
    const updatedCategory = yield editCategoryInFirebase(payload);
    yield put(editCategorySuccess(updatedCategory));
    yield put(getCategoryStart()); // Refresh categories after editing
  } catch (error) {
    yield put(editCategoryError(error.message));
  }
}

export function* category(){
yield takeLatest(ADD_NEW_CATEGORY,addCategory)
yield takeLatest(GET_NEW_CATEGORY,getCategory)
yield takeLatest(DELETE_NEW_CATEGORY,deleteCategory)
}