// components/DaisyModal.tsx
import React, { useRef } from 'react';

export const DaisyModal: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <button className="btn btn-accent" onClick={openModal}>
        Abrir Modal
      </button>

      <dialog ref={modalRef} id="my_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hola!</h3>
          <p className="py-4">Este es un modal DaisyUI funcional.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
