class Snake {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];

    }  
        
    draw(){
        ctx.fillStyle = '#1146aa';
        
        for(let i = 0; i< this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale )
        }
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    update (){
        for(let i = 0; i < this.tail.length - 1; i ++){
            this.tail[i] = this.tail[i+1]
        }
        
        this.tail[this.total - 1] = {x: this.x, y: this.y}
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        // Check for Edges
        // if(this.x > canvas.width){
        //     this.x = 0;
        // }
        // if(this.y > canvas.height){
        //     this.y = 0;
        // }
        // if(this.x < 0){
        //     this.x = canvas.width;
        // }
        // if(this.y < 0){
        //     this.y = canvas.height;
        // }

        
    }

    changeDirection(direction, previousDirection){
        console.log(direction, previousDirection)
        if(direction === "Down" && previousDirection !== "Up"){
            this.xSpeed = 0;
            this.ySpeed = scale;
            previousDirection = direction
            return previousDirection    
        }
        if(direction === "Up" && previousDirection !== "Down"){
            this.xSpeed = 0;
            this.ySpeed = -scale ;
            previousDirection = direction
            return previousDirection
        }

        if(direction === "Left" && previousDirection !== "Right"){
            this.xSpeed = -scale 
            this.ySpeed = 0
            previousDirection = direction
            return previousDirection
        }

        if(direction === "Right" && previousDirection !== "Left"){
            this.xSpeed = scale ;
            this.ySpeed = 0
            previousDirection = direction
            return previousDirection
        }

        return previousDirection
    }
    
    eat(fruit) {
        // console.log(this.fruit.x)
        // console.log(this.x)
        if( this.x  === fruit.x && this.y === fruit.y){
            this.total++
            // console.log(this.tail)
            return true
        }
        return false
    }

    check(){
        for(let i = 0; i < this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                return true
            }
        }
        if(this.x >= canvas.width){
            return true
        }
        if(this.y >= canvas.height){
            return true
        }
        if(this.x < 0){
            return true
        }
        if(this.y < 0){
            return true
        }
        return false
    }
}