import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE = 'http://localhost:8080/api/v1';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', quantity: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE}/products`);
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Backend not running. Start Spring Boot server.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_BASE}/products/${editingId}`, formData);
      } else {
        await axios.post(`${API_BASE}/products`, formData);
      }
      setFormData({ name: '', price: '', quantity: '' });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      setError('Failed to save product');
    }
  };

  const handleEdit = (product) => {
    setFormData({ name: product.name, price: product.price, quantity: product.quantity });
    setEditingId(product.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/products/${id}`);
      fetchProducts();
    } catch (err) {
      setError('Failed to delete product');
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>LOKESH PRODUCT API</h1>
          <p>Spring Boot REST API with Layered Architecture</p>
        </header>

        {error && <div className="error">{error}</div>}

        <div className="form-card">
          <h2>{editingId ? 'EDIT PRODUCT' : 'ADD PRODUCT'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
              step="0.01"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              required
            />
            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editingId ? 'UPDATE' : 'ADD'}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({ name: '', price: '', quantity: '' });
                  }}
                >
                  CANCEL
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="products-section">
          <h2>PRODUCTS</h2>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : products.length === 0 ? (
            <div className="empty">No products found</div>
          ) : (
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <h3>{product.name}</h3>
                  <div className="product-details">
                    <p className="price">${product.price}</p>
                    <p className="quantity">Qty: {product.quantity}</p>
                  </div>
                  <div className="product-actions">
                    <button onClick={() => handleEdit(product)} className="btn-edit">
                      EDIT
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="btn-delete">
                      DELETE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
