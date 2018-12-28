import {
  SET_ITEMS_LIST,
  SET_ITEM_SELECTED,
  SET_SEARCH_ITEM,
  SET_ITEM_SELECTED_INFO,
  SET_ITEM_SELECTED_REVIEW_INFO,
  SET_ITEM_CATEGORY,
  SET_ITEMS_LIST_NEW,
  SET_ITEMS_NUMBER,
  SET_ITEM_SORT,
  SET_ITEM_LIST_SEARCH,
  SET_ITEM_SORT_DATA,
  SET_ITEM_LOADING
} from "../actions/types";
import isEmpty from "../utils/isEmpty";

const initialState = {
  items: [],
  loadMore: true,
  itemsFilter: {},
  itemSelected: "",
  itemSelectedInfo: null,
  itemSelectedReviewInfo: [],
  itemSearched: [],
  isSearch: false,
  itemLoading: null,
  showEmpty: false,
  loader : null,
  filterName : "",
  parentCategory : "",
  checkValue : null,
  ingredients : true
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_LIST_NEW:
      return {
        ...state,
        items:
          action.payload[0].length !== 0
            ? [...action.payload[0]]
            : [...state.items],
        showEmpty:  false
      };

    case SET_ITEMS_NUMBER:
      return {
        ...state,
        loadMore: true,
        showEmpty: false
      };

    case SET_ITEMS_LIST:
      return {
        ...state,
        items: [...state.items,...action.payload],
        showEmpty: false
      };

    case SET_ITEM_SELECTED:
      return {
        
        ...state,
        itemSelected: action.payload,
        showEmpty: false
      };

    case SET_ITEM_CATEGORY:
      return {
        ...state,
        itemsFilter: {
          ...state.itemsFilter,
          category: action.payload,
          showEmpty: false
        }
      };

    case SET_ITEM_SORT:
    
      return {
        ...state,
        itemsFilter: {
          ...state.itemsFilter,
          sort: action.payload,
          showEmpty: false
        }
      };

    case SET_ITEM_LIST_SEARCH:
  
      return {
        ...state,
        items: action.payload.length===0 ? state.items : action.payload,
        showEmpty: false
      };

    case SET_ITEM_SORT_DATA:
      
      return {
        ...state,
        items: [...state.items,...action.payload],
        showEmpty:  false
      };

    case SET_SEARCH_ITEM:
      return {
        ...state,
        itemSearched: [...action.payload] || state.itemSearched,
        isSearch: !isEmpty(action.payload[0].name),
        showEmpty: false
      };

    case SET_ITEM_SELECTED_INFO:
      return {
        ...state,
        itemSelectedInfo: action.payload,
        showEmpty: false
      };

    case SET_ITEM_LOADING:
      return {
        ...state,
        itemLoading: action.payload,
        showEmpty: false
      };

    case SET_ITEM_SELECTED_REVIEW_INFO:
      return {
        ...state,
        itemSelectedReviewInfo: isEmpty(action.payload)
          ? []
          : [...action.payload],
        showEmpty: false
      };

    case "SET_ITEM_EMPTY":
      return {
        ...state,
        items: action.payload,
        showEmpty: true
      };

      case "SHOW_SEARCH_LOADER":
      return {
        ...state,
        loader : action.payload
      };

      case "SET_ITEM_FILTER":
      return {
        ...state,
        filterName : action.payload
      };

      case "SET_PARENT_CATEGORY":
      return {
        ...state,
        parentCategory : action.payload
      };

      case "SET_CHECK_VALUE":
      return {
        ...state,
        checkValue : action.payload
      };

      
      case "SET_ITEMS":
      return {
        ...state,
        items : action.payload
      };

      case "ADD_ITEMS":
      return {
        ...state,
        items : [...state.items,...action.payload]
      };

      case "SET_INGREDIENT_NULL":
      return {
        ...state,
       ingredients : null
      };

     

    default:
      return state;
  }
};

export default itemsReducer;
