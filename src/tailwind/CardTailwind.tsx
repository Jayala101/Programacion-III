import React from 'react';

export const CardTailwind: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black">
      <img className="w-full" src="https://media.istockphoto.com/id/1468907072/photo/woman-standing-on-top-of-the-mountain-enjoying-beautiful-view.jpg?s=612x612&w=0&k=20&c=8XQ6_SXJAeX1Ah8nlISnAMcG67FbGgFxuVOR4tGQyiE=" alt="Imagen" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Título de la tarjeta</div>
        <p className="text-gray-700 text-base">
          Esta es una descripción breve dentro de una tarjeta estilizada con Tailwind.
        </p>
      </div>
    </div>
  );
};