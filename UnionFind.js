class UnionFind{
    
    constructor(size)
    {
        this.parent = new Array(size);
        this.rank = new Array(size);

        for(let i = 0; i < size; i++)
        {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }

    // find(x)                                    //Without path compression
    // {
    //     if(this.parent[x] !== x)
    //     {
    //         return this.find(this.parent[x]);   
    //     }
    //     return this.parent[x];
    // }

    find(x)                                     //With path compression
    {
        if(this.parent[x] !== x)
        {
            this.parent[x] = this.find(this.parent[x]);    
        }
        return this.parent[x];
    }

    isConnected(x, y)
    {
        return this.find(y) === this.find(x);
    }

    union(x, y)
    {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if(rootX === rootY) return;

        if(this.rank[rootX] > this.rank[rootY])                         //<--- Weigth. With this an path compression you almost flatten the tree in its totallity, improving performance M + N log* N
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
