import { collection, getDocs, getDoc, doc, where, query } from "firebase/firestore";
import { db } from '../firebase';
import { useEffect, useState } from 'react';

export const useFirebase = (by = "id", params = {}, coll, find = false, refresh = false) => {
  const [dataQuery, setDataQuery] = useState([]);
  const condition = (refresh && params.category);
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        if (!find) {
          const querySnapshot = await getDocs(collection(db, "items"));
          const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          if (isMounted) {
            setDataQuery(newData);
          }
        } else {
          let querySnapshot;
          let newData;

          switch (by) {
            case 'categorias':
              const q = query(collection(db, coll), where("category", "==", +params.category));
              querySnapshot = await getDocs(q);
              newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
              if (isMounted) {
                setDataQuery(newData);
              }
              break;
            case 'id':
              let docRefId = doc(db, coll, params.id);
              let docSnapId = await getDoc(docRefId);
              if (docSnapId.exists()) {
                if (isMounted) {
                  setDataQuery(docSnapId.data());
                }
              } else {
                setDataQuery([{message: 'No existe el item seleccionado'}])
              }
              break;
            case 'categoria':
              if (params.id) {
                let docRefCategoria = doc(db, coll, params.id.toString());
                let docSnapCategoria = await getDoc(docRefCategoria);
                if (docSnapCategoria.exists()) {
                  if (isMounted) {
                    setDataQuery(docSnapCategoria.data());
                  }
                } else {
                  console.error("La categoria no existe");
                }
              }
              break;
            default:
              break;
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [condition, by, coll, find, params.id, params.category]);

  return dataQuery;
};
