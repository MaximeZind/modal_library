import React, { useState } from "react";
import Modal from "../Modal";

function UseExampleWithForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        closeModal();
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal with form</button>
            {isModalOpen && (
                <Modal
                    closeModal={closeModal}
                    modalBackground="light"
                    maxWidth={500}
                    modalBackgroundColor="lightgrey"
                    iconColor="#333"
                    hoveredIconBackgroundColor="#ccc">
                    {/* Content for your modal */}
                    <h2>Hello, Modal!</h2>
                    <p>This is an example of how to use the Modal component from your package.</p>
                    <p>The background is dark by default, but you can set it to lighty</p>
                    <p>You can change the colors, and put anything you want inside, for instance, a form:</p>
                    <form action=""
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: "10px",
                        }}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" />
                        <button value="submit">Submit</button>
                    </form>
                </Modal>
            )}
        </div>
    );
}

export default UseExampleWithForm;