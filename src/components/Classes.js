// // import React from "react";

import image from "../Canvas";
import ctx from "../Canvas";


class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position
        this.image = image
    }
    draw(){
        ctx.drawImage(this.image, -1200, -80)
    }
}

const background = new Sprite({
    position: {
        x: -1200,
        y: -80 
    }, 
    image: image
})


export { background, Sprite }
