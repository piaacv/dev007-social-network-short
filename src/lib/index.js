// aqui exportaras las funciones que necesites

import { addDoc, collection} from "@firebase/firestore";
import { auth, db } from "../firebase";

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const createNewPost = (contenido) => {
   return addDoc(collection(db, "post"), {
    contenido: contenido,

  });


}

export const allPost = () => {
  return getDocs(collection(db, "post"));
};

//crear función borrar post
//crear función obtener post
//crear función editar post
//crear función darle like
//iniciar sesión con google?
//crear función dejar comentario
//crear función editar nombre
//crear función editar foto perfil
