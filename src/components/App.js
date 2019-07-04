import React from "react";
import { connect } from "react-redux";
import "./App.css";
import List from "./List";
import AddButton from "./AddButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";

class App extends React.Component {
    
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log("result", result);
    if (!destination) {
        return
    };
    this.props.sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
    );
  };
  render() {
    const { lists } = this.props;
    console.log("render", lists);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Trello</h2>
          <section style={styles.listContainer}>
            {lists.map(list => (
              <List
                key={list.id}
                title={list.title}
                cards={list.cards}
                listId={list.id}
              />
            ))}
            <AddButton list={true} />
          </section>
        </div>
      </DragDropContext>
    );
  }
}
const styles = {
  listContainer: {
    display: "flex"
  }
};

const mapStateToProps = ({ lists }) => ({ lists });
const mapDispatchToProps = { sort };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
