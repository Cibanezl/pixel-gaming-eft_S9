import React from 'react';

export default function CartTotal({ cart = [], clearCart }) {
  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  if (cart.length === 0) return null;

  return (
    <div className="card shadow-sm p-3 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fw-bold fs-5">Total:</span>
        <span className="fw-bold fs-4 text-success">${total.toLocaleString('es-CL')}</span>
      </div>
      <button 
        className="btn btn-success w-100 fw-bold mb-2"
        onClick={() => alert('¡Gracias por tu compra en PixelGaming!')}
      >
        Finalizar Compra
      </button>
      <button 
        className="btn btn-outline-secondary btn-sm w-100"
        onClick={clearCart}
      >
        Vaciar Carrito
      </button>
    </div>
  );
}