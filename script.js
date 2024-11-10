const player = document.getElementById('player');
const enemy = document.getElementById('enemy');
const gameContainer = document.getElementById('gameContainer');

const moveDistance = 5;

let playerPosition = { x: 100, y: 100 };
let enemyPosition = { x: 500, y: 300 };

function updatePositions() {
    player.style.left = playerPosition.x + 'px';
    player.style.top = playerPosition.y + 'px';
    enemy.style.left = enemyPosition.x + 'px';
    enemy.style.top = enemyPosition.y + 'px';
}

function movePlayer(event) {
    switch (event.key) {
        case 'ArrowUp':
            playerPosition.y = Math.max(0, playerPosition.y - moveDistance);
            break;
        case 'ArrowDown':
            playerPosition.y = Math.min(gameContainer.offsetHeight - 40, playerPosition.y + moveDistance);
            break;
        case 'ArrowLeft':
            playerPosition.x = Math.max(0, playerPosition.x - moveDistance);
            break;
        case 'ArrowRight':
            playerPosition.x = Math.min(gameContainer.offsetWidth - 40, playerPosition.x + moveDistance);
            break;
        case 'r': // Dash
            // Placeholder logic for dash
            break;
        case 'q': // Attack Left
            attack('left');
            break;
        case 'e': // Attack Right
            attack('right');
            break;
    }
    updatePositions();
}

function attack(direction) {
    alert(`Attacked to the ${direction}`);
    // Implement hit detection and damage logic here
}

document.addEventListener('keydown', movePlayer);
updatePositions();
