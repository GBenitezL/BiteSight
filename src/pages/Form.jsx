import React, { useState, useEffect } from "react";
import "./CheckboxList.css";
import axios from 'axios';

function CheckboxList() {
    const [items, setItems] = useState([
        { id: 1, label: "American", checked: false },
        { id: 2, label: "Asian", checked: false },
        { id: 3, label: "Brewery", checked: false },
        { id: 4, label: "Delicatessen", checked: false },
        { id: 5, label: "Ethnic", checked: false },
        { id: 6, label: "Healthy", checked: false },
        { id: 7, label: "Italian", checked: false },
        { id: 8, label: "Mexican", checked: false },
        { id: 9, label: "Seafood", checked: false },
        { id: 10, label: "Steakhouse", checked: false },
        { id: 11, label: "Takeout", checked: false },
        { id: 12, label: "Wings", checked: false }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const user_id = localStorage.getItem('user_id');
            if (user_id) {
                try {
                    const response = await axios.get(
                        `https://us-central1-bitesight-858b3.cloudfunctions.net/app/api/users/${user_id}`
                    );
                    const likes = response.data.likes;
                    const initialItems = Object.keys(likes).map((label, index) => ({
                        id: index + 1,
                        label: label,
                        checked: likes[label]
                    }));
                    initialItems.sort((a, b) => a.label.localeCompare(b.label));
                    setItems(initialItems);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchData();
    }, []);

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

    async function handleDoneButtonClick() {
        const likes = items.reduce((likes, item) => {
            likes[item.label] = item.checked;
            return likes;
        }, {});

        const user_id = localStorage.getItem('user_id');
        if (user_id) {
            try {
                const response = await axios.post(
                    `https://us-central1-bitesight-858b3.cloudfunctions.net/app/api/users/${user_id}/likes`,
                    likes
                );
                console.log(response.data);
                alert('Your preferences were updated successfully!');
            } catch (error) {
                console.error(error);
                alert('There was an errow while updating your preferences');
            }
        }
    }

    return (
        <div>
            <div className="checkbox-list-container">
                <h1>Welcome!</h1>
                <div className="checkbox-list">
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
                </div>
                <button className="done-button" onClick={handleDoneButtonClick}>
                    Done
                </button>
            </div>
        </div>
    );
}

export default CheckboxList;