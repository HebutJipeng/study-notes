function BinaryTree() {
    var Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    function insertNode(node, newNode) {
        if (node.key > newNode.key) {
            if (node.left) {
                insertNode(node.left, newNode)
            } else {
                node.left = newNode
            }
        } else {
            if (node.right) {
                insertNode(node.right, newNode)
            } else {
                node.right = newNode
            }
        }
    }

    var rootNode = null

    this.insert = function (key) {
       var node = new Node(key) 
       if (rootNode) {
            insertNode(rootNode, node)
       } else {
           rootNode = node
       }
    }

    var inOrderTraverseNode = function(node, callback) {
        if (node) {
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.inOrderTraverse = function (callback) {
       inOrderTraverseNode(rootNode, callback) 
    }

    var minBinary = function(node) {
        if (node) {
            if (node.left) {
                return minBinary(node.left)
            } else {
                return node.key
            }
            
        } else {
            return null
        }
    }

    this.searchMinBinary = function() {
        return minBinary(rootNode)
    }

    var maxBinary = function(node) {
        if (node) {
           if (node.right) {
               return maxBinary(node.right)
           } else {
               return node.key
           }
        }
        return null
    }

    this.searchMaxBinary = function() {
        return maxBinary(rootNode)
    }

    var searchNode = function(node, key) {
        if (node) {
          if (node.key === key) {
            return node
          } else if(node.key > key)  {
              return searchNode(node.left, key)
          } else {
              return searchNode(node.right, key)
          }
        } else {
            return null
        }
        
    }

    this.searchNode = function (key) {
        return searchNode(rootNode, key)
    }

    var findMinNode = function(node){
        if(node) {
            while(node && node.left !== null){
                node = node.left;
            }
            return node;
        }
        return null;
    }

    var removeNode = function(node, key) {
        if (node) {
           if (node.key > key) {
               node.left = removeNode(node.left, key)
               return node
           } else if(node.key < key) {
               node.right = removeNode(node.right, key)
               return node
           } else {
               if (!node.left && !node.right) {
                   node = null
                   return node
               }

               if (!node.left) {
                   node = node.right
                   return node
               } else if (!node.right) {
                   node = node.left
                   return node
               }

               var aux = findMinNode(node.right);
				node.key = aux.key;
				node.right = removeNode(node.right,aux.key);

           }
        } else {
            return null
        }
    }

    this.startRemoveNode = function (key) {
        this.removeNode(rootNode, key)
    }
}




var nodearr = [8,3,10,1,6,14,4,7,13];
var bt = new BinaryTree()
nodearr.forEach(value => {
    bt.insert(value)
})

console.log(bt.searchNode(6))