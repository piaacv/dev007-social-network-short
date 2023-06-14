import { createNewPost } from "../lib";

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const logo = document.createElement('img');
  const logoName = document.createElement('h1');
  const post = document.createElement('textarea');
  const postButton = document.createElement('button');
  const buttonHome = document.createElement('button');
  
  postButton.textContent = 'Publicar';
  buttonHome.textContent = 'Regresar al Home';
  logo.setAttribute('src', '/images/logo-amateur.png')
  logoName.textContent = 'Amateur'

  
  postButton.addEventListener('click', () => {
    let contentNewPost = post.value;
    console.log(contentNewPost)
    createNewPost(contentNewPost).then(() => {
      contentNewPost = "";

    }

    )

    
  });
  
  

  buttonHome.addEventListener('click', () => onNavigate('/'));
  
  HomeDiv.appendChild(logo);
  HomeDiv.appendChild(logoName);
  HomeDiv.appendChild(post);
  HomeDiv.appendChild(postButton);
  HomeDiv.appendChild(buttonHome);
  
  return HomeDiv;
};