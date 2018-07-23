/*
In this problem, a tree is an undirected graph that is connected and has no cycles.

The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N), with one additional edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] with u < v, that represents an undirected edge connecting nodes u and v.

Return an edge that can be removed so that the resulting graph is a tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

Time: O(n)
Space: O(1)
*/

const findRedundantConnection = (edges) => {
    let set = new Set(),
        lastRedundantPair = []

    edges.forEach(edge => {
        if (set.has(edge[0]) && set.has(edge[1])){
             lastRedundantPair = edge 
        } else {
            set.add(edge[0])
            set.add(edge[1])
        }
    })

    return lastRedundantPair
}

console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]))  // [2, 3]
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))  // [1, 4]
