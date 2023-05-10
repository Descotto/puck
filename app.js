const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const movement = document.querySelector('#movement');

canvas.width = 950;
canvas.height = 500;

let puk = new Puck



//============================Start=====================//

window.addEventListener('DOMContentLoaded', function () {
    const runGame = this.setInterval(gameLoop, 60);
});


//============================Movements=================//
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);


document.addEventListener('keypress', moveChar);
document.addEventListener('keyup', centerChar);

function centerChar(e){
   
    if (puk.frameX > 1){
            puk.frameX -= 1;
            setTimeout(puk.frameX -= 1, 12999);
        }
    
}

function moveChar(e) {


    switch (e.key) {

        //===================================Arrow cases for debugging purposes, no boundaries.
        // case 'ArrowUp':
        //     puk.y - 20 >= 0 ? (puk.y -= 20) : null;
        //     puk.frameY = 1;
        //     if (puk.frameX < puk.maxFrame) {
        //         puk.frameX++;
        //     } else { puk.frameX = puk.minFrame }
        //     break;
        // case 'ArrowLeft':
        //     puk.x - 20 >= 0 ? (puk.x -= 20) : null;
        //     puk.frameY = 2;
        //     if (puk.frameX < puk.maxFrame) {
        //         puk.frameX++;
        //     } else { puk.frameX = puk.minFrame }
        //     break;
        // case 'ArrowDown':
        //     puk.y + 20 <= game.height ? (puk.y += 20) : null;
        //     puk.frameY = 0;
        //     if (puk.frameX < puk.maxFrame) {
        //         puk.frameX++;
        //     } else { puk.frameX = puk.minFrame }
        //     break;
        // case 'ArrowRight':
        //     puk.x + 20 <= game.width ? (puk.x += 20) : null;
        //     puk.frameY = 3;
        //     if (puk.frameX < puk.maxFrame) {
        //         puk.frameX++;

        //     } else { puk.frameX = puk.minFrame }
        //     break;
        
        // WASD Keybindings

        case 'w':
            //can I stop all cases with one "if" conditional? ===== nope, one per case.
                puk.y - puk.speed >= 0 ? (puk.y -= puk.speed) : null;

            break;
        case 'a':
                puk.x - puk.speed >= 0 ? (puk.x -= puk.speed) : null;

            break;
        case 's':
                puk.y + puk.speed <= canvas.height ? (puk.y += puk.speed) : null;


            break;
        case 'd':
                puk.x + puk.speed <= canvas.width ? (puk.x += puk.speed) : null;

            break;
        //ADDITIONAL CONTROLS
        case 'e':
            break;
    }
}


//==================Loop=============//


function gameLoop() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movement.textContent = `x:${puk.x}\ny:${puk.y}`;

    // ctx.drawImage(bg, 0, 0);
    
    puk.render();

}

//=====================Useful functions =================//
