var a = ["A","B","C"];

function permute(start, len){

  if(start == len)
    console.log(a);
  else{
    for(var i=start; i<= len; i++){
        swap(i,start);
        permute(start+1,len);
        swap(i,start);
    }
  }

}

function swap(s,t){
  var temp = a[s];
  a[s] = a[t];
  a[t] = temp;

}

var len = a.length-1;
var start = 0;

permute(start, len);
