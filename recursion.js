var obj = [
  {'name':'abc', 'parentObj':'def', 'val':''},
  {'name':'def', 'parentObj':'ghi', 'val':'4343'},
  {'name':'ghi', 'parentObj':'jkl', 'val':''},
  {'name':'jkl', 'parentObj':'', 'val':'123456'},
]

function getVal(name){

  var index = getIndexOf(name);
  var val = obj[index].val||'';
  if(val == ''){
    val = getVal(obj[index].parentObj);
  }
  return val;
}

function getIndexOf(name){
  for(var i=0; i<obj.length; i++){
    if(obj[i].name == name){
      return i;
    }
  }
  return -1;
}

console.log(getVal('abc'));
