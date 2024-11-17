import { EDIT_CATEGORY,EDIT_CATEGORY_ERROR,EDIT_CATEGORY_SUCCESS,ADD_NEW_CATEGORY, ADD_NEW_CATEGORY_ERROR, ADD_NEW_CATEGORY_SUCCESS, DELETE_NEW_CATEGORY, DELETE_NEW_CATEGORY_ERROR, DELETE_NEW_CATEGORY_SUCCESS, GET_NEW_CATEGORY, GET_NEW_CATEGORY_ERROR, GET_NEW_CATEGORY_SUCCESS } from "../constants/categories.constant";

export const addCategoryStart = (category) => {
  return {
    type: ADD_NEW_CATEGORY,
    payload: category,
  };
};

export const addCategoryError = (category) => {
    return {
      type: ADD_NEW_CATEGORY_ERROR,
      payload: category,
    };
  };

  export const addCategorySuccess = (category) => {
    return {
      type: ADD_NEW_CATEGORY_SUCCESS,
      payload: category,
    };
  };




  export const getCategoryStart = (category) => {
    return {
      type: GET_NEW_CATEGORY
 
    };
  };
  
  export const getCategoryError = (category) => {
      return {
        type: GET_NEW_CATEGORY_ERROR,
        payload: category,
      };
    };
  
    export const getCategorySuccess = (categories) => {
      return {
        type: GET_NEW_CATEGORY_SUCCESS,
        payload: categories,
      };
    };
    
  





    export const deleteCategoryStart = (category) => {
      return {
        type: DELETE_NEW_CATEGORY,
        payload: category,
      };
    };
    
    export const deleteCategoryError = (category) => {
        return {
          type: DELETE_NEW_CATEGORY_ERROR,
          payload: category,
        };
      };
    
      export const deleteCategorySuccess = (category) => {
        return {
          type: DELETE_NEW_CATEGORY_SUCCESS,
          payload: category,
        };
      };
    

      export const editCategoryStart = (category) => ({
        type: EDIT_CATEGORY,
        payload: category,
      });
      
      export const editCategoryError = (error) => ({
        type: EDIT_CATEGORY_ERROR,
        payload: error,
      });
      
      export const editCategorySuccess = (category) => ({
        type: EDIT_CATEGORY_SUCCESS,
        payload: category,
      });