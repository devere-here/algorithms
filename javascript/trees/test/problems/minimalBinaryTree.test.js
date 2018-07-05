const chai = require('chai'),
minimalBinaryTree = require('../../problems/minimalBinaryTree.js')

let tree1

describe('Minimal Binary Tree', () => {
    before(() => {

        let arr1 = [1, 2, 3, 4, 5, 6, 7]
        tree1 = minimalBinaryTree(arr1)

    })
    it('Check that the se level of the tree is full', () => {
        chai.expect(tree1.left.left).to.be.an('object')
        chai.expect(tree1.left.right).to.be.an('object')
        chai.expect(tree1.right.left).to.be.an('object')
        chai.expect(tree1.left.right).to.be.an('object')
    })
    it('Check to see that no node in the third level has any children', () => {
        chai.expect(tree1.left.left.left).to.equal(null)
        chai.expect(tree1.left.left.right).to.equal(null)
        chai.expect(tree1.left.right.left).to.equal(null)
        chai.expect(tree1.left.right.right).to.equal(null)
        chai.expect(tree1.right.left.left).to.equal(null)
        chai.expect(tree1.right.left.right).to.equal(null)
        chai.expect(tree1.left.right.left).to.equal(null)
        chai.expect(tree1.left.right.right).to.equal(null)
    })
})
