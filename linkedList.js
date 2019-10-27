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
        this.size = 0;
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
      this.size++;
    }
    //insert at given position

    insertAt(element, position){
      var head = this.head;
      var node = new Node(element);
      if(position <=0 || position>this.size+1)
        return;
      else if(position == 1){
        node.next = head;
        this.head = node;
      }
      else if(position == this.size+1){
        var current = this.head;
        while(current.next){
          current = current.next;
        }
        current.next = node;
      }
      else{
        var current = this.head;
        for(var i=1; i<position-1; i++){
          current = current.next;
        }
        var nextNode = current.next;
        node.next = current.next;
        current.next = node;

      }
      this.size++;

    }

    removeFrom(position){
      if(position <= 0 || position > this.size+1)
        return;
      else if(position == 1){
        this.head = this.head.next;
      }
      else if(position == this.size){
        var current = this.head;
        var lastPrevNode;
        while(current.next){
          lastPrevNode = current;
          current = current.next;
        }
        lastPrevNode.next = null;
      }
      else{
        var current = this.head;

        for(var i=1; i<position-1; i++){
          current = current.next;
        }
        current.next = current.next.next;
      }

      this.size--;
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
ll.insertAt(5, 1);
console.log(ll.printList());
ll.insertAt(60, 7);
console.log(ll.printList());
ll.insertAt(35, 5);
console.log(ll.printList());
ll.removeFrom(1);
console.log(ll.printList());
ll.removeFrom(7);
console.log(ll.printList());
ll.removeFrom(5);
console.log(ll.printList());
