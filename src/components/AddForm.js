import React, { Component } from "react";
import { addList, addCard } from "../actions";
import { connect } from "react-redux";
import AddButton from "./AddButton";
import AddTextArea from "./AddTextArea";

class AddForm extends Component {
  state = {
    formVisible: false,
    text: ""
  };

  handleAddCard = () => {
    const { text } = this.state;
    if (text) {
      this.props.addCard(this.props.listId, text);
      this.setState({ text: "" });
    }
  };

  handleAddList = () => {
    const { text } = this.state;
    if (text) {
      this.props.addList(text);
      this.setState({ text: "" });
    }
  };

  showForm = () => {
    this.setState({ formVisible: true });
  };

  hideForm = () => {
    this.setState({ formVisible: false });
  };

  handleTextareaChange = ({ target: { value } }) => {
    this.setState(
      {
        text: value
      },
      () => console.log(this.state.text)
    );
  };

  render() {
    const { formVisible } = this.state;
    return formVisible ? (
      <AddTextArea
        list={this.props.list}
        handleTextareaChange={this.handleTextareaChange}
        hideForm={this.hideForm}
        handleAddList={this.handleAddList}
        handleAddCard={this.handleAddCard}
      />
    ) : (
      <AddButton list={this.props.list} showForm={this.showForm} />
    );
  }
}

const mapDispatchToProps = {
  addList,
  addCard
};

export default connect(
  null,
  mapDispatchToProps
)(AddForm);
