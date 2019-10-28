/*            3
           /     \
          4      6
        /  \
      5    7
*/
class Node {
  constructor(element){
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

/*class tree{
  constructor(){
    this.left = null;
    this.root = null;
  }



  add(){

  }
}*/

var tr = new Node(3);
tr.left = new Node(4);
tr.right = new Node(6);
tr.left.left = new Node(5);
tr.left.right = new Node(7);
