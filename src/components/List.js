import React, { Component } from "react";
// import { connect } from "react-redux";
import CardItem from "./Card";
import AddButton from "./AddButton";
import { Droppable } from "react-beautiful-dnd";

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    maxWidth: 400,
    minWidth: 300,
    padding: 8,
    marginRight: 10,
    height: "100%"
  }
};

class List extends Component {
  render() {
    const { title, cards, listId } = this.props;
    return (
      <Droppable droppableId={String(listId)}>
        {provided => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={styles.container}
          >
            <h4>{title}</h4>
            {cards.map((card, index) => (
              <CardItem {...card} key={card.id} listId={listId} id={card.id} index={index} />
            ))}
            <AddButton listId={listId} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

// function mapStateToProps(state) {
//   return {};
// }

// export default connect(mapStateToProps)(List);
export default List;
