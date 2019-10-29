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
    this.rigth = null;
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
  preorderTraverse(node){

    if(node == null)
      return;
    console.log(node.element);
    this.preorderTraverse(node.left);
    this.preorderTraverse(node.right);
  }
}

var bTree = new bt();
bTree.buildSampleTree();
bTree.preorderTraverse(bTree.root);
