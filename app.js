//app.js
import express from 'express';

const app = express();
app.use((req, res, next) => {
console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
next();
});

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

app.get('/no-existe', (req, res) => {
res.statusCode = 404;
res.end('Ruta no encontrada');
});

const actividades = [
{ id: 1, nombre: 'Rafting en el río Fonce', tipo: 'agua', precio: 60000 },
{ id: 2, nombre: 'Parapente en el cañón', tipo: 'aire', precio: 180000 },
{ id: 3, nombre: 'Caminata Camino Real a Barichara', tipo: 'tierra', precio: 0 },
{ id: 4, nombre: 'Torrentismo en cascada', tipo: 'agua', precio: 70000 },
];

app.get('/actividades', (req, res) => {
res.json(actividades);
});

app.get('/', (req, res) => {
res.send('API Aventuras San Gil funcionando');
 });

app.get('/actividades', (req, res) => {
console.log('query:', req.query);
const { tipo } = req.query;
if (!tipo) {
return res.json(actividades);
}
const filtradas = actividades.filter((a) => a.tipo === tipo);
res.json(filtradas);
});