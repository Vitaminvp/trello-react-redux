import React, { Component } from "react";
import { connect } from "react-redux";
import CardItem from "./Card";
import AddButton from "./AddButton";

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
    const { title, cards } = this.props;
    return (
      <div style={styles.container}>
        <h4>{title}</h4>
        {cards.map(card => (
          <CardItem {...card} key={card.id} />
        ))}
        <AddButton/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(List);
