import { loginUser } from "../firebase";

export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const logo = document.createElement('img');
  const logoName = document.createElement('h1');
  const welcome = document.createElement('h2');
  const welcomeText = document.createElement('p');
  const loginWithGoogle = document.createElement('img');
  const buttonLogin = document.createElement('button');

  welcome.textContent = 'Bienvenida/o'
  welcomeText.textContent = 'Inicia sesión con Google'
  logo.setAttribute('src', '/images/logo-amateur.png')
  logoName.textContent = 'Amateur'
  loginWithGoogle.setAttribute('src','/images/btn_google_signin.png')
  buttonLogin.textContent = 'Inicia sesión';

  loginWithGoogle.addEventListener('click', () => {
    loginUser().then((result) => {
      console.log(result)
      onNavigate('/login')
    })
    });


  HomeDiv.appendChild(logo);
  HomeDiv.appendChild(logoName);
  HomeDiv.appendChild(welcome);
  HomeDiv.appendChild(welcomeText);
  HomeDiv.appendChild(loginWithGoogle);
  HomeDiv.appendChild(buttonLogin);


  return HomeDiv;
};

