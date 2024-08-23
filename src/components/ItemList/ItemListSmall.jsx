import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListSmall = ({ categoriaProd, itemId }) => {
  const [productos, setProductos] = useState([]);

  const getProductsByCategory = async () => {
    try {
      const productosRef = collection(db, "items");
      const q = query(productosRef, where("categoria", "==", categoriaProd));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductsByCategory();
  });

  return (
    <div style={{ display: "grid", gridTemplateColumns: "20% 50% 20%" }}>
      <div></div>
      <div>
        <h2 style={{ textAlign: "center" }} className="tit2">
          Otros Productos de la categoria
        </h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "25% 25% 25% 25%" }}
        >
          {productos.length > 0 &&
            productos.map((produ) => {
              return (
                <div
                  key={produ.id}
                  style={{ textAlign: "center", marginTop: 10 }}
                >
                  <img
                    src={produ.imagen}
                    alt="{produ.nombreProdu}"
                    style={{ width: 200, height: 160 }}
                  ></img>
                  <Link className="tit2" to={`/item/${produ.id}`}>
                    <h5 className="tit2">{produ.nombreProdu}</h5>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ItemListSmall;
