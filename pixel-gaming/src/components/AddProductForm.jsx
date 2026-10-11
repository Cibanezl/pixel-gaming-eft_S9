import React, { useState } from 'react';

const AddProductForm = ({ agregarAlCatalogo }) => {

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !precio) return;

    const nuevoJuego = {
      id: Date.now(),
      nombre: nombre,
      precioNormal: Number(precio) + 5000,
      precioOferta: Number(precio),
      descripcion: "Juego agregado dinámicamente al catálogo.",
      imagen: imagen || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=250&h=150&fit=crop"
    };

    
    agregarAlCatalogo(nuevoJuego);

    setNombre('');
    setPrecio('');
    setImagen('');
  };

  return (
    <div className="form-card">
      <h3>➕ Publicar Nuevo Juego</h3>
      <form onSubmit={handleSubmit} className="add-form">
        <input 
          type="text" 
          placeholder="Nombre del juego" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Precio Oferta ($)" 
          value={precio} 
          onChange={(e) => setPrecio(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="URL Imagen (opcional)" 
          value={imagen} 
          onChange={(e) => setImagen(e.target.value)} 
        />
        <button type="submit" className="btn-guardar">
          Agregar al Catálogo
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;