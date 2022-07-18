function component(){
  const element = document.createElement("div");

  const header = document.createElement("h1");
  header.innerText = "New Restaurant";
  element.appendChild(header);

  const image = document.createElement("img");
  element.appendChild(image);

  const description = document.createElement("p");
  description.innerText = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  element.appendChild(description);

  return element;
}

const element = component();

export default element;