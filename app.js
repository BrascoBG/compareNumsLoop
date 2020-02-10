function test(args){
  let max = 0;
  for(i = 1; i < args.length; i++){
    let current = Number(args[i]);
    if(current > max){
      max = current;
    }
  }
  console.log("Max is: " + max);
}
test([2,5,55,50,65]);
