// BootstrapForm.tsx
import React from 'react';

export const BootstrapForm: React.FC = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo electrónico</label>
        <input type="email" className="form-control" id="email" placeholder="nombre@correo.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">Mensaje</label>
        <textarea className="form-control" id="mensaje" rows={3}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};