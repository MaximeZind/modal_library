import React from "react";
import Modal from "../Modal";

function UseExample() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        {isModalOpen && (
          <Modal
            closeModal={closeModal}
            maxWidth={500}
            modalBackgroundColor="#fff"
            iconColor="#333"
            hoveredIconBackgroundColor="#ccc"
          >
            {/* Content for your modal */}
            <h2>Hello, Modal!</h2>
            <p>This is an example of how to use the Modal component from your package.</p>
          </Modal>
        )}
      </div>
    );
  }

  export default UseExample;