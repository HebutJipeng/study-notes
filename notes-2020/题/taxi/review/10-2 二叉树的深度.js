// 求二叉树的最大最小深度;

// 求最大深度
function getMaxDeep(tree) {
    if (!tree) return 0
    return Math.max(getMaxDeep(tree.left), getMaxDeep(tree.right)) + 1
}

// 求最小深度
function getMinDeep(tree) {
    if (!tree) return 0
    if (!tree.left) return getMinDeep(tree.right) + 1
    if (!tree.right) return getMinDeep(tree.left) + 1

    return Math.min(getMinDeep(tree.left), getMinDeep(tree.right)) + 1
}

// 求dom树的最大最小深度； dom树的遍历;