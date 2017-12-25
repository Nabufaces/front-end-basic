const tree = {
    data: 1,
    left: {
        data: 2,
        left: {
            data: 4
        }
    },
    right: {
        data: 3,
        left: {
            data: 5,
            left: {
                data: 7
            },
            right: {
                data: 8
            }
        },
        right: {
            data: 6
        }
    }
};

const levelOrderTraversal = node => {
    if(!node) {
        return;
    }
    const que = [];
    que.push(node);
    while(que.length > 0) {
        node = que.shift();
        console.log(node.data);
        if(node.left) que.push(node.left);
        if(node.right) que.push(node.right);
    }
};

levelOrderTraversal(tree);

const deepTraversal = node => {
    if(!node) {
        return;
    }
    let stack = [];
    stack.push(node);
    while(node) {
        stack.push(node.data);
        while(node.left) {
            node = node.left;
            stack.push(node.data);
        }
        while(node.right) {
            node = node.right;
            stack.push(node.data);
        }
    }
    console.log(stack)
};

deepTraversal(tree)