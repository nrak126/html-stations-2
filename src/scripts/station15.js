const fruits = document.querySelector("#fruits");
const list = document.querySelectorAll("#fruits > p");
displayList = () => {
  const newFruits = document.createElement("ul");
  list.forEach((e) => {
    const newNode = document.createElement("li");
    const text = document.createTextNode(e.textContent);
    newNode.appendChild(text);
    newFruits.appendChild(newNode);
    fruits.removeChild(e);
  });
  fruits.appendChild(newFruits);
};
