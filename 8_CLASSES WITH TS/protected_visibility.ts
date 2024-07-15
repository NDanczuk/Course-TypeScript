// 12 - protected

//protected properties or methods require another method on the child class to be accessed

class Protected {
    protected x = 10
}

class Protected2 extends Protected {
    showX() {
        console.log("X: " + this.x)
    }
}

const P2Instance = new Protected2()

P2Instance.showX()