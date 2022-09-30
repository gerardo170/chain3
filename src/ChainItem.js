import React from "react";

function ChainItem(props) {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { ChainItem };