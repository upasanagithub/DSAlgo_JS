var str = "[()]()()[][]]]]]]]";
str = str.split("");
console.log(str);

var openBrackets = ['(', '[', '{'];
var closeBrackets = [')', ']', '}'];

if(str.length==0){
  console.log("Empty string");
}
else if(str.length%2 != 0){
  console.log("Unbalanced Array as it has odd no. of entries");
}
else if(openBrackets.indexOf(str[0])<0 || closeBrackets.indexOf(str[str.length-1])<0){
  console.log("Unbalanced Array as the 1st and last character says");
}
else{
  var arr = [];
  var balanced = true;
  for(var i=0; i<str.length && balanced==true; i++){
    if(openBrackets.indexOf(str[i])>=0){
      arr.push(str[i]);
    }
    else if(closeBrackets.indexOf(str[i])>=0){

      if(arr.length > 0 ){
        var closeBracketIndex = closeBrackets.indexOf(str[i]);
        var openBracketIndex = openBrackets.indexOf(arr[arr.length-1]);

        if(closeBracketIndex == openBracketIndex){
          arr.pop();
        }
      }

      else{
        balanced = false;
      }

    }
  }

  if(arr.length==0 && balanced==true){
    console.log("Balanced Array");
  }
  else{
      console.log("Unalanced Array");
  }
}
