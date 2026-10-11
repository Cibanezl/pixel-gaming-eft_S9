import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = formData;

    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    setEnviado(true);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="card shadow p-4 mx-auto my-4" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4 text-primary">📩 Formulario de Contacto</h2>

      {enviado && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          ¡Gracias por tu mensaje! Te responderemos pronto.
          <button type="button" className="btn-close" onClick={() => setEnviado(false)}></button>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Carlos Ibañez"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nombre@ejemplo.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Mensaje</label>
          <textarea
            className="form-control"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu consulta aquí..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-bold">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}