import './style.css';

function header(){

  const headerElement = document.createElement('div');
  headerElement.setAttribute('id','header');

  const navBar = document.createElement('div');
  navBar.setAttribute('class','navbar');
  headerElement.appendChild(navBar);

  const menuButton = document.createElement('div');
  menuButton.innerText = 'Menu';
  menuButton.setAttribute('class','home');
  menuButton.onclick(alert('heelo'));
  menuButton.setAttribute('id','menu');
  navBar.appendChild(menuButton);

  const contactButton = document.createElement('div');
  contactButton.innerText = 'Contact';
  contactButton.setAttribute('class','home');
  contactButton.setAttribute('id','contact');
  navBar.appendChild(contactButton)

  const homeButton = document.createElement('div');
  homeButton.innerText = 'Home';
  homeButton.setAttribute('class','home');
  homeButton.setAttribute('id','home');
  navBar.appendChild(homeButton);


  return headerElement;
}

const headerElement = header();

export default headerElement;