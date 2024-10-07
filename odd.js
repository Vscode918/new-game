const itemsContainer = document.getElementById('items');
const nextBtn = document.getElementById('nextBtn');
const resultDiv = document.getElementById('result');

const shapes = ['🟢', '🔵', '🔴', '🟡', '🟣'];
let correctIndex = -1;

function generateItems() {
    itemsContainer.innerHTML = '';
    const oddShape = shapes[Math.floor(Math.random() * shapes.length)];
    const normalShapes = Array.from({ length: 3 }, () => shapes[Math.floor(Math.random() * 4)]);
    correctIndex = Math.floor(Math.random() * 4);
    
    if (correctIndex === 0) {
        normalShapes[0] = oddShape; // Place odd shape in the first position
    } else {
        normalShapes[correctIndex] = oddShape; // Randomly place odd shape
    }
    
    normalShapes.forEach((shape, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = shape;
        itemDiv.addEventListener('click', () => checkAnswer(index));
        itemsContainer.appendChild(itemDiv);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === correctIndex) {
        resultDiv.textContent = 'Correct! You found the odd one out!';
    } else {
        resultDiv.textContent = 'Oops! That\'s not the odd one. Try again!';
    }
}

nextBtn.addEventListener('click', () => {
    resultDiv.textContent = '';
    generateItems();
});

// Start the game for the first time
generateItems();
