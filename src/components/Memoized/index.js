import { useState, useMemo } from "react";

// useMemo devuelve un valor memorizado si es que no hay cambio
const MemoizedValue = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    console.time('calculation time');
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    // const calculation = expensiveCalculation(count);
    console.timeEnd('calculation time');

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    const showCount = () => {
        console.log("calculation: ", calculation);
    }

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <button onClick={showCount}>Mostrar count</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

// Examples
// function TodoList({ todos, filter }) {
//     const [newTodo, setNewTodo] = useState('');
//     // ✅ This is fine if getFilteredTodos() is not slow.
//     // const visibleTodos = getFilteredTodos(todos, filter);
//     //Si está lento se puede optimizar memoizando, para no recalcular
//     const visibleTodos = useMemo(() => {
//         // ✅ Does not re-run unless todos or filter change
//         return getFilteredTodos(todos, filter);
//     }, [todos, filter]);

//     const getFilteredTodos = (todos, filter) => {
//         console.log("Memoizada")
//         return [];
//     }
// }

export default MemoizedValue;