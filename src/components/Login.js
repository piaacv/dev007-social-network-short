import { QuerySnapshot } from "firebase/firestore";
import { createNewPost } from "../lib";
import { getAllPost } from "../lib/index"
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
  const buttonHome = document.createElement('button');
  buttonHome.className = "button-out"
  buttonHome.textContent = 'Cerrar sesión';

  headerSectionLogin.appendChild(logo);
  headerSectionLogin.appendChild(logoName);
  headerSectionLogin.appendChild(buttonHome);


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



  
  postButton.addEventListener('click', () => {
    let contentNewPost = post.value;
    console.log(contentNewPost)
    let usuario = auth.currentUser.email;
    createNewPost(contentNewPost, usuario).then(() => {
      post.value = ""
      HomeDiv.querySelector(".container-post").innerHTML = "";
      getAllPost().then((QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
          HomeDiv.querySelector(".container-post").innerHTML += `
          <div class = "container-post_post" id = "container_post_post">
          <p>${doc.data().contenido}</p>
          <h6>${doc.data().usuario}</h6>
          <button type="button" onClick="deletePost(this)" class="delete-post-button" id="delete_post_button">X</button>
          </div>
          `;
          
        });
      });
    });
    
  });
  

  // hacer que funcione click
// HomeDiv.querySelector('#delete_post_button').addEventListener('click', () => {

// })
  

  buttonHome.addEventListener('click', () => onNavigate('/'));
  
  HomeDiv.appendChild(headerSectionLogin);
  HomeDiv.appendChild(postSection);
  HomeDiv.appendChild(timeLineDiv);
  HomeDiv.appendChild(PostDiv);
  return HomeDiv;
};