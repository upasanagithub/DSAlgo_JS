var arr = [2, 4, 8, 20, 55, 77];

var ele = 20;
var start = 0;
var end = arr.length-1;
var found = 0;
if(ele > arr[arr.length-1])
  console.log("Element not found");

else{
  while(end>=start && found == 0){

    var med = parseInt((start+(end-start)/2),10);

    console.log(start+"  "+med+"  "+end);

    if(ele == arr[med]){
      console.log("Element found at postion: "+(med+1));
      found = 1;
    }
    else if(ele < arr[med]){
      end = med-1;
    }
    else{
      start = med+1;
    }

  }
}
