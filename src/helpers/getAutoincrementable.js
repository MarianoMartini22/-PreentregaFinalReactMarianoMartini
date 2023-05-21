import { doc, getFirestore, runTransaction } from "firebase/firestore";

const db = getFirestore();
const obtenerProximoIncrementable = async (counterDocRef) => {

  try {
    const result = await runTransaction(db, async (transaction) => {
      const counterDoc = await transaction.get(counterDocRef);
      const actual = counterDoc.data().value;
      const proximo = actual + 1;

      transaction.update(counterDocRef, { value: proximo });

      return proximo;
    });

    return result;
  } catch (error) {
    console.error("Error al obtener el valor autoincremental:", error);
    throw error;
  }
};

const getAutoincrementable = async (coll) => {
  const counterDocRef = doc(db, "autoincrementables", coll);
  const proximo = await obtenerProximoIncrementable(counterDocRef);
  return proximo;
};

export default getAutoincrementable;
