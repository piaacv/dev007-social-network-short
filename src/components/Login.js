import { onSnapshot } from 'firebase/firestore';
import {
  createNewPost, deletePost, getAllPost, LogOut,
} from '../lib';
import { auth } from '../firebase';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const headerSectionLogin = document.createElement('header');
  headerSectionLogin.className = 'header-section-login';

  const logo = document.createElement('img');
  logo.setAttribute('src', '/images/logo-amateur.png');
  logo.className = 'logo-login';
  const logoName = document.createElement('h1');
  logoName.className = 'logo-login-name';
  logoName.textContent = 'AMATEUR';
  const buttonLogOut = document.createElement('button');
  buttonLogOut.className = 'button-out';
  buttonLogOut.textContent = 'Cerrar sesión';

  buttonLogOut.addEventListener('click', () => {
    LogOut().then(() => onNavigate('/'));
  });

  headerSectionLogin.appendChild(logo);
  headerSectionLogin.appendChild(logoName);
  headerSectionLogin.appendChild(buttonLogOut);

  const postSection = document.createElement('section');
  postSection.className = 'post-section';
  const textNewPost = document.createElement('h2');
  textNewPost.className = 'text-new-post';
  textNewPost.textContent = '¿Qué tal estuvo tu sesión de entrenamiento?';
  const post = document.createElement('textarea');
  post.className = 'input-post';
  const postButton = document.createElement('button');
  postButton.className = 'post-button';

  postSection.appendChild(textNewPost);
  postSection.appendChild(post);
  postSection.appendChild(postButton);

  HomeDiv.appendChild(headerSectionLogin);
  HomeDiv.appendChild(postSection);
  const PostDiv = document.createElement('div');
  PostDiv.className = 'container-post';
  PostDiv.id = 'container_post';
  HomeDiv.appendChild(PostDiv);
  postButton.textContent = 'Publicar';
  logo.setAttribute('src', '/images/logo-amateur.png');
  logoName.textContent = 'Amateur';

  function postDelete() {
    const buttonsId = HomeDiv.querySelectorAll('.delete-post-button');
    buttonsId.forEach((button) => {
      button.addEventListener('click', async () => {
        await deletePost(button.id);
      });
    });
  }

  onSnapshot(getAllPost(), (querySnapshot) => {
    PostDiv.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const savedPost = doc.data();
      const html = `
     <div class = "container-post_post">
   <p>${savedPost.contenido}</p>
     <h6>${savedPost.userName}</h6>
    <button type="button" class="delete-post-button" id="${doc.id}">X</button>
   </div>`;

      PostDiv.insertAdjacentHTML('beforeend', html);
      const deleteButtonElemnt = PostDiv.lastElementChild.lastElementChild;
      if (auth.currentUser.displayName !== savedPost.userName) {
        deleteButtonElemnt.disabled = true;
      }
    });
    postDelete();
  });

  postButton.addEventListener('click', () => {
    if (post.value === '') {
      alert('Ingresa tu comentario para publicar tu post');
    } else {
      const contentNewPost = post.value;
      const usuario = auth.currentUser.email;
      createNewPost(contentNewPost, usuario).then(() => {
        post.value = '';
      });
    }
  });

  buttonLogOut.addEventListener('click', () => {
    LogOut().then(() => onNavigate('/'));
  });
  return HomeDiv;
};
