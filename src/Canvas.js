// import Classes from "./components/Classes"
// import background from "./components/Classes"

// import { background } from "./components/Classes"
// import { Sprite } from "./components/Classes"

//global imports
// const sprite = Sprite
// const backgroundImg = background 


export default function Canvas(){
    //load canvas 
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    //draw canvas
    canvas.width = 1024
    canvas.height = 576
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0, canvas.width, canvas.height)




    //IMAGES 
    //draw map on canvas 
    const image = new Image()
    image.src = './pokemonMap/MapZoom.png'
    //draw playerDown image
    const playerDown = new Image()
    playerDown.src = './player/playerDown.png'


    //classes
    class Sprite {
        constructor({ position, velocity, image }) {
            this.position = position
            this.image = image
        }
        draw(){
            ctx.drawImage(this.image, this.position.x, this.position.y)
        }
    }

    const background = new Sprite({
        position: {
            x: -1200,
            y: -80 
        }, 
        image: image
    })

    const keys = {
        w: {
            pressed: false 
        },
        a: {
            pressed: false 
        },
        s: {
            pressed: false 
        },
        d: {
            pressed: false 
        }
    }





    


    function animate(){
        window.requestAnimationFrame(animate)
        background.draw()
        ctx.drawImage(playerDown, 0, 0, playerDown.width/4, playerDown.height, canvas.width / 2 - playerDown.width / 2, canvas.height / 2 - playerDown.height / 2, playerDown.width/4, playerDown.height) 

        if(keys.w.pressed && lastKey==='w') background.position.y += 3
        else if(keys.s.pressed && lastKey==='s')  background.position.y -= 3
        else if(keys.a.pressed && lastKey==='a') background.position.x += 3
        else if(keys.d.pressed && lastKey==='d') background.position.x -= 3

    }
    animate()



    let lastKey = ''


    //player mobility
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'w':
                keys.w.pressed = true 
                lastKey = 'w'
                break 
            case 'a':
                keys.a.pressed = true 
                lastKey = 'a'
                break
            case 's':
                keys.s.pressed = true 
                lastKey = 's'
                break
            case 'd':
                keys.d.pressed = true 
                lastKey = 'd'
                break
        }
    })
    window.addEventListener('keyup', (e) => {
        switch (e.key) {
            case 'w':
                keys.w.pressed = false 
                break 
            case 'a':
                keys.a.pressed = false 
                break
            case 's':
                keys.s.pressed = false 
                break
            case 'd':
                keys.d.pressed = false 
                break
        }
    })



};