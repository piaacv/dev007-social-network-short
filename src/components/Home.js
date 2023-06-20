import { loginUser } from "../firebase";

export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const headerSection = document.createElement('header');
  headerSection.className = "header-section"

  const logo = document.createElement('img');
  logo.setAttribute('src', '/images/logo-amateur.png')
  logo.className = "logo"
  const logoName = document.createElement('h1');
  logoName.className = 'logo-name'
  logoName.textContent = 'Amateur'

  headerSection.appendChild(logo);
  headerSection.appendChild(logoName);


  const welcome = document.createElement('h2');
  const welcomeText = document.createElement('p');
  const loginWithGoogle = document.createElement('img');
  loginWithGoogle.className = "login-with-google"
  loginWithGoogle.setAttribute('src','/images/btn_google_signin.png')
  // buttonLogin.textContent = 'Inicia sesión';
  // const buttonLogin = document.createElement('button');

  welcome.textContent = 'Bienvenida/o'
  welcomeText.textContent = 'Inicia sesión con Google'
  logo.setAttribute('src', '/images/logo-amateur.png')
  logoName.textContent = 'Amateur'
  

  loginWithGoogle.addEventListener('click', () => {
    loginUser().then((result) => {
      console.log(result)
      onNavigate('/login')
    })
    });

  HomeDiv.appendChild(headerSection);
  HomeDiv.appendChild(welcome);
  HomeDiv.appendChild(welcomeText);
  HomeDiv.appendChild(loginWithGoogle);
  // HomeDiv.appendChild(buttonLogin);


  return HomeDiv;
};

