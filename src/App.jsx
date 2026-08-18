// src/App.jsx
import Producto from "./components/Producto";
import "./App.css";

// Importar imágenes guardadas en src/assets/
// Si no tienes imágenes aún, puedes usar enlaces URL externos como prueba
import labialImg from "./assets/labial.png";
import cremaImg from "./assets/crema.png";
import perfumeImg from "./assets/perfume.png";
import brochasImg from "./assets/brochas.png";
import sombraImg from "./assets/sombra.png";

const productos = [
  {
    id: 1,
    nombre: "Labial Mate",
    descripcion: "Color rojo de larga duración.",
    precio: 18000,
    categoria: "Maquillaje",
    imagen: labialImg
  },
  {
    id: 2,
    nombre: "Crema Facial",
    descripcion: "Hidratación profunda para la piel.",
    precio: 26000,
    categoria: "Cuidado Facial",
    imagen: cremaImg
  },
  {
    id: 3,
    nombre: "Perfume Floral",
    descripcion: "Fragancia fresca y duradera.",
    precio: 42000,
    categoria: "Perfumería",
    imagen: perfumeImg
  },
  {
    id: 4,
    nombre: "Set de Brochas",
    descripcion: "Set profesional de 12 piezas.",
    precio: 35000,
    categoria: "Accesorios",
    imagen: brochasImg
  },
  {
    id: 5,
    nombre: "Paleta de Sombras",
    descripcion: "12 tonos neutros y satinados.",
    precio: 22000,
    categoria: "Maquillaje",
    imagen: sombraImg
  }
];

export default function App() {
  return (
    <main className="app">
      <header className="header">
        <h1>Wonder Beauty Shop</h1>
        <p>Catálogo de Productos Destacados</p>
      </header>

      <section className="catalogo">
        {productos.map((prod) => (
          <Producto
            key={prod.id}
            nombre={prod.nombre}
            descripcion={prod.descripcion}
            precio={prod.precio}
            categoria={prod.categoria}
            imagen={prod.imagen}
          />
        ))}
      </section>
    </main>
  );
}