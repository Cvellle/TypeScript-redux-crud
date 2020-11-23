import React, { useState } from "react";

type Props = {
  saveArticle: (article: IArticle) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle>({
    id: 3,
    title: "",
    body: "",
  });

  const handleArticleData = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;
    setArticle({
      ...article,
      [id]: value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
    setArticle({
      ...article,
      id: article.id + 1,
    });
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input type="hidden" id="id" placeholder="Id" value={article.id} />
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <textarea
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      ></textarea>
      <button disabled={article === undefined}>Add article</button>
    </form>
  );
};
