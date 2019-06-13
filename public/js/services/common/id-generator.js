
let id=0;
export default class {
    constructor(length) {
        id = -1;
        this.length = length;
        this.timeStamp = new Date().getMilliseconds();
    }
    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    generate = () =>{
        const ts = this.timeStamp.toString();
        const parts = ts.split("").reverse();
        let id = "";

        for (let i = 0; i < this.length; ++i) {
            const index = this.getRandomInt(0, parts.length - 1);
            id += parts[index];
        }

        return id;
    }
    generateId = () => {
        id = this.generate();
        return id;
    }
}