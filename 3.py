# DCP Problem 3 (28.10.18)
# This problem was asked by Google.
# Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), 
# which deserializes the string back into the tree.

#  For example, given the following Node class

 class Node:
     def __init__(self, val, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

    def serialize()

        
    def deserialize(serializedNode)

 #The following test should pass:

 node = Node('root', Node('left', Node('left.left')), Node('right'))
 assert deserialize(serialize(node)).left.left.val == 'left.left'

 //TODO take a look at https://medium.com/@dimko1/serialize-and-deserialize-binary-tree-e9811ead85ed
 //Serialization in Ch6, Vol 2 JOIP
 //Algorithm Design and Analysis Ch4