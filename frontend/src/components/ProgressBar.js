import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 15,
    };

    const fillerStyles = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: "inherit",
        textAlign: "right",
        transition: 'width 2s ease-in-out',
    };

    const labelStyles = {
        padding: 5,
        color: "white",
        fontWeight: "bold",
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
