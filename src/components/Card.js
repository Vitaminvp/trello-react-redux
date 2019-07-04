import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";
import Icon from "@material-ui/core/Icon";
import { deleteCard, editCard, sort } from "../actions";
import { connect } from "react-redux";

class CardItem extends Component {
  setIsEditing() {}
  handleDeleteCard = () => {
    const { id, listId, deleteCard } = this.props;
    console.log("id, listId, deleteCard", id, listId, deleteCard);
    deleteCard(id, listId);
  };
  render() {
    const { text, id, index } = this.props;
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Card style={styles.container}>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "10px"
                  }}
                >
                  <Icon
                    onMouseDown={() => this.setIsEditing(true)}
                    fontSize="small"
                    style={styles.edit}
                  >
                    edit
                  </Icon>
                  <Icon
                    fontSize="small"
                    onClick={this.handleDeleteCard}
                    style={styles.delete}
                  >
                    delete
                  </Icon>
                </div>

                <Typography variant="body2" component="p">
                  {text}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    );
  }
}
const styles = {
  container: {
    marginBottom: 10
  },
  edit: {
    cursor: "pointer",
    color: "#dfe3e6",
    "&:hover": {
      color: "#65686a"
    }
  },
  delete: {
    cursor: "pointer",
    color: "#65686a",
    marginLeft: 5,
    "&:hover": {
      color: "#65686a!important"
    }
  }
};

const mapStateToProps = () => ({});
const mapDispatchToProps = { sort, deleteCard, editCard };

export default connect(
  null,
  mapDispatchToProps
)(CardItem);
