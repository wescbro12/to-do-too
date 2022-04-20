import React from "react";
import TaskItems from "../taskItems/TaskItems";


export default function Tasks({ inputItems, addToCompleted }) {
    return (
        <>
            <h3>To Do Items:</h3>
            <ul>
                {
                    Array.isArray(inputItems) && inputItems.map((item, idx) => {
                        return (
                            <TaskItems key={item.key} content={item.entry} addToCompleted={addToCompleted}
                                text={ "Completed"}/>
                        )
                    })
                }
            </ul>
        </>
    )
}