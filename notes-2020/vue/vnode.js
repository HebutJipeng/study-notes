class VNode {
    constructor (tag, data, children, text, elm) {
        // 当前节点的标签名
        this.tag = tag
        // 当前节点的一些数据信息，比如props,AuthenticatorAttestationResponse
        this.data = data
        // 当前节点的子节点 []
        this.children = children
        // 当前节点的文本
        this.text = text
        // 当前虚拟节点对应的真实节点
        this.elm = elm
    }
}

// 创建一个空节点
function createEmptyNode () {
    const node = new VNode()
    node.text = ''
    return node
}

// 创建一个文本节点
function createTextNode(val) {
    return new VNode(undefined, undefined, undefined, String(val))
}

// 克隆node
function cloneVnode(node) {
    const cloneVnode = new VNode(
        node.tag,
        node.data,
        node.children,
        node.text,
        node.elm
    )
    return cloneVnode
}



