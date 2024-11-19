import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const addProductToFirebase = async (product) => {
  let productRef = collection(db, "product");
  const docRef = await addDoc(productRef, { product });
};

export const getProductFromFirebase = async () => {
  let productRef = collection(db, "product");
  const res = await getDocs(productRef);
  const products = [];
  res.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export const deleteProductFromFirebase = async (product) => {
  const docRef = await deleteDoc(doc(db, "product", product.id));
};

export const editProductInFirebase = async (updatedProduct) => {
  const productRef = doc(db, "product", updatedProduct.id);
  await updateDoc(productRef, { ...updatedProduct });
  return { id: updatedProduct.id, ...updatedProduct };
};
