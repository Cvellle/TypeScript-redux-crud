import * as actionTypes from "./actionTypes";

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "title 1",
      body: "This story follows the...",
    },
    {
      id: 2,
      title: "title 2",
      body: "This story tells about...",
    },
  ],
  updatedArticle: { id: 0, title: "", body: "" },
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.GET_ARTICLES:
      return {
        ...state,
      };

    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: action.article.id,
        title: action.article.title,
        body: action.article.body,
      };
      console.log(action.article.id);
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };
    case actionTypes.SET_UPDATED_ARTICLE:
      const updatedArticle: IArticle = action.article;
      return {
        ...state,
        updatedArticle: updatedArticle,
      };
    case actionTypes.EDIT_ARTICLE:
      const editedArticles: IArticle[] = state.articles.map((article) =>
        article.id !== action.article.id ? article : state.updatedArticle
      );
      return {
        ...state,
        articles: editedArticles,
      };
  }
  return state;
};

export default reducer;
