interface IArticle {
  id: number;
  title: string;
  body: string;
}

type ArticleState = {
  articles: IArticle[];
  updatedArticle: IArticle;
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
