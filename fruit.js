class Fruit {
    constructor (){
        this.x;
        this.y;
    }
    firstLocation(){
        this.x = 200;
        this.y = 200;
    }
    pickLocation(tail){
        let count = true
        let x, y
        if(tail == null){
            this.x = 200;
            this.y = 200;
            return
        }
        // console.log(tail)

        // Remove Random Number 

        let fail = 0
        while(count){
            x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
            console.log(tail.length)
            // console.log(x)
            // console.log(y)

            for (let i = -1; i < tail.length; i ++){
                console.log(tail[i].x)
                console.log(tail[i].y)
                if (tail[i].x == x && tail[i].y == y){
                    console.log("invalid number")
                    break
                } else {
                    count = false
                }
            }
            // fail++
            // if(fail > 10){
            //     console.log('Failure')
            //     break
            // }
        }
        this.x = x
        this.y = y
    }

    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, scale, scale)

    }
}