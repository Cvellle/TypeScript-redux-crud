import * as actionTypes from "./actionTypes";

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "title 1",
      body: "body 1",
    },
    {
      id: 2,
      title: "title 2",
      body: "body 2",
    },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.GET_ARTICLES:
      return {
        ...state,
        articles: action.data,
      };
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(), // not really unique but it's just an example
        title: action.article.title,
        body: action.article.body,
        // message: action.article.message,
      };
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
    case actionTypes.EDIT_ARTICLE:
      const editedArticles: IArticle[] = state.articles.map((article) =>
        article.id !== action.article.id ? article : action.updatedArticle
      );
      return {
        ...state,
        articles: editedArticles,
      };
  }
  return state;
};

export default reducer;
