import React from 'react';

export default function ShoppingCart({ cart = [], removeFromCart }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-header bg-dark text-white fw-bold d-flex justify-content-between align-items-center">
        <span>🛒 Carrito de Compras</span>
        <span className="badge bg-warning text-dark">{cart.length}</span>
      </div>
      <div className="card-body">
        {cart.length === 0 ? (
          <p className="text-muted text-center my-2">El carrito está vacío.</p>
        ) : (
          <ul className="list-group list-group-flush">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center px-0">
                <div>
                  <strong className="d-block">{item.nombre}</strong>
                  <small className="text-muted">${item.precio.toLocaleString('es-CL')}</small>
                </div>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}