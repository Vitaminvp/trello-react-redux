import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Textarea from "@material-ui/core/InputBase/Textarea";
import { Button } from "@material-ui/core";
import { addList, addCard } from "../actions";
import { connect } from "react-redux";

class AddButton extends Component {
  state = {
    formVisible: false,
    text: ""
  };
  addForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Enter list title ..."
      : "Enter a title for this card ...";
    const buttonTitle = list ? "Add list" : "Add card";
    return (
      <div>
        <Card style={{ display: "flex", flexDirection: "column" }}>
          <Textarea
            style={styles.textArea}
            autoFocus
            placeholder={placeholder}
            onBlur={this.hideForm}
            onChange={this.handleTextareaChange}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={styles.button}
            onMouseDown={list ? this.handleAddList : this.handleAddCard} // onMouseDown fires before onBlur
          >
            {buttonTitle}
          </Button>
          <Icon style={styles.close}>close</Icon>
        </div>
      </div>
    );
  };

  handleAddCard = () => {
    const { text } = this.state;
    if (text) {
      this.props.addCard(this.props.listId, text);
      this.setState({ test: "" });
    }
  };
  handleAddList = () => {
    const { text } = this.state;
    if (text) {
      this.props.addList(text);
      this.setState({ test: "" });
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
  addButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0, 0, 0, 0.15)" : "inherit";
    return (
      <div
        style={{
          ...styles.buttonWrapper,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
        onClick={this.showForm}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };
  render() {
    const { formVisible } = this.state;
    return formVisible ? this.addForm() : this.addButton();
  }
}
const styles = {
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    paddingLeft: 10,
    height: 36,
    width: 272,
    borderRadius: 3
  },
  textArea: {
    resize: "none",
    overflow: "hidden",
    width: "100%",
    border: "none",
    minHeight: 50,
    outline: "none",
    padding: 15
  },
  button: {
    color: "white",
    backgroundColor: "#5aac44"
  },
  close: {
    marginLeft: 10,
    cursor: "pointer"
  },
  formButtonGroup: {
    display: "flex",
    alignItems: "center",
    marginTop: 10
  }
};

const mapDispatchToProps = {
  addList,
  addCard
};

export default connect(
  null,
  mapDispatchToProps
)(AddButton);
