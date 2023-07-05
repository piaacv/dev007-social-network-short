import {
  addDoc, collection, doc, query, orderBy, deleteDoc,
} from '@firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';

export const createNewPost = (contentNewPost, usuario) => addDoc(collection(db, 'post'), {
  contenido: contentNewPost,
  userName: auth.currentUser.displayName,
  postDate: new Date(),
  usuario,
});

export const getAllPost = () => {
  const q = query(collection(db, 'post'), orderBy('postDate', 'desc'));
  return q;
};

export const LogOut = () => signOut(auth);

export const deletePost = async (id) => {
  const confirmDelete = window.confirm('Confirma para borrar tu post');
  if (confirmDelete === true) {
    await deleteDoc(doc(db, 'post', id));
  }
};
