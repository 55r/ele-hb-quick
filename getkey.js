/**
*author：张琪灵
*date:2018.1.12
*/
var a=new Array();
a[0] = document.cookie.split(";")[0].split("=")[0];
a[1] = document.cookie.split(";")[1].split("=")[0];
a[2] = document.cookie.split(";")[2].split("=")[0];
a[3] = document.cookie.split(";")[3].split("=")[0];
//alert(a);
//index the info
for(var j = 0;j<=3;j++)
{
 if(a[j].indexOf("snsInfo")!=-1){
   var cookie = j;
 }
}
var cookie_name=document.cookie.split(";")[cookie].split("=")[1];
  //document.cookie = cookie_name+"="+"恶魔退散！"+"; domain= .ele.me; path=/";
console.log("\r\n")
console.log("\r\n")
console.log("\r\n")
console.log("**************************这是饿了么KEY*******************************");
console.log(cookie_name);
console.log("**************************这是饿了么KEY*******************************");
console.log("\r\n")
console.log("\r\n")
