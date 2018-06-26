const chai = require('chai'),
    { Graph, routeBetweenNodes } = require('../../problems/routeBetweenNodes')

let graph1,
    graph2

describe('Route Between Nodes', () => {
    before(() => {

        graph1 = new Graph()
        graph1.addNodes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        graph1.addChildren(0, [1, 2, 3])
        graph1.addChildren(1, [4, 8])
        graph1.addChildren(4, [5, 6, 7])
        graph1.addChildren(9, [7, 8])

        graph2 = new Graph()
        graph2.addNodes([1, 2, 3])
        graph2.addChildren(0, [2])
        graph2.addChildren(1, [2])

    })
    it('returns true if first node is an ancestor node of second', () => {
        chai.expect(routeBetweenNodes(graph1.allNodes[0], graph1.allNodes[7])).to.deep.equal(true)
        chai.expect(routeBetweenNodes(graph2.allNodes[0], graph2.allNodes[2])).to.deep.equal(true)
    })
    it(`returns false  if there's no path between the nodes or if the first node is not an ancestor node`, () => {
        chai.expect(routeBetweenNodes(graph1.allNodes[0], graph1.allNodes[9])).to.deep.equal(false)
        chai.expect(routeBetweenNodes(graph2.allNodes[0], graph2.allNodes[1])).to.deep.equal(false)
    })
    it(`returns true if nodes we're finding a route between is really the same node`, () => {
        chai.expect(routeBetweenNodes(graph1.allNodes[5], graph1.allNodes[5])).to.deep.equal(true)
        chai.expect(routeBetweenNodes(graph2.allNodes[1], graph2.allNodes[1])).to.deep.equal(true)
    })
    it(`returns false if one of our nodes dont exist`, () => {
        chai.expect(routeBetweenNodes(graph1.allNodes[5], graph1.allNodes[500])).to.deep.equal(false)
        chai.expect(routeBetweenNodes(graph2.allNodes[1], graph2.allNodes[100])).to.deep.equal(false)
    })

})
