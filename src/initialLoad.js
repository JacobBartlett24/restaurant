import Background from './woodgrain.jpg';
import './style.css';

function menu(){
  const element = document.createElement("div");
  element.setAttribute('id','content');

  const topOfMenu = document.createElement('div')
  topOfMenu.setAttribute('class','wrapper');

  const header = document.createElement("h1");
  header.innerText = "Jacob's Restaraunt";
  topOfMenu.appendChild(header);
  
  const description = document.createElement("h3");
  description.innerText = "We serve breakfast!"
  topOfMenu.appendChild(description);
  element.appendChild(topOfMenu);

  const ul = document.createElement('ul');
  ul.innerHTML = 
  "<li>Grilled Cheese - Cheese, White Bread, Fries</li>" +
  "<li>Hamburger - Ground Beef, Lettuce, Tomato, Bun</li>"+
  "<li>Cheeseburger - Ground Beef, Lettuce, Tomato, Bun</li>"+
  "<li>Hotdog - Weiner, Bread, Ketchup and mustard optional</li>"+
  "<li>Side of Fries - An optional side of fries</li>";
  element.appendChild(ul);

  return element;
}

const element = menu();

export default element;