import React, { useState } from "react";
import "./CheckboxList.css";

function CheckboxList() {
    const [items, setItems] = useState([
        { id: 1, label: "Mexican", checked: true },
        { id: 2, label: "Wings", checked: true },
        { id: 3, label: "Italian", checked: true },
        { id: 4, label: "Healthy", checked: false },
        { id: 5, label: "Sweet", checked: false }
    ]);

    function handleCheckboxChange(id) {
        const newItems = items.map(item => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };
            } else {
                return item;
            }
        });
        setItems(newItems);
    }

    function handleDoneButtonClick() {
        const checkedItems = items.filter(item => item.checked);
        console.log(checkedItems);
    }

    return (
        <div>
            <div className="checkbox-list-container">
                <h1>Welcome!</h1>
                {items.map(item => (
                    <div key={item.id} className="checkbox-list-item">
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleCheckboxChange(item.id)}
                        />
                        <label>{item.label}</label>
                    </div>
                ))}
                <button className="done-button" onClick={handleDoneButtonClick}>
                    Done
                </button>
            </div>
        </div>
    );
}

export default CheckboxList;