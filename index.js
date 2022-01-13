const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = innerHeight

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 30
        this.height = 30
    }

    draw() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    
}

const player = new Player()
player.draw()