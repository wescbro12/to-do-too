import React from "react";

export default function TaskItems(props) {
    return (
        <div>
            <li>{props.content}<button onClick={() => props.addToCompleted(props.content)}>Complted</button>
            </li>
        </div>
    )
}