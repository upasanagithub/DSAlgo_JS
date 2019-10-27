/* var list ={ data 1, next: {
                            data: 2, next: {
                                             data: 3, next: null }}} */
class Node{
  constructor(element){
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
    constructor()
    {
        this.head = null;

    }

    // functions to be implemented
    // add(element)

    add(element){
      var node = new Node(element);
      if(this.head == null){
        this.head = node;
      }
      else{
        var current = this.head;
        while(current.next){
          current = current.next;
        }
        current.next = node;
      }
    }

    printList(){
      var str = '';
      var current = this.head;
      while(current != null){
        if(str)
          str += '->'+current.element;
        else {
          str = current.element;
        }
        current = current.next;
      }
      return str;
    }

}
var ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log(ll.printList());
