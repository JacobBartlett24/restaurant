import Background from './woodgrain.jpg';
import './style.css';

function menu(){
  const element = document.createElement("div");
  element.setAttribute('id','content');

  const topOfMenu = document.createElement('div')
  topOfMenu.setAttribute('class','wrapper');

  const header = document.createElement("h1");
  header.innerText = "New Restaurant";
  topOfMenu.appendChild(header);
  
  const description = document.createElement("h3");
  description.innerText = "We serve breakfast!"
  topOfMenu.appendChild(description);
  element.appendChild(topOfMenu)

  const ul = document.createElement('ul');
  ul.innerHTML = 
  "<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>";
  element.appendChild(ul);

  return element;
}

const element = menu();

export default element;