import React, { Component } from "react";

export class Form extends Component {
  state = {
    title: null,
    about: null,
  };

  handleChange = (e) => {
        if (e.target.value) {
            this.setState({[e.target.name]: e.target.value})
        }
  };

  handleSubmitForm = (e) => {
      e.preventDefault();
      const { title, about } = this.state;
      if (title && about) {
          this.props.addArticle({title, about})
      }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <label>
            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              placeholder="Добавьте заголовок"
            />
          </label>
          <br />
          <label>
            <input
              onChange={this.handleChange}
              type="text"
              name="about"
              placeholder="Добавьте текст"
            />
          </label>
          <br />
          <button type="submit">Добавить</button>
        </form>
      </div>
    );
  }
}

export default Form;
