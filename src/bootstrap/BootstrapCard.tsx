// BootstrapCard.tsx
import React from 'react';

export const BootstrapCard: React.FC = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Título de la tarjeta</h5>
        <p className="card-text">Descripción corta dentro de la tarjeta.</p>
        <a href="#" className="btn btn-primary">Ir a algún lugar</a>
      </div>
    </div>
  );
};