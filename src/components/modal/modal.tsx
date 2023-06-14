import React, { useState } from "react";
import "./modal.scss";
import modal from "../../store/modal";
import { observer } from "mobx-react-lite";

interface IModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export const Modal = observer((props: IModalProps) => {
  if (!props.isModalOpen) return null;
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">{modal.modalHeader}</div>
        <input
          placeholder="Task name"
          onChange={(evt) => {
            modal.taskName = evt.target.value;
          }}
        ></input>
        <input
          placeholder="Task content"
          onChange={(evt) => {
            modal.taskContent = evt.target.value;
          }}
        ></input>
        <button onClick={() => modal.modalAction()}>Add</button>
        <button onClick={() => props.closeModal()}>Close Modal</button>
      </div>
    </div>
  );
});
