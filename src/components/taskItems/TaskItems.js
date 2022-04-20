import React from "react";

export default function TaskItems(props) {
    return (
        <div>
            <li>{props.content}<button onClick={() => props.addToCompleted(props.content)}>Completed</button>
            </li>
        </div>
    )
}