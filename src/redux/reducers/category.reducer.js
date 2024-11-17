import { EDIT_CATEGORY,EDIT_CATEGORY_SUCCESS,EDIT_CATEGORY_ERROR,ADD_NEW_CATEGORY , ADD_NEW_CATEGORY_SUCCESS, ADD_NEW_CATEGORY_ERROR, GET_NEW_CATEGORY, GET_NEW_CATEGORY_SUCCESS, GET_NEW_CATEGORY_ERROR, DELETE_NEW_CATEGORY, DELETE_NEW_CATEGORY_SUCCESS, DELETE_NEW_CATEGORY_ERROR} from "../constants/categories.constant";

const initialState={
    categories:["sjsjjs"]
}
export const categoryReducer=(state=initialState,action)=>{
   switch(action.type){
    case ADD_NEW_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
        
      case ADD_NEW_CATEGORY_SUCCESS:
        return {
          ...state,
          categories: [...state.categories, action.payload], 
        };
        
      case ADD_NEW_CATEGORY_ERROR:
        return {
          ...state,
  
        };



        case GET_NEW_CATEGORY:
          return {
            ...state,
            // categories: [...state.categories, action.payload],
          };
          
          case GET_NEW_CATEGORY_SUCCESS:
            console.log("Categories being set in state:", action.payload);
            return {
              ...state,
              categories: action.payload, 
            };
          
        case GET_NEW_CATEGORY_ERROR:
          return {
            ...state,
    
          };
          case DELETE_NEW_CATEGORY:
            return {
                ...state,
            };
        
        case DELETE_NEW_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload), 
            };

        case DELETE_NEW_CATEGORY_ERROR:
            return {
                ...state,
            };

            case EDIT_CATEGORY:
              return {
                ...state,
              };
        
            case EDIT_CATEGORY_SUCCESS:
              return {
                ...state,
                categories: state.categories.map(category =>
                  category.id === action.payload.id ? action.payload : category
                ),
              };
        
            case EDIT_CATEGORY_ERROR:
              return {
                ...state,
              };
        
    default: return state;
   }
}