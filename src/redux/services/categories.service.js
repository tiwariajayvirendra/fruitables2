import { collection, addDoc, getDocs, deleteDoc , updateDoc,doc} from "firebase/firestore"; 
import { db } from "../../firebaseConfig";
export const addCategoryToFirebase=async(category)=>{
console.log(category, "IN SERVICE")
let categoryRef= collection(db,"category")
const docRef = await addDoc(categoryRef, {
    category
  });
}

export const getCategoryFromFirebase=async()=>{

  let categoryRef= collection(db,"category")
  const res= await getDocs(categoryRef)
  const categories=[];
  res.forEach((doc)=>{
   
    categories.push({ id: doc.id, ...doc.data() });
  })
  return categories;
}

export const deleteCategoryFromFirebase=async(category)=>{
console.log("cat in del from fb",category)
  const docRef= await deleteDoc(doc(db,"category",category.id))
  console.log(docRef)
}
export const editCategoryInFirebase = async (updatedCategory) => {
  const categoryRef = doc(db, "category", updatedCategory.id);
  await updateDoc(categoryRef, {
    ...updatedCategory
  });
  return { id: updatedCategory.id, ...updatedCategory };
};