class CustomArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    push(item){
        this.data[this.length] = item;
        this.length++
        return this.length
    }
    pop(){
        if(!this.length){
            return undefined
        }
        let item = this.data[this.length-1]
        delete this.data[this.length - 1];
        this.length--
        return item
    }
    shift(){
        if(!this.length){
            return undefined
        }
        let item = this.data[0]
        delete this.data[0]
        this.length--;
        for(let i=0; i<this.length; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length]
        return item
    }
    unshift(item){
        if(!this.length){
            return this.push(item)
        }
        for(let i=this.length; i>0; i--){
            this.data[i] = this.data[i-1]
        }
        this.data[0] = item
        this.length++
        return item
    }
    reverse(){
        if(!this.length)
            return undefined
        let newArr = new CustomArray()
        for(let i=this.length-1 ; i>=0 ; i--){
           newArr.push(this.data[i])
        }
        return newArr
    }
     deleteByIndex(index){
        if(index > this.length){
            return undefined
        }
        let item = this.data[index]
        delete this.data[index];
        this.length--;
        for(let i=index; i<this.length; i++){
            this.data[i] = this.data[i+1]
        }

        
        return item
     }

}

const x = new CustomArray()
x.push(1)
x.push(2);
x.push(3);
x.push(4);
x.push(5);
x.push(6);
x.push(7);
x.push(8);
console.log(x)
console.log(x.reverse())


