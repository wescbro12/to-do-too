import React from "react";

export default function Completed(props) {

    return (
        <>
            <h3>Completed Tasks:</h3>
            <ul>
                {
                    props.compltedItem.map((item) => {
                        return (
                            <li>
                                {item} <button>Remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}