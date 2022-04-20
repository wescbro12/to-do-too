import React from "react";
import TaskItems from "../taskItems/TaskItems";

export default function Completed(props) {

    return (
        <>
            <h3>Completed Tasks:</h3>
            <ul>
                {
                    props.completedItems.map((item, idx) => {
                        return (
                            <li>
                                {item.key}
                                {item}<button>Remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}