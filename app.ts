function showMessage(){
  console.log("TypeScript Tutorial");
}
// Optional Parameter
function addProduct(id:number,name?:string,price?:number) {
    console.log("ID :"+id);
    console.log("NAMES :"+name);
    if(price!=undefined){
    console.log("PRICE :"+price);
    }
}
// Rest Parameter
function addNumber(...nums:number[]){
  var sum:number=0;
  var i;
  for(i=0;i<nums.length;i++){
    sum+=nums[i];
  }
  console.log("Summation :"+sum);
}
addNumber(1,2);
addNumber(1,2,3);
addNumber(1,2,3,4);
addNumber(1,2,3,4,5);

addProduct(100,"Iphone");
addProduct(101,"Iphone",15000);
