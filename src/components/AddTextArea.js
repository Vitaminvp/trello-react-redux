import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Textarea from "@material-ui/core/InputBase/Textarea";
import { Button } from "@material-ui/core";

class AddTextArea extends Component {
  render() {
    const {
      list,
      handleTextareaChange,
      hideForm,
      handleAddList,
      handleAddCard,
      text
    } = this.props;
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
            onBlur={hideForm}
            onChange={e => handleTextareaChange(e)}
            value={text}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={styles.button}
            onMouseDown={list ? handleAddList : handleAddCard} // onMouseDown fires before onBlur
          >
            {buttonTitle}
          </Button>
          <Icon style={styles.close} onClick={hideForm}>close</Icon>
        </div>
      </div>
    );
  }
}
const styles = {
  textArea: {
    resize: "none",
    overflow: "hidden",
    maxWidth: "100%",
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

export default AddTextArea;
