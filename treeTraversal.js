/*            3
           /     \
          4      6
        /  \
      5    7
*/
class Node{
  constructor(element){
    this.element = element;
    this.left = null;
    this.right = null;
  }

}

class bt{
  constructor(){
    this.root = null;
  }
  buildSampleTree(){
    console.log("here");
    if(this.root == null)
      this.root = new Node(3);
    var current = this.root;
    current.left = new Node(4);
    current.right = new Node(6);
    current.left.left = new Node(5);
    current.left.right = new Node(7);

  }
  preorderTraverse(node){ //output: 3 4 5 7 6

    if(node == null)
      return;
    console.log(node.element);
    this.preorderTraverse(node.left);
    this.preorderTraverse(node.right);
  }

  inorderTraversal(node){ //output: 5 4 7 3 6
    if(node == null)
      return;
    this.inorderTraversal(node.left);
    console.log(node.element);
    this.inorderTraversal(node.right);
  }

  postorderTraversal(node){ // output: 5 7 4 6 3
    if(node == null)
      return;
    this.postorderTraversal(node.left);

    this.postorderTraversal(node.right);
    console.log(node.element);
  }

}

var bTree = new bt();
bTree.buildSampleTree();
bTree.preorderTraverse(bTree.root);
bTree.inorderTraversal(bTree.root);
bTree.postorderTraversal(bTree.root);
