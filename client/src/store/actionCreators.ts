import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchItems = (article: IArticle) => (dispatch: DispatchType) => {
  axios.get("/api/datas").then((result) => {
    dispatch({
      type: actionTypes.GET_ARTICLES,
      data: result.data,
      article,
    });
  });
};

export const addArticle = (article: IArticle) => (dispatch: DispatchType) => {
  dispatch({
    type: actionTypes.ADD_ARTICLE,
    article,
  });

  axios.post("/api/datas", {
    // id: Math.random(),
    title: article.title,
    body: article.body,
  });

  // POST.THEN
  // axios
  //   .post("/api/datas", {
  //     id: Math.random(),
  //     title: article.title,
  //     body: article.body,
  //   })
  //   .then((result) => {
  //     dispatch({
  //       type: actionTypes.ADD_ARTICLE,
  //       article,
  //       // data: result.data,
  //     });
  //   });
};

// ASSYNC AWAIT
// export const addArticle = values => async (dispatch: DispatchType) => {
//   const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
//   dispatch({ type: CREATE_EVENT, response })
// }

// FIRST VARIANT
// export function addArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.ADD_ARTICLE,
//     article,
//   };
//   return simulateHttpRequest(action);
// }

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  };
  return simulateHttpRequest(action);
}

export function editArticle(
  article: IArticle,
  updatedArticle: IArticle | undefined
) {
  const action: ArticleAction = {
    type: actionTypes.EDIT_ARTICLE,
    article,
    updatedArticle,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
