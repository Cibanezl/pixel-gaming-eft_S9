import React, { useState } from 'react';

export default function ProductList({ productos, loading, addToCart, cart }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  if (loading) return <div className="text-center mt-5"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Cargando...</span></div><p className="mt-2">Cargando catálogo...</p></div>;

  // Filtrado de productos por categoría
  const productosFiltrados = categoriaSeleccionada === 'Todas' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaSeleccionada);

  // Obtener categorías únicas dinámicamente para los botones
  const categorias = ['Todas', ...new Set(productos.map(p => p.categoria))];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🎮 Nuestro Catálogo</h2>

      {/* Botones de Filtrado */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {categorias.map(cat => (
          <button
            key={cat}
            className={`btn ${categoriaSeleccionada === cat ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grilla de Productos */}
      <div className="row g-4">
        {productosFiltrados.length === 0 ? (
          <div className="col-12 text-center text-muted"><p>No se encontraron juegos en esta categoría.</p></div>
        ) : (
          productosFiltrados.map((producto) => {
            const inCart = cart.some(item => item.id === producto.id);
            return (
              <div key={producto.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img src={producto.imagen} className="card-img-top" alt={producto.nombre} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{producto.nombre}</h5>
                    <span className="badge bg-secondary mb-2 align-self-start">{producto.categoria}</span>
                    <p className="card-text text-muted small">{producto.descripcion}</p>
                    <h4 className="text-success mt-auto">${producto.precio.toLocaleString('es-CL')}</h4>
                    <button 
                      className={`btn w-100 mt-3 ${inCart ? 'btn-success disabled' : 'btn-primary'}`}
                      onClick={() => !inCart && addToCart(producto)}
                    >
                      {inCart ? '✓ En el carrito' : 'Agregar al Carrito'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}