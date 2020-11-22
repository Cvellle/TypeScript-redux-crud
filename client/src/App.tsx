import * as React from "react";
import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import axios from "axios";

import "./styles.css";
import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import {
  addArticle,
  removeArticle,
  editArticle,
  fetchItems,
} from "./store/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const articles: readonly IArticle[] | any = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();

  const fetchArticles = React.useCallback(
    (article: IArticle) => dispatch(fetchItems),
    [dispatch, addArticle]
  );

  useEffect(() => {
    dispatch(fetchItems);
  }, [articles]);

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch, addArticle]
  );

  // const saveArticle = (title, body) => {
  // let currentIds = this.state.data.map(data => data.id);
  // let idToBeAdded = 0;
  // while (currentIds.includes(idToBeAdded)) {
  //   ++idToBeAdded;
  // }

  //   axios.post("/api/datas", {
  //     id: Number(11),
  //     title: "String",
  //     body: "String",
  //   });
  // };

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle | any) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
          editArticle={editArticle}
        />
      ))}
    </main>
  );
};

export default App;
