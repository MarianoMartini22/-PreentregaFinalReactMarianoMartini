import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import { useEffect, useState } from 'react';

export const useFirebase = (by = "id", params = {}, coll, find = false) => {
    const [query, setQuery] = useState([]);
    const fetchPost = async () => {
        if (!find) {
            await getDocs(collection(db, "items"))
                .then((querySnapshot)=>{               
                    const newData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id:doc.id }));
                    setQuery(newData);
                })
                .catch((e) => {
                    console.error(e);
                });
        } else {
            switch (by) {
                case 'id':
                    try {
                        const docRef = doc(db, coll, params.id);
                        const docSnap = await getDoc(docRef);
                        if(docSnap.exists()) {
                            setQuery(docSnap.data());
                        } else {
                            console.log("El item no existe")
                        }
                    
                    } catch(error) {
                        console.log(error)
                    }
                    break;
                case 'categoria':
                    try {
                        const docRef = doc(db, coll, params.id.toString());
                        const docSnap = await getDoc(docRef);
                        if(docSnap.exists()) {
                            setQuery(docSnap.data());
                        } else {
                            console.error("La categoria no existe")
                        }
                    
                    } catch(error) {
                        console.log(error)
                    }
                    break;
            
                default:
                    break;
            }
        }
    }
    useEffect(() => {
      fetchPost();
    }, []);
    return query;
};