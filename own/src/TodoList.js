import React from 'react'
import Todo from './Todo'

export default function TodoList({ todolist }) {
    return (
        todolist.map(thetodo => {
            return <Todo key = {thetodo.id} todo={thetodo} />
        })
    )
}
