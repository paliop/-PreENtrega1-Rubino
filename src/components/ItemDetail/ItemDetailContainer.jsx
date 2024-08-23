import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../db/db.js";
import ItemListSmall from "../ItemList/ItemListSmall.jsx";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  const getProductDb = async () => {
    try {
      const docRef = doc(db, "items", id);
      const dataDb = await getDoc(docRef);
      const data = { id: dataDb.id, ...dataDb.data() };
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductDb();
  }, [id]);
  
  return (
    <div>
      {item && <ItemDetail item={item} />}
      {item && (
        <ItemListSmall
          categoriaProd={item.categoria}
          itemId={id}
        ></ItemListSmall>
      )}
    </div>
  );
 
};

export default ItemDetailContainer;
