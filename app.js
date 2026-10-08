// app.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.use((req, res, next) => {
console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
next();
});

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

app.get('/no-existe', (req, res) => {
res.statusCode = 404;
res.end('Ruta no encontrada');
});
