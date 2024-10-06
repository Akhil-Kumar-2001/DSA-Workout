class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex2)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> "+[...this.adjacencyList[vertex]])
        }
    }

    bfs(start){
        const visited=new Set()
        const queue=[start]
        const result=[]
        visited.add(start)
        while(queue.length){
            const vertex=queue.shift()
            result.push(vertex)
            this.adjacencyList[vertex].forEach(ele => {
                if(!visited.has(ele)){
                    visited.add(ele)
                    queue.push(ele)
                }
                
            });
        }
        return result
    }

}



const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()
console.log(graph.bfs(""))
// console.log(graph.bfs("A"))