// components/DaisyCard.tsx
import React from 'react';

export const DaisyCard: React.FC = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placekitten.com/400/200" alt="gatito" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Gatito Adorable</h2>
        <p>Una tarjeta con diseño limpio usando DaisyUI.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Adoptar</button>
        </div>
      </div>
    </div>
  );
};