const Node = function(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
};

const BSTree = function(data) {
	if(data) {
		this.root = new Node(data, null, null);
	} else {
		this.root = null;
	}
};

// BST插入
BSTree.prototype.insert = function(data) {
	const node = new Node(data, null, null);
	if(!this.root) {
		this.root = node;
	} else {
		let currentNode = this.root;
		let parentNode;
		while(true) {
			parentNode = currentNode;
            //因为没有父指针，需要存储当前节点的父节点
			if(data < currentNode.data) {
				currentNode = currentNode.left;
				if(!currentNode) {
					parentNode.left = node;
					break;
				}
			} else {
				currentNode = currentNode.right;
				if(!currentNode) {
					parentNode.right = node;
					break;
				}
			}
		}
	}
};

BSTree.prototype.remove = (data) => {
	let currentNode = this.root;
	let parentNode;
	while(currentNode && currentNode.data !== data) {
		parentNode = currentNode;
		if(data < currentNode.data)
			currentNode = currentNode.left;
		else 
			currentNode = currentNode.right;
	}
	if(!currentNode) return;
	if(!currentNode.left || !currentNode.right) { //至少有一个孩子为空时
		if(!parentNode) {
			this.root = currentNode.left ? currentNode.left : currentNode.right;
		} else if(parentNode.left == currentNode) {
			parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
		} else {
			parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
		}
	} else { //孩子都不为空，找直接后继
		const mid = currentNode.right;
		parentNode = currentNode;

	}
}

// BST查找
BSTree.prototype.find = (data) => {
	let node = this.root;
	while(node) {
		if(data == node.data) {
			return node;
		} else if(data < node.data) {
			node  = node.left;
		} else {
			node = node.right;
		}
	}
	return null;
}

BSTree.prototype.min = () => {
	let node = this.root;
	while(node.left) {
		node = node.left
	}
	return node.data
}

BSTree.prototype.max = () => {
	let node = this.root;
	while(node.right) {
		node = node.right
	}
	return node.data
}

BSTree.prototype.preOrder = (node) => {
	if(node) {
		console.log(node.data);
		this.preOrder(node.left);
		this.preOrder(node.right);
	}
}

BSTree.prototype.inOrder = (node) => {
	if(node) {
		this.preOrder(node.left);
		console.log(node.data);
		this.preOrder(node.right);
	}
}

BSTree.prototype.postOrder = (node) => {
	if(node) {
		this.preOrder(node.left);
		this.preOrder(node.right);
		console.log(node.data);
	}
}