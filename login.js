prime problem
let num=13
check the given number is prime or not
  let count=0;
    for (i=1;i<=num;i++){
        if(num%i==2)
        count++;
    
    }
    if(count==2){
console.log("Yes");
}else {
console.log("No");

}




  palindrome problem

str="nrupul"


 let jhola="";
    for (let i=str.length-1;i>=0;i++){
        
         jhola=jhola+str[i];
    }
    
    if(jhola==str){
        
        console.log("Yes");
        
    }if(jhola!==str){
        
       console.log("No");
    }
    