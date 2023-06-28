// aqui exportaras las funciones que necesites

import { addDoc, collection, onSnapshot, doc, query, orderBy, QuerySnapshot, getDocs, deleteDoc,} from "@firebase/firestore";
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
    postDate: new Date(),
    usuario
  });
};



//funciona pero no se ve en app
// export const getAllPost = () => {
//   const q = query(collection(db, 'post'), orderBy('postDate', 'desc'), limit(15));
//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//       if (change.type === "added") {
//           console.log("New post: ", change.doc.data());
//       }
//       if (change.type === "modified") {
//           console.log("Modified post: ", change.doc.data());
//       }
//       if (change.type === "removed") {
//           console.log("Removed post: ", change.doc.data());
//       }
//     });
    
//   });

// };


//se ve en app pero no en tiempo real
// export const getAllPost = () => {
//   return getDocs(collection(db, "post"));

// };


//funciona pero no se ve en app
export const getAllPost = () => {
const q = query(collection(db, 'post'), orderBy('postDate', 'desc'));
return q;
};


export const LogOut = () => signOut(auth);

export const deletePost = async (id) => {
  const confirmDelete = confirm('Confirma para borrar tu post');
    if (confirmDelete === true) {
      await deleteDoc(doc(db, 'post', id));
      
    } }
;


// //show data in real-time
// export const timeLine= () => {
//   return db.collection('post').orderBy('postDate').onSnapshot(snapshot =>{
//   let changes = snapshot.docChanges();
//   console.log(changes);
// })
// };


//crear función editar post
//crear función darle like
//crear función dejar comentario
//crear función editar nombre
//crear función editar foto perfil
