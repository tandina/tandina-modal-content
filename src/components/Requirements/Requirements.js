import React, { useState } from "react";

import ModalContent from "../ModalContent/ModalContent";

import "./styles.css";

export const Requirements = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <p>
        this page is a template of your project, you need to import the modal
        component and use it, dont forget to link your function to my anonymous
        empty props function
      </p>

      <p>
        in this exemple we use the modal to confirm a form validation when every
        input is correct, assuming you already have a function to handlesubmit
        when evey field is correct, this modul will show up
      </p>
      <div className="btn-container">
        <button
          className="sub-btn modal-close"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <ModalContent
        showModal={showModal}
        onClose={handleCloseModal}
        message="Employé ajouté avec succès !"
      />
    </>
  );
};
