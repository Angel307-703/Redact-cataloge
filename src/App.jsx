// src/App.jsx
import Producto from "./components/Producto";
import "./App.css";

// URLs de imágenes de prueba (placeholders)
const labialImg = "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400";
const cremaImg = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400";
const perfumeImg = "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400";
const brochasImg = "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400";
const sombraImg = "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400";

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
