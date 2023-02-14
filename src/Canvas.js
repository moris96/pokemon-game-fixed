



export default function Canvas(){
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    //draw canvas
    canvas.width = 1024
    canvas.height = 576

    ctx.fillStyle = 'black'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    
}