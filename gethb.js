/**
*author：张琪灵
*date:2018.1.12
*/


//get cookie 获取四个cookie的名字
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
/*
    var cookie=prompt("输入snsInfo位置0,1,2,3","0");
  	if (cookie!=null && cookie!=""){
        cookie = cookie;
*/
  	    var   lucky_number = prompt("使用哪一个key 0-11");//自己改下。
        if (cookie!=null && cookie!=""){
          //get cookie name
          var cookie_name=document.cookie.split(";")[cookie].split("=")[0]; // alert(cookie_name);
          //cookie array
            var key=new Array();
			//这里填写你获取到的KEY
            key[0] = '';
            key[1] = "";
            key[2] = "";
            key[3] = "";
            key[4] = "";
            key[5] = "";
            key[6] = "";
            key[7] = "";
			key[8] = "";
			key[9] = "";
			key[10] = "";
            document.cookie = cookie_name+"="+key[lucky_number]+"; domain= .ele.me; path=/";
            location.reload();
        }
