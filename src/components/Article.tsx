import React, { useCallback, useState } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { setUpdatedArticle } from "./../store/actionCreators";

type Props = {
  article: IArticle;
  editArticle: (article: IArticle) => void;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({
  article,
  editArticle,
  removeArticle,
}) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleArticleData = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;
    dispatch(
      setUpdatedArticle({
        ...article,
        id: article.id,
        title: article.title,
        [id]: value,
      })
    );
    setUpdatedArticleBoolean(true);
  };

  const [updatedArticleBoolean, setUpdatedArticleBoolean] = useState(false);

  const updateArticle = (article: IArticle) => {
    editUseCallBack(article);
    setUpdatedArticleBoolean(false);
  };

  const editUseCallBack = useCallback(
    (article: IArticle) => dispatch(editArticle(article)),
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
        <h4>{article.title}</h4>
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
        <textarea
          id="body"
          placeholder="Description"
          onChange={handleArticleData}
          defaultValue={article.body}
        ></textarea>
      </div>
      <button
        onClick={() => updateArticle(article)}
        className="Add-article"
        disabled={!updatedArticleBoolean}
      >
        Edit
      </button>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};
