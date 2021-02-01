const { TreeNode } = require('../lib/tree_node.js');
const { inOrderArray, postOrderArray } = require('../lib/tree_order.js');
const { buildTree } = require('../lib/leet_code_105.js');


describe('TreeNode', () => {
    test('should set the `val` property to the given arg', () => {
        let a = new TreeNode('a');
        expect(a.value).toEqual('a');

        let b = new TreeNode('b');
        expect(b.value).toEqual('b');
    });

    test('should initialize `left` and `right` properties to null', () => {
        let a = new TreeNode('a');
        expect(a.left).toEqual(null);
        expect(a.right).toEqual(null);            
    });
});

describe('TreeOrder', () => {
    let root

    beforeEach(() => {
        root = new TreeNode('a')
        let b = new TreeNode('b')
        let c = new TreeNode('c')
        let d = new TreeNode('d')
        let e = new TreeNode('e')
        let f = new TreeNode('f')

        root.left = b
        root.right = c
        b.left = d
        b.right = e
        c.right = f
    })


    describe('inOrderArray()', () => {
        describe('when given an empty tree', () => {
            it('should return an empty array', () => {
                expect(inOrderArray(null)).toEqual([])
            })
        })

        it('should return an array containing values of the binary tree following In-Order', () => {
            expect(inOrderArray(root)).toEqual(['d', 'b', 'e', 'a', 'c', 'f'])
        })
    })

    describe('postOrderArray()', () => {
        describe('when given an empty tree', () => {
            it('should return an empty array', () => {
                expect(postOrderArray(null)).toEqual([])
            })
        })

        it('should return an array containing values of the binary tree following Post-Order', () => {
            expect(postOrderArray(root)).toEqual(['d', 'e', 'b', 'f', 'c', 'a'])
        })
    })
})

// describe('Leet Code #105', () => {
//     it('https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/');
// });