import React, { useState } from 'react';

const ChangeAddress = ({ setIsModelOpen, onSave }) => {
    const [newAddress, setNewAddress] = useState("");

    const handleSave = () => {
        if (onSave) onSave(newAddress); // Pass data back if needed
        if (setIsModelOpen) setIsModelOpen(false); // Close modal safely
    };

    return (
        <div>
            <input
                type="text"
                id="newAddress"
                name="newAddress"
                placeholder="Enter new address"
                className="border p-2 w-full mb-4"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
            />
            <div className="flex justify-end">
                <button
                    className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                    onClick={() => setIsModelOpen && setIsModelOpen(false)}
                >
                    Cancel
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={handleSave}
                >
                    Save Address
                </button>
            </div>
        </div>
    );
};

export default ChangeAddress;

