
// linked list prepend , append , insert , removedindex , removeValue , removeMiddle , reverse , print

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null,
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
        if(index <0 || index >= this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index>= this.size){
            return null
        }

        let removedNode
        if(index === 0){
            removedNode = this.head
            this.head = removedNode.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }

        if(this.head.value === value){
            this.head = this.head.next
        }else{
            let removedNode;
            let prev = this.head
            while(prev.next.value !== value && prev.next){
                prev = prev.next
            }
            
            if(prev.next){
                removedNode = prev.next
                prev.next = removedNode.next
            }
        }
        this.size--
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }

        let  i =0;
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            i++
            curr = curr.next
        }
        return -1
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next  = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log('list empty')
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);    
        }
    }

    removeMiddle(){
        if(this.isEmpty()){
            return null
        }else{
            let mid = Math.floor(this.size/2)
            let prev = this.head
            for(let i=0;i<mid -1 ;i++){
                prev = prev.next;
            }
            let removedNode = prev.next;
            prev.next = removedNode.next;
            return removedNode.value;
        }
    }
}

const list = new LinkedList()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.append(5)
list.append(6)

list.insert(10,2)
// list.removeFrom(3)
list.removeValue(5)
list.removeValue(4)

list.print()
console.log(list.search(10))
list.reverse()
list.print()

console.log(list.removeMiddle())

list.print()