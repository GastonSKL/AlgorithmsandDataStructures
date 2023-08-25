//Given a social network containing n members and a log file containing m timestamps at witch times pairs of members formed friendships, design an algorith to determine the earliest time at witch all members are connected. Assume that the log file is sorted by timestamp and that friendship is an equivalence relation. The running time of the algorithm must be m log n or better.

//IM USING UNION FIND AS A SUBRUTINE

class UnionFind {
    constructor(size) {
      this.parent = new Array(size);
      this.rank = new Array(size);
  
      for (let i = 0; i < size; i++) {
        this.parent[i] = i;
        this.rank[i] = 0;
      }
    }
  
    find(x) {
      if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
    }
  
    isConnected(x, y) {
      return this.find(y) === this.find(x);
    }
  
    union(x, y) {
      let rootX = this.find(x);
      let rootY = this.find(y);
  
      if (rootX === rootY) return;
  
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }

function earliestTime(n, logs)
{
    const UF = new UnionFind(n);

    for(let log of logs)
    {
        const { time, friend1, friend2 } = log;

        if(!UF.isConnected(friend1, friend2))
        {
            UF.union(friend1, friend2);
            if(UF.rank[UF.find(friend1)] === n - 1) //In a fully connected graph, where all members are connected, the rank of the root will be n - 1
            {
                return time;
            }
        }
    }

    return -1;
}  

const n = 3; //This are my nodes
const logs = [   //This would be my edges, they are already sorted as stated by the problem
  { time: 1, friend1: 0, friend2: 1 },
  { time: 2, friend1: 1, friend2: 2 },
  { time: 3, friend1: 2, friend2: 3 },
  { time: 4, friend1: 3, friend2: 4 },
];

const earliestConnectivityTime = earliestTime(n, logs);
console.log(earliestConnectivityTime);
