import React from 'react';

export default function Navbar({ vistaActual, setVistaActual, cantidadCarrito }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow">
      <div className="container">
        <a 
          className="navbar-brand fw-bold text-warning" 
          href="#" 
          onClick={(e) => { e.preventDefault(); setVistaActual('inicio'); }}
        >
          🎮 PixelGaming
        </a>
        <div className="d-flex align-items-center gap-2">
          <button 
            className={`btn btn-sm ${vistaActual === 'inicio' ? 'btn-warning' : 'btn-outline-light'}`}
            onClick={() => setVistaActual('inicio')}
          >
            Inicio / Catálogo
          </button>
          <button 
            className={`btn btn-sm ${vistaActual === 'contacto' ? 'btn-warning' : 'btn-outline-light'}`}
            onClick={() => setVistaActual('contacto')}
          >
            Contacto
          </button>
          <button 
            className="btn btn-outline-warning btn-sm position-relative ms-2"
            onClick={() => setVistaActual('inicio')}
          >
            🛒 Carrito
            {cantidadCarrito > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cantidadCarrito}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}