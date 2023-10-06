import React, { useState } from "react";
import Modal from "../Modal";

function UseExampleDefault() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Default Modal</button>
      {isModalOpen && (
        <Modal>
          {/* Content for your modal */}
          <h2>Hello, Modal!</h2>
          <p>This is an example of how to use the Modal component from your package.</p>
          <button onClick={closeModal}>Close Modal</button>
          <p>
          If you don't supply the component with a "CloseModal" function, there won't be a close icon in the top right corner to dismiss the modal. In such cases, remember to include a close modal button within your child elements.
          </p>
        </Modal>
      )}
    </div>
  );
}

export default UseExampleDefault;