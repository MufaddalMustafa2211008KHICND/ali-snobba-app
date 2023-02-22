import React, { useState } from 'react'

const Quantity = ({
    onChange
}) => {

    const [value, setValue] = useState(1);

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }

    return (
        <div>Quantity: <input type='number' value={value} min={0} onChange={handleChange} /></div>
    )
}

export default Quantity