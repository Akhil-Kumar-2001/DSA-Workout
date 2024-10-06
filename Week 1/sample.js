class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    getSize(){
        return this.size
    }
    
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    
    insert(value,index){
        if(index < 0 || index >= this.size  ){
            return
        }if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next
            }  
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let remove
        if(index === 0){
            remove =this.head
            this.head = remove.next
        }else{
            let prev = this.head
            for(let i =0 ;i<index -1 ;i++){
                prev =prev.next
            }
            remove = prev.next
            prev.next = remove.next
        }
        this.size++
    }
    
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
        }else{
            let remove 
            let prev = this.head
            while(prev.next.value !== value && prev.next){
                prev = prev.next
            }
            if(prev.next){
                remove = prev.next
                prev.next =remove.next
            }
        }
        this.size--
    }
    
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr = this.head
            let list = ''
            while(curr){
                list += `${curr.value} `
                curr =curr.next
            }
            console.log(list)
        }
    }
}


const list = new Linkedlist()

list.append(20)
list.prepend(50)
list.prepend(50)
list.prepend(50)
list.insert(90,0)
list.print()
list.removeFrom(6)
list.print()
list.removeValue(90)
list.print()
list.removeValue(20)
list.print()