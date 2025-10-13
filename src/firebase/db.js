import { getFirestore, collection, getDocs } from "firebase/firestore"; // <-- Importar todo lo que vas a usar
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async () => {
const querySnapshot = await getDocs(collection(db, "items"));
const items = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  items.push({...doc.data(),  id:  doc.id})
});
    return items
}