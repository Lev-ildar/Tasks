import React from 'react'
import Column from "./Column";

export default function List({columns}) {
    return (
        <div className="row">
            { columns.map(column => {
               return <Column key={column.id} {...column}/>
            })}
        </div>
)
}