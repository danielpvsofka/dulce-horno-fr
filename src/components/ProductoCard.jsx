import { useState } from 'react';

function ProductoCard(props) {
  const [cantidad, setCantidad] = useState(0);

  return (
    <article className="tarjeta">
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <p className="precio">{props.precio}</p>

      <button onClick={() => setCantidad(cantidad + 1)}>
        Agregar al pedido
      </button>
      <p>En tu pedido: {cantidad}</p>
    </article>
  );
}

export default ProductoCard;
