import React, { useCallback, useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  article: IArticle;
  editArticle: (
    article: IArticle,
    updatedArticle: IArticle | undefined
  ) => void;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({
  article,
  editArticle,
  removeArticle,
}) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [updatedArticle, setUpdatedArticle] = useState<IArticle | undefined>();

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    // const { id, value } = e.target;
    setUpdatedArticle({
      ...article,
      id: article.id,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const updateArticle = (
    article: IArticle,
    updatedArticle: IArticle | undefined
  ) => {
    editUseCallBack(article, updatedArticle);
  };

  const editUseCallBack = useCallback(
    (article: IArticle, updatedArticle: IArticle | undefined) =>
      dispatch(editArticle(article, updatedArticle)),
    [dispatch, editArticle]
  );

  const deleteArticle = useCallback(
    (article: IArticle) => {
      dispatch(removeArticle(article));
    },
    [dispatch, removeArticle]
  );

  return (
    <div className="Article">
      <div>
        <p>{article.id}</p>
      </div>
      <div>
        <p>{article.title}</p>
      </div>
      <div>
        <p>{article.body}</p>
      </div>
      <div>
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={handleArticleData}
          defaultValue={article.title}
        />
        <input
          type="text"
          id="body"
          placeholder="Description"
          onChange={handleArticleData}
          defaultValue={article.body}
        />
      </div>
      <button
        onClick={() => updateArticle(article, updatedArticle)}
        className="Add-article"
        disabled={updatedArticle === undefined ? true : false}
      >
        Edit
      </button>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};
