import React, {Component} from 'react';
import Icon from "@material-ui/core/Icon";

class AddButton extends Component {
    render() {
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
                onClick={this.props.showForm}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );
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
        borderRadius: 3,
    }
};

export default AddButton;