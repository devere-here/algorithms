const chai = require('chai'),
    { Node, breadthFirstSearch } = require('../../problems/breadthFirstSearch')

let root1,
    root2

describe('Breadth First Search', () => {
    before(() => {

        root1 = new Node(100)
        root1.generateChildren([50, 150])

        root2 = new Node(5)
        root2.generateChildren([3, 6, 1, 19])
        root2.children[0].generateChildren([8, 4, 2])
        root2.children[2].generateChildren([55, -6])
        root2.children[3].generateChildren([40])
        root2.children[3].children[0].generateChildren([0])

    })
    it('returns true if element is in tree', () => {
        chai.expect(breadthFirstSearch(root1, 50)).to.deep.equal(true)
        chai.expect(breadthFirstSearch(root2, 40)).to.deep.equal(true)
    })
    it('returns false if element is not in tree', () => {
        chai.expect(breadthFirstSearch(root1, 90)).to.deep.equal(false)
        chai.expect(breadthFirstSearch(root2, 90)).to.deep.equal(false)
    })
    it('returns true if value of head node match search value', () => {
        chai.expect(breadthFirstSearch(root1, 100)).to.deep.equal(true)
        chai.expect(breadthFirstSearch(root2, 5)).to.deep.equal(true)
    })

})
