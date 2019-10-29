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

function preorderTraverse(node){
  if(node == null)
    return;
  console.log(node.element);
  preorderTraverse(node.left);
  preorderTraverse(node.right);
}

var tr = new Node(3);
var tr1 = tr;
tr.left = new Node(4);
tr.right = new Node(6);
tr.left.left = new Node(5);
tr.left.right = new Node(7);

preorderTraverse(tr1);
