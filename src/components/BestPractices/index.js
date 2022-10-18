import React, { useState, useMemo } from 'react'

// Best practices in React

const BestPractices = () => {

    // Mejores practicas al momento de usar effects

    //No usar effects en estos casos ya que podemos usar únicamente el valor del estado
    //al momento de hacer render
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');
    const fullName = firstName + ' ' + lastName;

    return (
        <div>{ fullName }</div>
    )
}

function TodoList({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');
    // ✅ This is fine if getFilteredTodos() is not slow.
    // const visibleTodos = getFilteredTodos(todos, filter);
    //Si está lento se puede optimizar memoizando, para no recalcular
    const visibleTodos = useMemo(() => {
        // ✅ Does not re-run unless todos or filter change
        return getFilteredTodos(todos, filter);
    }, [todos, filter]);

    const getFilteredTodos = (todos, filter) => {
        console.log("Memoizada")
        return [];
    }
}

export default BestPractices