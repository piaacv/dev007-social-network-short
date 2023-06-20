import { QuerySnapshot } from "firebase/firestore";
import { createNewPost } from "../lib";
import { getAllPost } from "../lib/index"

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const logo = document.createElement('img');
  const logoName = document.createElement('h1');
  const post = document.createElement('textarea');
  post.className = "input-post"
  const postButton = document.createElement('button');
  const buttonHome = document.createElement('button');
  const PostDiv = document.createElement('div')
  PostDiv.className = "container-post"
  PostDiv.id = "container_post"
  
  postButton.textContent = 'Publicar';
  buttonHome.textContent = 'Regresar al Home';
  logo.setAttribute('src', '/images/logo-amateur.png')
  logoName.textContent = 'Amateur'

  
  postButton.addEventListener('click', () => {
    let contentNewPost = post.value;
    console.log(contentNewPost)
    
    createNewPost(contentNewPost).then(() => {
      HomeDiv.querySelector(".container-post").innerHTML = "";
      getAllPost().then((QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
          HomeDiv.querySelector(".container-post").innerHTML += `
          <div class = "container-post_post">
          <p>${doc.data().contenido}</p>
          </div>
          `;
        });
      });
    });
    
  });
  
  

  buttonHome.addEventListener('click', () => onNavigate('/'));
  
  HomeDiv.appendChild(logo);
  HomeDiv.appendChild(logoName);
  HomeDiv.appendChild(post);
  HomeDiv.appendChild(postButton);
  HomeDiv.appendChild(buttonHome);
  HomeDiv.appendChild(PostDiv);
  return HomeDiv;
};