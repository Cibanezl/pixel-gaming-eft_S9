import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import ShoppingCart from './components/ShoppingCart';
import CartTotal from './components/CartTotal';

export default function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [vistaActual, setVistaActual] = useState('inicio'); // Manejo de la "página" activa

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}productos.json`)
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(error => console.error('Error cargando JSON:', error));
  }, []);

  const addToCart = (producto) => {
    if (!cart.find(item => item.id === producto.id)) {
      setCart([...cart, producto]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <div className="bg-light min-vh-100 pb-5">
      <Navbar 
        vistaActual={vistaActual} 
        setVistaActual={setVistaActual} 
        cantidadCarrito={cart.length} 
      />

      <main className="container mt-4">
        {vistaActual === 'inicio' ? (
          <div className="row">
            <div className="col-lg-8 mb-4">
              <ProductList 
                productos={productos} 
                loading={loading} 
                addToCart={addToCart} 
                cart={cart} 
              />
            </div>
            <div className="col-lg-4">
              <div className="position-sticky" style={{ top: '20px' }}>
                <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
                <CartTotal cart={cart} clearCart={clearCart} />
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <ContactForm />
            </div>
          </div>
        )}
      </main>

      {/* Footer Básico para cumplir la pauta */}
      <footer className="bg-dark text-white text-center py-3 mt-5 shadow">
        <p className="mb-0">© 2026 PixelGaming Store - Examen Final Desarrollo Frontend I</p>
      </footer>
    </div>
  );
}