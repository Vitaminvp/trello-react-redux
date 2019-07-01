import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardItem from "./Card";

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        maxWidth: 300,
        padding: 8
    }
};

class List extends Component {
    render() {
        const {title} = this.props;
        return (
            <div style={styles.container}>
                <h4>{title}</h4>
                <CardItem/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(List);
