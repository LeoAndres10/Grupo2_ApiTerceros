const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

  const API_URL = 'https://fakestoreapi.com';


app.get('/products', async (req, res) => {
    const response = await axios.get(API_URL+'/products');
    return res.status(200).json({status: 200, message: "Success", data:response.data});
  
    
  
});
app.post('/products', async (req, res) => {
  const nuevoProducto = {
    title: 'Producto de prueba',
    price: 29.99,
    description: 'Descripción de prueba',
    image: 'https://i.pravatar.cc',
    category: 'electronics'
  };

  try {
    const response = await axios.post(API_URL, nuevoProducto);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error al crear producto');
  }
});
app.put('/productos/:id', async (req, res) => {
  const { id } = req.params;
  const actualizacion = {
    title: 'Producto actualizado'
  };

  try {
    const response = await axios.put(`${API_URL}/${id}`, actualizacion);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error al actualizar producto');
  }
});
app.delete('/productos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    res.json({ mensaje: 'Producto eliminado', data: response.data });
  } catch (error) {
    res.status(500).send('Error al eliminar producto');
  }
});
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
app.get('/', (req, res) => {
  res.send('🎉 API de FakeStore funcionando correctamente');
});
app.get('/', (req, res) => {
  res.send('🎉 API de FakeStore funcionando correctamente');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
