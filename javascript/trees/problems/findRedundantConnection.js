/*
In this problem, a tree is an undirected graph that is connected and has no cycles.

The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N), with one additional edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] with u < v, that represents an undirected edge connecting nodes u and v.

Return an edge that can be removed so that the resulting graph is a tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

Time: O(n^2)
Space: O(n^2)
*/

const findRedundantConnection = (edges) => {
    let hashObj = {},
        lastRedundantPair = []

    for (let i = 0; i < edges.length; i++){
        if (hashObj[edges[i][0]] && hashObj[edges[i][1]]){
            if (lookForConnection(hashObj, edges[i][0], edges[i][1])){
                lastRedundantPair = edges[i]
            }
        }
        addConnectionsToHash(hashObj, edges[i][0], edges[i][1])
    }
    return lastRedundantPair
}

function addConnectionsToHash(hashObj, edge1, edge2){
    if (hashObj[edge1]) hashObj[edge1].push(edge2)
    else hashObj[edge1] = [edge2]

    if (hashObj[edge2]) hashObj[edge2].push(edge1)
    else hashObj[edge2] = [edge1]
}

function lookForConnection(hashObj, edge1, edge2){
    let queue = hashObj[edge1].slice(0),
        set = new Set()

    while (queue.length){
        let currentValue = queue.shift()
        if (!set.has(currentValue) && currentValue !== edge2){
            set.add(currentValue)
            queue.push(...hashObj[currentValue])
        } else if (currentValue === edge2){
            return true
        }
    }

    return false
}

console.log(findRedundantConnection([[1, 5], [2, 4], [3, 4], [1, 3], [3, 5]]))  // [3, 5]
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))  // [1, 4]
console.log(findRedundantConnection([[9, 10], [5, 8], [2, 6], [1, 5], [3, 8], [4, 9], [8, 10], [4, 10], [6, 8], [7, 9]]))  // [4, 10]

