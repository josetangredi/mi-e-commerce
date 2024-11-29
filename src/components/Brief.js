import { useCart } from "../context/CartContext"; // Ajusta la ruta si es necesario

const Brief = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Resumen del Carrito</h2>
      {cartItems.map((item) => (
        <p key={item.id}>
          {item.title}: {item.quantity} unidad(es) - $
          {item.price * item.quantity}
        </p>
      ))}
    </div>
  );
};

export default Brief;
