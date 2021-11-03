import React, { Component } from "react";
import ItemArticle from "./ItemArticle";

const defaultState = [
    {
      id: 1,
      title: "First article title",
      about: "First article about",
    },
    {
      id: 2,
      title: "Second article title",
      about: "Second article about",
    },
]

export class Faq extends Component {
  state = {
    articles: defaultState,
  };

  render() {
    return (
      <div>
        {this.state.articles.map((article) => (
          <ItemArticle id={article.id} article={article} />
        ))}
      </div>
    );
  }
}

export default Faq;
