import React from "react";
import { connect } from "react-redux";
import "./App.css";
import List from "./List";
import AddButton from "./AddButton";

class App extends React.Component {
    render(){
        const { lists } = this.props;
        console.log("render", lists);
        return (
            <div className="App">
                <h2>Trello</h2>
                <section style={styles.listContainer}>
                    {lists.map(list => (
                        <List key={list.id} title={list.title} cards={list.cards} listId={list.id} />
                    ))}
                    <AddButton list />
                </section>
            </div>
        );
    }

}
const styles = {
  listContainer: {
    display: "flex"
  }
};

const mapStateToProps = ({ lists }) => ({ lists });

export default connect(mapStateToProps)(App);
