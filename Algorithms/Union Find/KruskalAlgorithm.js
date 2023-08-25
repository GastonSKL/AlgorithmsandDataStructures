//THIS IS USED TO FIND THE MINIMUN SPANNING TREE IN A GRAPH

class UnionFind
{

    constructor(size)
    {
        this.parent = {};
        this.rank = {};

        size.forEach(node => {
            this.parent[node] = node;
            this.rank[node] = 0;
        });
    }

    find(x)
    {
        if(this.parent[x] !== x)
        {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x];
    }

    isConnected(x,y)
    {
        return this.find(y) === this.find(x);
    }

    union(x,y)
    {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if(rootX === rootY) return;

        if(this.rank[rootX] > this.rank[rootY])
        {
            this.parent[rootY] = rootX; 
        }
        else if(this.rank[rootX] < this.rank[rootY])
        {
            this.parent[rootX] = rootY;
        }
        else
        {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
    }

}

class Edge
{
    constructor(src, dest, weigth)
    {
        this.src = src;
        this.dest = dest;
        this.weigth = weigth;
    }
}

const Kruskal = (nodes, edges) =>
{

    edges.sort((a,b) => a.weigth - b.weigth);

    let finalTree = [];
    let unionFind = new UnionFind(nodes);

    for(let edge of edges)
    {
        let rootSrc = unionFind.find(edge.src);
        let rootDest = unionFind.find(edge.dest);

        if(rootSrc !== rootDest)
        {
            finalTree.push(edge);
            unionFind.union(edge.src, edge.dest);
        }
    }

    return finalTree;
}

let nodes = [1, 2, 3, 4, 5, 6];
let edges = [
    new Edge(1, 2, 1),
    new Edge(1, 3, 2),
    new Edge(2, 3, 3),
    new Edge(2, 4, 4),
    new Edge(3, 4, 5),
    new Edge(3, 5, 6),
    new Edge(4, 5, 7),
    new Edge(4, 6, 8),
    new Edge(5, 6, 9),
];

let result = Kruskal(nodes, edges);
console.log(result);