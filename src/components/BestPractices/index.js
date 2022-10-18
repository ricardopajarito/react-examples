import React, { useState } from 'react'

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

export default BestPractices