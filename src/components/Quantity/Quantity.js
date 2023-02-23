import React, { useState } from 'react'
import styles from './Quantity.module.css'

const Quantity = ({
    onChange
}) => {

    const [value, setValue] = useState(1);

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }

    return (
        <div><label>Quantity:</label> <input className={styles.inputSize} type='number' value={value} min={0} onChange={handleChange} /></div>
    )
}

export default Quantity