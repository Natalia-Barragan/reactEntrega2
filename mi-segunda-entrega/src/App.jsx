import { useState } from "react";
import { useEffect } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { getProducts } from "./services/products";
import { products } from "./Mock/products";


function App() {

  // getProducts().then((response) =>{
  //   console.log(response);
  // });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      console.log("getProducts");
      setProducts(response);
    });
  }, []);


  
  return (
    <div>
      <header>
          <><ItemListContainer title="bienvenidos a YHABIA UNA VEZ" /></>
          <><NavBar /></>
          <h1>Listado de Productos</h1>
          <>
            {products.map((product) =>{
              return(
                <ul>
                  <img src={product.imagen} alt={product.tipo} width={150} height={150} />
                  <li key={product.id}>
                    Id: {product.id}
                  </li>
                  <li>
                    Tipo: {product.tipo}
                  </li>
                  <li>
                    Precio: {product.precio}
                  </li>
                </ul>
              )
            })}
          </>
      </header>
    </div>
    
  );


}


export default App;
