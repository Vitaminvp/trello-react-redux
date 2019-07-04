import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";

class CardItem extends Component {
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
  }
};
export default CardItem;
