import React, { useState } from "react";
import Modal from "../lib/Modal";

function UseExampleWithCross() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal with cross</button>
            {isModalOpen && (
                <Modal
                    closeModal={closeModal}>
                    {/* Content for your modal */}
                    <h2>Hello, Modal!</h2>
                    <p>This is an example of how to use the Modal component from your package.</p>
                    <p>
                        If you supply the component with a "CloseModal" function, there will be a close icon in the top right corner to dismiss the modal.
                    </p>
                </Modal>
            )}
        </div>
    );
}

export default UseExampleWithCross;