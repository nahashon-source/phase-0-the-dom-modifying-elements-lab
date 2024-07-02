// Task 1: Remove 'main#main' DOM node
const mainNode = document.getElementById('main');
mainNode.remove();

// Task 2, 3, 4: Create new <h1> node, assign id 'victory', and set text content
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
const yourName = 'John'; // Replace 'John' with your desired name
newHeader.textContent = `${yourName} is the champion`;

// Append newHeader to the document body or any desired location
document.body.appendChild(newHeader);
