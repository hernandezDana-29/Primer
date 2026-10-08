// app.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.send('API Aventuras San Gil funcionando');
});
app.get('/hola', (req, res) => {
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify([{ Mensaje:'Encontrado' }]));
});
app.listen(PORT, () => {
console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

