import React from "react";
import "./modal.scss";

interface IModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export const Modal = (props: IModalProps) => {
  if (!props.isModalOpen) return null;
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header"></div>
        <button onClick={() => props.closeModal()}>Close Modal</button>
      </div>
    </div>
  );
};
