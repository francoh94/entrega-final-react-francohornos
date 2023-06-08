import { useState, createContext } from "react";

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, settotal] = useState(0);
  const [cantidadTotal, setcantidadTotal] = useState(0);

  const agregarProductos = (item, cantidad) => {
    const verificarProducto = carrito.find((prod) => prod.item.id === item.id);
    if (!verificarProducto) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setcantidadTotal((prev) => prev + cantidad);
      settotal((prev) => prev + item.precio * cantidad);
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setcantidadTotal((prev) => prev + cantidad);
      settotal((prev) => prev + item.precio * cantidad);
    }
  };
  const eliminarProducto = (id) => {
    const productoeliminado = carrito.find((prod) => prod.item.id === id);
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(carritoActualizado);
    setcantidadTotal((prev) => prev - productoeliminado.cantidad);
    settotal(
      (prev) =>
        prev - productoeliminado.item.precio * productoeliminado.cantidad
    );
  };
  const vaciarCarrito = () => {
    setCarrito([]);
    setcantidadTotal(0);
    settotal(0);
  };
  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProductos,
        eliminarProducto,
        vaciarCarrito,
        total,
        cantidadTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
