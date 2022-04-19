import React from "react";
import TaskItems from "../taskItems/TaskItems";


export default function Tasks({ inputItem, addToComplted }) {
    return (
        <>
            <h3>To Do Items:</h3>
            <ul>
                {
                    inputItem.map((item, idx) => {
                        return (
                            <TaskItems key={idx} content= {item.title} addToComplted={addToComplted} />
                        )
                    })
                }
            </ul>
        </>
    )
}