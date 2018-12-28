import {
  SET_ITEMS_LIST,
  SET_ITEM_SELECTED,
  SET_SEARCH_ITEM,
  SET_LOADING,
  SET_ITEM_SELECTED_INFO,
  SET_ITEM_SELECTED_REVIEW_INFO,
  SET_ITEM_CATEGORY,
  SET_ITEMS_LIST_NEW,
  SET_ITEMS_NUMBER,
  SET_ITEM_SORT,
  SET_ITEM_LIST_SEARCH,
  SET_ITEM_SORT_DATA,
  SET_ITEM_LOADING
} from "./types";
import axios from "axios";

export const setItemsAction = (
  userData,
  category = "",
  search,
  sort = "dateTime",
  check
) => dispatch => {
  const params = new URLSearchParams();
  if (search) {
    params.append("name", `${search}`);
  }

  if (sort) {
    params.append("sort", `${sort}`);
  }
  
  params.append("checked", `${check}`);
  params.append("page", `${userData}`);
  params.append("category", `${category}`);

  axios
    .post("https://api.nitikesh.info/chemical/items_limit.php", params)
    .then(items => {
      console.log("item", items.data[0]);
      console.log("item", items.data[1]);

      if (items.data[0].length === 0 && userData == 0 && !check) {
        
        dispatch({
          type: "SET_ITEM_EMPTY",
          payload: []
        });
        return;
      }

      if (category && items.data[0].length !== 0) {
         
        dispatch({
          type: SET_ITEMS_LIST_NEW,
          payload: items.data[0]
        });
      }

      if (items.data[0].length === 0) {
         
        dispatch({
          type: SET_ITEMS_NUMBER,
          payload: false
        });
      } else {
        //  
        dispatch({
          type: SET_ITEMS_NUMBER,
          payload: true
        });
      }
      if (items.data[0].length > 0) {
         
        dispatch({
          type: SET_ITEMS_LIST,
          payload: items.data[0],
          isCategory: category ? true : false
        });
      }

      if (sort !== "dateTime") {
         
        dispatch({
          type: SET_ITEM_SORT_DATA,
          payload: items.data[0]
        });
      }

      if (search) {
         
        dispatch({
          type: SET_ITEM_LIST_SEARCH,
          payload: items.data[0]
        });
      }
      //  
      dispatch({
        type: SET_LOADING,
        payload: false
      });

      if (items.data[0].length === 0 && userData == 0 && !check) {
         ;
        dispatch({
          type: "SET_ITEM_EMPTY",
          payload: []
        });
      }

      setTimeout(() => {
        dispatch({
          type: "SHOW_SEARCH_LOADER",
          payload: false
        });
      }, 1500);
    })
    .catch(error => console.log(error));
};

export const itemSelected = value => dispatch => {
  return dispatch({
    type: SET_ITEM_SELECTED,
    payload: value
  });
};

export const searchItemAction = itemData => dispatch => {
  const params = new URLSearchParams();
  params.append("name", `${itemData}`);

  axios
    .post("https://api.nitikesh.info/chemical/item_info.php", params)
    .then(item => {
      let searchContent = [];
      searchContent.push(item.data);
      console.log(searchContent);

      return dispatch({
        type: SET_SEARCH_ITEM,
        payload: searchContent
      });
    })
    .catch(error => console.log(error));
};

// set loading

export const setLoading = data => dispatch => {
  return dispatch({
    type: SET_LOADING,
    payload: data
  });
};

//set category

export const setCategory = category => dispatch => {
  return dispatch({
    type: SET_ITEM_CATEGORY,
    payload: category
  });
};

//get info about selected item
export const getSelectedItemInfo = userData => dispatch => {
  axios
    .post("https://api.nitikesh.info/chemical/item_info.php", userData)
    .then(info => {
      console.log(info.data.length);

      const itemInfo = {
        name: info.data.name,
        image: info.data.image,
        brand: info.data.brand,
        category: info.data.category,
        star: info.data.star,
        star1: info.data.star1,
        star2: info.data.star2,
        star3: info.data.star3,
        star4: info.data.star4,
        etc_1: info.data.etc_1,
        etc_2: info.data.etc_2,
        etc_3: info.data.etc_3,
        etc_4: info.data.etc_4,
        etc_5: info.data.etc_5,
        code : info.data.code
      };
      dispatch({
        type: SET_ITEM_SELECTED_INFO,
        payload: itemInfo
      });
      dispatch({
        type: SET_ITEM_LOADING,
        payload: false
      });
    })
    .catch(error => console.log(error));
};

// selected item review info
export const setItemSelectedReviewInfo = userData => dispatch => {
  axios
    .post("/api/comment/getProductReviews", { name: userData })
    .then(result => {
      // console.log("hgdduyfgwwue",result.data)
      // result.data.forEach((res)=>{
      //   axios.post('/api/review/addReviewName',{'indexNumber' : res.index_number}).then(res => console.log(res.data))
      // })

      dispatch({
        type: SET_ITEM_SELECTED_REVIEW_INFO,
        payload: result.data.reviews
      });
    });
};

// sort review by likes
export const sortReviewByLike = userData => dispatch => {
  axios
    .post("/api/comment/getReviewByLike", { name: userData })
    .then(result => {
      dispatch({
        type: SET_ITEM_SELECTED_REVIEW_INFO,
        payload: result.data.reviews
      });
    });
};

// sort review by comments
export const sortReviewByComment = userData => dispatch => {
  axios
    .post("/api/comment/getReviewByComment", { name: userData })
    .then(result => {
      dispatch({
        type: SET_ITEM_SELECTED_REVIEW_INFO,
        payload: result.data.reviews
      });
    });
};

// export const sortReviewByComment = userData => dispatch => {
//   axios
//     .post("/api/request/getReviewByComment", { name: userData })
//     .then(result => {
//       dispatch({
//         type: SET_ITEM_SELECTED_REVIEW_INFO,
//         payload: result.data.reviews
//       });
//     });
// };

// selected item info

export const setItemSelectedInfo = itemData => dispatch => {
  return dispatch({
    type: SET_ITEM_SELECTED_INFO,
    payload: itemData
  });
};

// set sort

export const setSort = sort => dispatch => {
  return dispatch({
    type: SET_ITEM_SORT,
    payload: sort
  });
};

// for loading items when it clicked
export const setItemLoading = data => {
  return {
    type: SET_ITEM_LOADING,
    payload: data
  };
};

export const showSearchLoader = data => {
  return {
    type: "SHOW_SEARCH_LOADER",
    payload: data
  };
};

export const setFilterName = data => {
  return {
    type: "SET_ITEM_FILTER",
    payload: data
  };
};

export const setParentCategory = data => {
  return {
    type: "SET_PARENT_CATEGORY",
    payload: data
  };
};

export const setCheckValue = data => {
  return {
    type: "SET_CHECK_VALUE",
    payload: data
  };
};

export const setNullIngredients = () => ({
  type : "SET_INGREDIENT_NULL"
})


export const getProducts = (
  page=0,
  category = "",
  search,
  sort = "dateTime",
  check
) => dispatch => {
  const params = new URLSearchParams();
  if (search) {
    params.append("name", `${search}`);
  }

  if (sort) {
    params.append("sort", `${sort}`);
  }
  
  params.append("checked", `${check}`);
  params.append("page", `${page}`);
  params.append("category", `${category}`);

  axios
    .post("https://api.nitikesh.info/chemical/items_limit.php", params)
    .then(items => {

      if(page > 0){
        dispatch({
          type : "ADD_ITEMS",
          payload : items.data[0]
        })
        return;
      }


        dispatch({
          type : "SET_ITEMS",
          payload : items.data[0]
        })

        setTimeout(() => {
          dispatch({
            type: "SHOW_SEARCH_LOADER",
            payload: false
          });
        }, 1500);
    
    })
    .catch(error => console.log(error));
};
