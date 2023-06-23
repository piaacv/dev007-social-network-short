// aqui exportaras las funciones que necesites

import { addDoc, collection, getDocs, doc, deleteDoc,} from "@firebase/firestore";
import { auth, db } from "../firebase";
import { signOut } from 'firebase/auth';

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const createNewPost = (contentNewPost, usuario) => {
   return addDoc(collection(db, "post"), {
    contenido: contentNewPost,
    userName: auth.currentUser.displayName,
    usuario
  });
};

export const getAllPost = () => {
  return getDocs(collection(db, "post"));
};

export const LogOut = () => signOut(auth);

export const deletePost = async (id) => {
  const confirmDelete = confirm('Confirma para borrar tu post');
    if (confirmDelete === true) {
      await deleteDoc(doc(db, 'post', id));
      
    } }
;





//crear función editar post
//crear función darle like
//crear función dejar comentario
//crear función editar nombre
//crear función editar foto perfil
