import React, { useState } from 'react';

function SelectMenu({ options, selected, onChange }) {
    const [selectedItem, setSelectedItem] = useState(selected || options[0]);

    const handleSelectChange = (e) => {
        const newValue = e.target.value;
        setSelectedItem(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <select value={selectedItem} onChange={handleSelectChange}>
            {options.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}

export default SelectMenu;

