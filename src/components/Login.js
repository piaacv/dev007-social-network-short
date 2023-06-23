import { QuerySnapshot } from "firebase/firestore";
import { createNewPost, deletePost } from "../lib";
import { getAllPost, LogOut } from "../lib/index"
import { auth } from "../firebase";


export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const headerSectionLogin = document.createElement('header');
  headerSectionLogin.className = "header-section-login"

  const logo = document.createElement('img');
  logo.setAttribute('src', '/images/logo-amateur.png')
  logo.className = "logo-login"
  const logoName = document.createElement('h1');
  logoName.className = 'logo-login-name'
  logoName.textContent = 'AMATEUR'
  const buttonLogOut = document.createElement('button');
  buttonLogOut.className = "button-out"
  buttonLogOut.textContent = 'Cerrar sesión';

  buttonLogOut.addEventListener('click', () => {
    LogOut().then(() => onNavigate('/'));
  });

  headerSectionLogin.appendChild(logo);
  headerSectionLogin.appendChild(logoName);
  headerSectionLogin.appendChild(buttonLogOut);


  const postSection = document.createElement('section');
  postSection.className = "post-section"
  const textNewPost = document.createElement('h2');
  textNewPost.className = "text-new-post"
  textNewPost.textContent = " ¿Qué tal estuvo tu sesión de entrenamiento?"
  const post = document.createElement('textarea');
  post.className = "input-post"
  const postButton = document.createElement('button');
  postButton.className = "post-button"

  postSection.appendChild(textNewPost);
  postSection.appendChild(post);
  postSection.appendChild(postButton);


  
  const PostDiv = document.createElement('div')
  PostDiv.className = "container-post"
  PostDiv.id = "container_post"
  const timeLineDiv = document.createElement ('div');
  timeLineDiv.className = "container-timeline"
  postButton.textContent = 'Publicar';
  logo.setAttribute('src', '/images/logo-amateur.png')
  logoName.textContent = 'Amateur'


  // mostrar historial de post en timelineDiv

  // HomeDiv.querySelector(".container-post").innerHTML = "";
  getAllPost().then((QuerySnapshot) => {
    QuerySnapshot.forEach((doc) => {
      HomeDiv.querySelector(".container-post").innerHTML += `
      <div class = "container-post_post">
      <p>${doc.data().contenido}</p>
      <h6>${doc.data().userName}</h6>
      <button type="button" class="delete-post-button" id="${doc.id}">X</button>
      </div>
      `;
      
    });
    postDelete()
  });

function postDelete() {
  const buttonsId = HomeDiv.querySelectorAll(".delete-post-button")
  buttonsId.forEach((button) => {
   button.addEventListener('click', async () => {
     console.log(button.id);
     await deletePost(button.id)}
     )
  }
 
  )
}

  
  postButton.addEventListener('click', () => {
    if (post.value === "") {
      alert (" Ingresa tu comentario para publicar tu post")
    } else {
    let contentNewPost = post.value;
    console.log(contentNewPost)
    let usuario = auth.currentUser.email;
    createNewPost(contentNewPost, usuario).then(() => {
      post.value = ""
      
    });
  }
  });
  buttonLogOut.addEventListener('click', () => {
    LogOut().then(() => onNavigate('/'));
  });

  HomeDiv.appendChild(headerSectionLogin);
  HomeDiv.appendChild(postSection);
  HomeDiv.appendChild(timeLineDiv);
  HomeDiv.appendChild(PostDiv);
  return HomeDiv;
};