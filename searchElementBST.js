class Node{
  constructor(element){
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class bst{
  constructor(){
    this.root = null;
  }
  insertElement(element){
    var current = this.root;

    if(this.root == null){
      this.root = new Node(element);
    }
    else{
      this.add(element, this.root);
    }

  }
  add(element, node){
    if(element<node.element){
      if(node.left != null)
        this.add(element, node.left);
      else {
        node.left = new Node(element);
      }

    }
    else{
      if(node.right != null)
        this.add(element, node.right);
      else {
        node.right = new Node(element);
      }
    }
  }

  search(key){
    if(this.root == null || this.root.element == key){
      console.log("Element found");
    }
    else{
      var node = this.root;
      this.searchNode(node, key);
    }
  }

  searchNode(node, key){
    if(node == null)
      return;
    else if(node.element == key){
      console.log("Element Found");
    }
    else if(key < node.element){
      this.searchNode(node.left,key);
    }
    else if(key > node.element){
      this.searchNode(node.right,key);
    }
  }
}

var tree = new bst();

tree.insertElement(4);
tree.insertElement(2);
tree.insertElement(3);
tree.insertElement(7);
tree.insertElement(5);
tree.insertElement(9);

console.log(JSON.stringify(tree.root));

tree.search(19);
