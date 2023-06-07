function program1(callback)
{
   setTimeout(function(){
    console.log("Dat hang");
    callback();
   },5000)
}
function program2(){
    console.log("Thanh Toan");
}
program1(program2);
