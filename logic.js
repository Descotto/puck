class Puck {
    constructor() {
        this.x = 0;
        this.y = 40;
        this.width = 40;
        this.height = 40;
        this.speed = 10;
        this.render = function () {
            ctx.strokeStyle = 'black'
            ctx.strokeRect(puk.x, puk.y, this.width, this.height);
        }
    }
}