class MyCircularQueue {
    constructor(k){
        // 用来保存数据长度为k的数据结构
        this.list = Array(k)
        // 队首指针（索引）
        this.front = 0
        // 队尾指针
        this.rear = 0
        // 队列长度
        this.max = k
    }
    enQueue(num){
        if(this.isFull()){
            return false
        } else {
            this.list[this.rear] = num
            this.rear = (this.rear+1)%this.max
            return true
        }
    }
    deQueue(){
        let v = this.list[this.front]
        this.list[this.front] = ''
        this.front = (this.front+1)%this.max
        return v
    }
    isEmpty(){
        return this.front === this.rear && !this.list[this.front]
    }
    isFull(){
        return console.log(this.front === this.rear && !!this.list[this.front])
    }
    Front(){
        return console.log(this.list[this.front])
    }
    Rear(){
        let rear = this.rear-1
        return console.log(this.list[rear < 0 ? this.max-1 : rear])
    }
}

let queue = new MyCircularQueue(4)
queue.enQueue(2)
queue.isFull()
queue.enQueue(1)
queue.Front() //2
queue.Rear() //1
