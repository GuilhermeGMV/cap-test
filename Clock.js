function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function Clock() {
    this.increment = 0;
    this.decrement = 10;
    
    this.tick = async function() {
        await sleep(1000);
        if (this.increment == 10 || this.decrement == 0) {
            throw new Error("It reached its limit");
        }
        this.increment++;
        this.decrement--;
        return `increment: ${this.increment}, decrement: ${this.decrement}`;
    };
}

const clock = new Clock();
try {
    while (true){
        const st = await clock.tick();
        console.log(st);
    }
} catch (e) {
    console.error(e.message);
}
