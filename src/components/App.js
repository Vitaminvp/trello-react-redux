import React from "react";
import { connect } from "react-redux";
import "./App.css";
import List from "./List";
import AddButton from "./AddButton";

function App({ lists }) {
  return (
    <div className="App">
      <h2>Trello</h2>
      <section style={styles.listContainer}>
        {lists.map(list => (
          <List key={list.id} title={list.title} cards={list.cards} />
        ))}
        <AddButton list/>
      </section>
    </div>
  );
}
const styles = {
  listContainer: {
    display: "flex"
  }
};

function mapStateToProps(state) {
  return { lists: state.lists };
}

export default connect(mapStateToProps)(App);
