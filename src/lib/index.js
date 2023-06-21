// aqui exportaras las funciones que necesites

import { addDoc, collection, getDocs, doc, deleteDoc} from "@firebase/firestore";
import { auth, db } from "../firebase";

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const createNewPost = (contentNewPost, usuario) => {
   return addDoc(collection(db, "post"), {
    contenido: contentNewPost,
    usuario
  });
};

export const getAllPost = () => {
  return getDocs(collection(db, "post"));
};



// export const deletePost = async (contentNewPost) => {
//   const option = confirm('Confirma para borrar tu post');
//     if (option === true) {
//       await deleteDoc(doc(db, 'post'));
      
//     } else {
//       onNavigate('/login');
//     } }
// ;



//crear función borrar post
//crear función obtener post
//crear función editar post
//crear función darle like
//iniciar sesión con google?
//crear función dejar comentario
//crear función editar nombre
//crear función editar foto perfil
