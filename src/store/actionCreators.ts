import * as actionTypes from "./actionTypes";

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  };
  return action;
}

export function setUpdatedArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.SET_UPDATED_ARTICLE,
    article,
  };
  return action;
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  };
  return action;
}

export function editArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.EDIT_ARTICLE,
    article,
  };
  return action;
}
