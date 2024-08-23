import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList.jsx";

import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { db } from "../../db/db.js";

import Arbol from "./Arbol.jsx";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  const { idLuz } = useParams();
  const [sortAsc, setSortAsc]=useState(false)
  const [sortDes, setSortDes]=useState(false)

  const getProductsDb = async () => {
    const productosRef = collection(db, "items");
    const dataBb = await getDocs(productosRef);
    const data = dataBb.docs.map((productDb) => {
      return { id: productDb.id, ...productDb.data() };
    });
    setProductos(data);
  };

  const getProductsByCategory = async () => {
    try {
      const productosRef = collection(db, "items");
      const q = query(productosRef, where("categoria", "==", idCategoria));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByFilter = async () => {
    try {
      const productosRef = collection(db, "items");
      const q = query(productosRef, where("luz", "==", idLuz));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getProductsSortAsc = async () => {
    try {
      const productosRef = collection(db, "items");
      const q = query(productosRef, orderBy("precio", "desc"));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getProductsSortDes = async () => {
    try {
      const productosRef = collection(db, "items");
      const q = query(productosRef, orderBy("precio", "asc"));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    } catch (error) {
      console.log(error);
    }
  };
  const ordenarAsc = () =>{
    setSortAsc(true)
    setSortDes(false)
  }
  const ordenarDes = () =>{
    setSortDes(true)
    setSortAsc(false)
  }

  useEffect(() => {
    if (idCategoria) {
      getProductsByCategory();
    } else if (idLuz) {
      getProductsByFilter();
    } else if (sortAsc) {
      getProductsSortAsc();
    } else if (sortDes){
      getProductsSortDes()
    } else {
      getProductsDb();
    }
  }, [idCategoria, idLuz, sortAsc, sortDes]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "10% 90%" }}>
      <div>
        <Arbol ordenarAsc={ordenarAsc} ordenarDes={ordenarDes}></Arbol>
      </div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
