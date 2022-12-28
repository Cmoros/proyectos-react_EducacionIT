import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useCarritoDeCompras from './hooks/UseCarritoDeCompras';

function App() {
  
  const [json, setJson] = useState([]);
  const [cart, addItem, deleteItem] = useCarritoDeCompras();

  useEffect(() => {
    axios({url: "https://dummyjson.com/products"})
    .then((res) => setJson(res.data.products))
    .catch((error) => console.log(error))
  }, []);

  return (
    <div className="App">
      <ul>
      {json.map((item, i) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => addItem(item)}>Agregar a carrito</button>
        </li>
      ))}
      </ul>
      <div>
        <h2>Carrito</h2>
        {cart.map((item, i) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => deleteItem(item)}>Borrar</button>
        </li>
      ))}
      </div>
    </div>
  );
}

export default App;
